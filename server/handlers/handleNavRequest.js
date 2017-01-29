var config = require('../build-config');
var constants = require('../constants');
var logMgr = require('../utils/serverLogger')('handleNavRequest.js', true);
var responder = require('../responder');

module.exports = function(req, res, connection, session_uid, userRow, forwardedMessage) {
  var user_uid = userRow.uid;
  var user_position = userRow.node_uid;
  var destination = req.body.navigateTarget;
  logMgr.out('Navigation request received from user ' + user_uid + ' to node ' + destination);

  if(config.DEBUG) {
    if(destination==constants.defaultParentUid) {
      responder.respondMsgOnly(res, {msg: 'You are already at the first chapter.'});
      connection.release();
      return;
    }

    if(user_position == destination) {
      responder.respond(res, session_uid, {msg: 'Current chapter is the same as the requested destination!  Refreshing the page.'});
      connection.release();
      return;
    }
  }

  // query will update user position IFF destination exists
  var query =
    'UPDATE positions SET node_uid=' +
    // ternary conditional in MySQL, how exciting!
    'IF( (SELECT uid FROM nodes WHERE uid=?) IS NULL, ' + // if destination doesn't exist
      'node_uid, ' + // set user position to where they already are (old uid)
      '?' + // if destination found, return destination uid
    ') WHERE user_uid=?;';
  // execute the query and deal with the consequences...
  connection.query(query, [destination, destination, user_uid], function(err, rows) {
    if(err) {
      responder.respondError(res, 'Database error attempting to set new user position.');
      connection.release();
      return;
    }

    if(rows.affectedRows < 1) {
      // destination node does not exist at all
      responder.respondMsgOnly(res, {warning: 'The requested chapter does not seem to exist.'});
      connection.release();
      return;
    }
    else {
      // user was moved! make sure user lands on a non-deleted chapter
      // recursively move user up until a non-deleted node is reached if needed
      logMgr.out('Destination found, ensuring user is on a safe, visible node.');

      // regretably we need a dedicated query to retrieve the status of the destination node
      query = 'SELECT status FROM nodes WHERE uid=?;';
      connection.query(query, [destination], function(err, rows) {
        if(err) {
          responder.respondMsgOnly(res, {warning: 'Database error prevented detection of chapter status.  You might need to refresh the page.'});
          connection.release();
          return;
        }

        // if no rows were returned, this node doesn't exist in the DB... respond with message
        if(rows.length < 1) {
          logMgr.error('A user tried to navigate to a non-existent chapter. Chapter UID does not exist in the database.');
          responder.respondMsgOnly(res, {error: 'Navigation was attempted to a chapter that does not appear to exist in the database! We will just let you stay where you are for now.'});
          connection.release();
          return;
        }

        // if destination was already a safe node, we can just respond to the client now
        if(rows[0].status == constants.nodeStatusVisible) {
          logMgr.out('Nav request targeted a safe node.  Already repositioned.  Building response.');
          responder.respond(res, session_uid, forwardedMessage ? forwardedMessage : null);
          try {
            connection.release();
          }
          catch(err) {
            logMgr.error('Problem releasing DB connection: ' + err.message ? err.message : err);
          }
          finally {
            return;
          }
        }

        logMgr.out('Nav request pointed to an unsafe node (deleted, etc; not visible).  Attempting to move to a safe node.');

        // now we can recursively ensure the user is on a safe node
        var currentUid = destination;
        var currentStatus = rows[0].status;

        // define recursive function without running it yet
        var tryUpdateCurrent = function() {
          logMgr.debug('Beginning safe node search ladder recursion with:');
          logMgr.debug('currentUid: ' + currentUid);
          logMgr.debug('currentStatus: ' + currentStatus);
          // if we made it to a safe node, return without recursing
          if(currentStatus == constants.nodeStatusVisible) {
            logMgr.debug('Found a visible node with uid: ' + currentUid);
            // set user position, respond
            query = 'UPDATE positions SET node_uid=? WHERE user_uid=?;';
            connection.query(query, [currentUid, user_uid], function(err, rows) {
              if(err) {
                responder.respondError(res, 'That chapter appears to have been deleted, AND we ' +
                'experienced a database error moving you to the nearest previous, undeleted chapter.  You might try ' +
                'refreshing the page.');
                connection.release();
                return;
              }

              logMgr.debug('Affected rows (checking whether a user position was updated or not): ' + rows.affectedRows);

              // user successfully repositioned, respond with a message explaining why the user wasn't moved where expected
              responder.respond(res, session_uid,
                forwardedMessage ?
                forwardedMessage :
                {warning: 'That chapter seems to have been deleted while you were reading!  Moving you to the nearest previous, undeleted node.'})
              connection.release();
              return;
            });
          }

          // if we got to root node and even that is deleted, return without recursing and give error
          else if(currentUid == constants.rootNodeUid) {
            // got all the way to root node and even that was marked deleted!
            responder.respondError(res, 'Someone nuked the entire site from orbit.  Not kidding.');
            connection.release();
            return;
          }

          // if we need to recurse again (current node is marked deleted, and it's not the root)
          else {
            // iterate if node exists, otherwise report the error
            query = 'SELECT t1.parent_uid AS parentUid, t2.status AS status ' +
              'FROM nodes AS t1, nodes AS t2 ' +
              'WHERE t1.uid=? AND t1.parent_uid=t2.uid;';
            connection.query(query, [currentUid], function(err, rows) {
              if(err) {
                responder.respondError(res, 'Database error attempting to set correct user position after attempted navigation to missing chapter.');
                connection.release();
                return;
              }

              // in case current or parent node ID didn't exist at all, return without recursing and complain to the user
              if(rows.length == 0) {
                // leave user where they are, and inform them of the error
                responder.respondMsgOnly(res, {warning: 'Trajectory chain corrupted in database! Navigation canceled.'});
                connection.release();
                return;
              }

              // update values and recurse!
              currentUid = rows[0].parentUid;
              currentStatus = rows[0].status;
              logMgr.debug('Recursing with:');
              logMgr.debug('currentUid: ' + currentUid);
              logMgr.debug('currentStatus: ' + currentStatus);
              tryUpdateCurrent();
            });
          }
        }

        // run recursion
        tryUpdateCurrent();
      });
    }
  });
}
