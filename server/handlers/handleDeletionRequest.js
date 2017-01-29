var db = require('../dbAccess')();
var logMgr = require('../utils/serverLogger')('handleDeletionRequest.js', true);
var responder = require('../responder');

var constants = require('../constants');
var navigate = require('./handleNavRequest');

module.exports = function(req, res, connection, session_uid, userRow) {
  var deleteTarget = req.body.deleteTarget;
  var user_uid = userRow['uid'];
  var user_position = userRow['node_uid'];

  if(!deleteTarget) {
    responder.respondError(res, 'Crucial data was missing from the chapter deletion request (the target!).');
    connection.release();
    return;
  }

  if(!user_position) {
    responder.respondError(res, 'Server could not verify which chapter you are visiting.  Unable to delete chapter without knowing your location.');
    connection.release();
    return;
  }

  // quickly make sure user is at the node they wish to delete
  if(!deleteTarget == user_position) {
    responder.respondMsgOnly(res, {warning: 'You are not permitted to delete a chapter you are not currently visiting.'});
    connection.release();
    return;
  }

  logMgr.out('User ' + user_uid + ' requested to delete node ' + deleteTarget + '...');

  // next step, ensure user was a moderator or the author of the node
  // and ensure this chapter still has no appendages
  var query =
    'START TRANSACTION;' +
      'SELECT author_uid, parent_uid, status FROM nodes WHERE uid=?;' +
      'SELECT COUNT(*) AS count FROM nodes WHERE parent_uid=? AND status=?;' +
    'COMMIT;';
  connection.query(query, [deleteTarget, deleteTarget, constants.nodeStatusVisible], function(err, rows) {
    if(err) {
      responder.respondError(res, 'Database error validating chapter and user properties for chapter deletion.');
      connection.release();
      return;
    }

    // if deleteTarget doesn't even exist, we're screwed already
    if(rows[1].length < 1) {
      responder.respondMsgOnly(res, {error: 'The chapter you tried to delete does not exist (and appears to have never existed)!'});
      connection.release();
      return;
    }

    // because these results are part of a transaction, the indexes are a bit wonky
    var author_uid = rows[1][0].author_uid;
    var parent_uid = rows[1][0].parent_uid;
    var status = rows[1][0].status;
    var pathCount = rows[2][0].count;

    logMgr.verbose('Got query rows from deletion request: ' + JSON.stringify(rows));

    // if the deleteTarget is already deleted, nav to the nearest safe node
    if(status == constants.nodeStatusDeleted) {
      logMgr.out('User tried to delete an already-deleted node, moving user to a safe node.');
      req.body.navigateTarget = deleteTarget;
      navigate(req, res, connection, session_uid, userRow, {warning: 'That node appears to have already been deleted.  Moving you to the nearest previous, undeleted node.'});
      // don't release connection here, it will be needed in navigate and cleared in nav response
      return;
    }
    // if the user is NOT the author and NOT a moderator, they're not permitted to delete this chapter
    if(userRow.acct_type != constants.acctTypeModerator && author_uid != user_uid) {
      responder.respondMsgOnly(res, {warning: "Only the author of a chapter (or a moderator) is permitted to delete a chapter."});
      connection.release();
      return;
    }
    // if there are appendages to the chapter, and you're the author of the chapter, you can't delete it
    else if(author_uid == user_uid && pathCount > 0 && userRow.acct_type != constants.acctTypeModerator) {
      responder.respondMsgOnly(res, {warning: "You may not delete a chapter that already has other chapters following it.  (This would ruin the hard work of other authors!)"});
      connection.release();
      return;
    }
    // if you're the chapter author but not a moderator, and there are no appendages to the chapter,
    // you can delete it, and all users here must be moved to this chapter's parent
    else if(author_uid == user_uid && pathCount == 0) {
      query =
        'START TRANSACTION ;' +
          'UPDATE positions SET node_uid=? WHERE node_uid=?; ' + // set position of all users (including the deleting user) at deleted node, to the parent of the deleted node
          'UPDATE nodes SET status=? WHERE uid=?; ' + // delete the targeted node
        'COMMIT;';
      connection.query(query, [parent_uid, deleteTarget, constants.nodeStatusDeleted, deleteTarget], function(err, rows) {
        if(err) {
          responder.respondError(res, 'A database error occurred while trying to delete the target chapter.  The chapter was probably not deleted.');
          connection.release();
          return;
        }

        responder.respond(res, session_uid, {msg: 'Chapter was deleted successfully!  Returning you to the previous chapter.'});
        connection.release()
        return;
      });
    }
    // if there are appendages to the chapter but you're a moderator, you can delete the chapter but ALL
    // descendants must also be deleted, and users on those nodes must be moved to safe positions
    else if(userRow.acct_type == constants.acctTypeModerator) {
      // this one is going to suck, no real way around it :(  horrible performance and DB heavy
      // the strategy is like this:
      //    find the nearest safe node ABOVE this one using recursion if necessary
      //    assign/store nearest safe node for future use (this is THE PROGENITOR)
      //    assign current level array to initially contain just the delete target
      //    while the current level array has items . . .
      //      for each node in the current level (initially just the current node)
      //        add each child node from each current level node to temp array
      //        move all users at each child node to THE PROGENITOR
      //        mark each current level node deleted
      //      overwrite array with temp array

      //    find the nearest safe node ABOVE this one using recursion if necessary
      // now we can recursively ensure the user is on a safe node
      var currentUid = deleteTarget;
      var currentStatus = null;
      var safeDestination = null; // for later

      // define recursive function without running it yet
      var r_findSafeNode = function() {
        logMgr.debug('Beginning safe node search ladder recursion for moderator deletion with:');
        logMgr.debug('currentUid: ' + currentUid);
        logMgr.debug('currentStatus: ' + currentStatus);
        // if we made it to a safe node, return without recursing
        if(currentStatus == constants.nodeStatusVisible) {
          logMgr.debug('Found safe destination node with uid: ' + currentUid + '; applying to safeDestination');
          // record safe destination and return
          safeDestination = currentUid;
          startModeratorDeletion();
          connection.release();
          return;
        }

        // if we got to root node and even that is unsafe, return without recursing and give error
        if(currentUid == constants.rootNodeUid) {
          // got all the way to root node and even that was marked deleted!
          responder.respondError(res, 'Someone appears to have nuked (or you appear to be trying to nuke) the entire site from orbit.  Not kidding.  (Cannot find safe node.)');
          connection.release();
          return;
        }

        // if we need to recurse (current node is not visible, and it's not the root)
        query = 'SELECT t1.parent_uid AS parentUid, t2.status AS parentStatus ' +
          'FROM nodes AS t1, nodes AS t2 ' +
          'WHERE t1.uid=? AND t1.parent_uid=t2.uid;';
        connection.query(query, [currentUid], function(err, rows) {
          if(err) {
            responder.respondError(res, 'Database error attempting to find safe node during moderator deletion attempt.');
            connection.release();
            return;
          }

          // in case current or parent node ID didn't exist at all, return without recursing and complain to the user
          if(rows.length == 0) {
            // leave user where they are, and inform them of the error
            responder.respondMsgOnly(res, {warning: 'Trajectory chain found to be corrupted in database during moderator deletion attempt! Navigation canceled.'});
            connection.release();
            return;
          }

          // update values and recurse!
          currentUid = rows[0].parentUid;
          currentStatus = rows[0].parentStatus;
          logMgr.debug('Recursing with:');
          logMgr.debug('currentUid: ' + currentUid);
          logMgr.debug('currentStatus: ' + currentStatus);
          r_findSafeNode();
        });
      }

      var startModeratorDeletion = function() {
        //    assign/store nearest safe node for future use (this is THE PROGENITOR; completed inside recursion base case check)
        logMgr.out('Ultimately ended with safe destination node deemed to be: ' + safeDestination);

        //    define recursive moderator deletion function
        var r_moderatorDeletion = function(nodeToDelete) {
          // because we don't know how many branches this recursion will generate,
          // we have to grab and release db connections for each recursion
          logMgr.verbose('Starting deletion work on node: ' + JSON.stringify(nodeToDelete));

          // node deletion connection and execution
          db.getConnection(function(err, deletionConnection) {
            if(err) {
              responder.respondError(res, 'Failed to establish database connection to delete chapters.');
              deletionConnection.release();
              return;
            }

            //        move all users at this current level node to the safe destination
            //        mark this current level node deleted
            var deleteQuery =
              'START TRANSACTION; ' +
                'UPDATE positions SET node_uid=? WHERE node_uid=?;' +
                'UPDATE nodes SET status=? WHERE uid=?;' +
              'COMMIT;';
            deletionConnection.query(deleteQuery, [safeDestination, nodeToDelete, constants.nodeStatusDeleted, nodeToDelete], function(err, rows) {
              if(err) {
                responder.respondError(res, 'Database error trying to move users to safe nodes and mark deletions in recursive moderator deletion.');
                logMgr.error(err);
                deletionConnection.release();
                return;
              }

              logMgr.out('Set status deleted and moved users away from node ' + nodeToDelete);
              try {
                deletionConnection.release();
              }
              catch(err) {
                logMgr.error('Problem releasing DB connection: ' + err.message ? err.message : err);
              }
              finally {
                return;
              }
            });
          });

          // recursion connection and execution
          db.getConnection(function(err, recursionConnection) {
            if(err) {
              responder.respondError(res, 'Failed to establish database connection to recurse during moderator chapter deletion.');
              recursionConnection.release();
              return;
            }

            var recursionQuery = 'SELECT uid FROM nodes WHERE parent_uid=?;';
            recursionConnection.query(recursionQuery, [nodeToDelete], function(err, rows) {
              if(err) {
                responder.respondError(res, 'Database error trying to gather child elements of node in moderator deletion.');
                logMgr.error(err);
                recursionConnection.release();
                return;
              }

              // call this function recursively on all child nodes
              rows.forEach(function(row) {
                // add the uid to the tempArray
                r_moderatorDeletion(row.uid);
              });

              try {
                recursionConnection.release();
\              }
              catch(err) {
                logMgr.error('Problem releasing DB connection: ' + err.message ? err.message : err);
              }
              finally {
                return;
              }
              return;
            });
          });
        }

        r_moderatorDeletion(deleteTarget);

        req.body.navigateTarget = safeDestination;
        navigate(req, res, connection, session_uid, userRow, {msg: 'Recursive deletion begun in background.  Moving you to nearest previous, undeleted chapter.'});
        // don't release connection here, it will be needed in navigate and cleared in nav response
        return;
      }

      // have to actually start the recursion
      r_findSafeNode();
    }
    // if some unforeseen case arises, this is a problem... return an error
    else {
      responder.respondError(res, 'A completely unforeseen error has occurred.  Not even sure what it is.  Seriously.');
      connection.release();
      return;
    }
  });
}
