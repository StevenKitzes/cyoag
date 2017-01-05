var constants = require('../constants');
var logMgr = require('../utils/serverLogger')('handleNavRequest.js', true);
var responder = require('../responder');

module.exports = function(req, res, connection, session_uid, userRow) {
  var user_uid = userRow['uid'];
  var destination = req.body.navigate;
  logMgr.out('Navigation request received from user ' + user_uid + ' to node ' + destination);
  if(destination==constants.defaultParentUid) {
    responder.respondMsgOnly(res, {msg: "You are already at the first chapter."});
    connection.release();
    return;
  }

  var query =
    'UPDATE positions ' +
      'INNER JOIN nodes ON positions.node_uid=nodes.uid ' +
    'SET positions.node_uid=? ' +
      'WHERE positions.user_uid=? AND nodes.status<>?;';
  connection.query(query, [destination, user_uid, constants.nodeStatusDeleted], function(err, rows) {
    if(err) {
      responder.respondError(res, 'Database error attempting to set new user position.');
      connection.release();
      return;
    }

    if(rows.affectedRows < 1) {
      // this could mean the destination doesn't exist, so we need to check for that ...
      // if we see the destination does exist, that means
      // no updates were made, meaning node status is 'deleted'; user needs to be moved to a safe node
      // ...
      // recursively move user up until a non-deleted node is reached
      logMgr.out('Destination node was not found, moving user to a safe ancestor if possible; ' +
        'if destination ID not found, sadly must move user to start node.');

      var currentUid = destination; // if node exists at this point, it is a status 'deleted' node
      var currentStatus = constants.nodeStatusDeleted;
      var tryUpdateCurrent = function() {
        // if we made it to an un-deleted node, return without recursing
        if(currentStatus != constants.nodeStatusDeleted) {
          // set user position, respond
          query = 'UPDATE positions SET node_uid=? WHERE user_uid=?;';
          connection.query(query, [currentUid, user_uid], function(err, rows) {
            if(err) {
              responder.respondError(res, 'The node you tried to move to appears to have been deleted, but we ' +
                'experienced a database error moving you to the nearest previous undeleted node.');
              connection.release();
              return;
            }

            // user successfully repositioned, respond with a message explaining why the user wasn't moved where expected
            responder.respond(res, session_uid, {warning: 'That node appears to have been deleted while you were ' +
              'reading!  Moving you to the nearest previous undeleted node.'})
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
          query = 'SELECT t1.parent_uid AS parentUid, t2.status AS status FROM nodes AS t1, nodes AS t2 WHERE t1.uid=? AND t1.parent_uid=t2.uid;';
          connection.query(query, [destination], function(err, rows) {
            if(err) {
              responder.respondError(res, 'Database error attempting to set correct user position after attempted navigation to missing chapter.');
              connection.release();
              return;
            }

            // in case current node ID didn't exist in db at all, return without recursing and complain to the user
            if(rows.length == 0) {
              // leave user where they are, and inform them of the error
              responder.respondMsgOnly(res, {warning: 'Target chapter not found in database! Navigation canceled.'});
              connection.release();
              return;
            }

            // update values and recurse!
            currentUid = rows[0].parentUid;
            currentStatus = rows[0].status;
            tryUpdateCurrent();
          });
        }
      }

      tryUpdateCurrent();
    }
    else {
      // otherwise, if some row was affected, the user was moved; respond and render
      responder.respond(res, session_uid);
      connection.release();
      return;
    }
  });
}
