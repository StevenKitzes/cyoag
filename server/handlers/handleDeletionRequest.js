var logMgr = require('../utils/serverLogger')('handleDeletionRequest.js', true);
var responder = require('../responder');

var constants = require('../constants');

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
      'SELECT author_uid, parent_uid FROM nodes WHERE uid=?;' +
      'SELECT COUNT(*) AS count FROM nodes WHERE parent_uid=?;' +
    'COMMIT;';
  connection.query(query, [deleteTarget, deleteTarget], function(err, rows) {
    if(err) {
      responder.respondError(res, 'Database error validating chapter and user properties for chapter deletion.');
      connection.release();
      return;
    }

    // because these results are part of a transaction, the indexes are a bit wonky
    var author_uid = rows[1][0].author_uid;
    var parent_uid = rows[1][0].parent_uid;
    var pathCount = rows[2][0].count;

    logMgr.verbose('Got query rows from deletion request: ' + JSON.stringify(rows));

    // if the user is NOT the author and NOT a moderator, they're not permitted to delete this chapter
    if(userRow.acct_type != constants.acctTypeModerator && author_uid != user_uid) {
      responder.respondMsgOnly(res, {warning: "Only the author of a chapter (or a moderator) is permitted to delete a chapter."});
      connection.release();
      return;
    }
    // if there are appendages to the chapter, and you're the author of the chapter, you can't delete it
    else if(author_uid == user_uid && pathCount > 0) {
      responder.respondMsgOnly(res, {warning: "You may not delete a chapter that already has other chapters following it.  (This would ruin the hard work of other authors!)"});
      connection.release();
      return;
    }
    // if you're the chapter author and there are no appendages to the chapter, you can delete it, and all users
    // here must be moved to this chapter's parent
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
      //    assign THE PROGENITOR as the parent of the current node (parent of the delete target)
      //    assign current level array to contain just the delete target
      //    while the current level array has items . . .
      //      for each node in the current level (initially just the current node)
      //        add each child node from each current level node to temp array
      //        move all users at each child node to THE PROGENITOR
      //        delete each parent node
      //      overwrite array with temp array

    }
    // if some unforeseen case arises, this is a problem... return an error
    else {
      responder.respondError(res, 'A completely unforeseen error has occurred.  Not even sure what it is.  Seriously.');
      connection.release();
      return;
    }
  });
}
