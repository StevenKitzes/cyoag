var logMgr = require('../utils/serverLogger')('handleNewNodeRequest.js');
var responder = require('../responder');

module.exports = function(req, res, connection, session_uid, userRow) {
  var inputPath = req.body.newNodePath;
  var inputBody = req.body.newNodeBody;
  var user_uid = userRow['uid'];
  var user_position = userRow['node_uid'];
  var warningMsg;

  if(!user_position) {
    responder.respondError(res, 'Unable to establish link between existing chapter and new chapter.');
    connection.release();
    return;
  }

  if(!inputPath || !inputBody) {
    responder.respondError(res, 'Crucial data was missing from the chapter authoring request.');
    connection.release();
    return;
  }

  if(inputPath.length < 4) {
    warningMsg = 'Your path teaser must be at least 4 characters long';
  }
  else if(inputPath.length > 100) {
    warningMsg = 'Your path teaser may not exceed 100 characters';
  }

  if(inputBody.length < 1000) {
    if(warningMsg) {
      warningMsg = warningMsg + ' and your chapter content must be at least 1,000 characters long';
    }
    else {
      warningMsg = 'Your chapter content must be at least 1,000 characters long';
    }
  }
  else if(inputBody.length > 5000) {
    if(warningMsg) {
      warningMsg = warningMsg + ' and your chapter content may not exceed 5,000 characters';
    }
    else {
      warningMsg = 'Your chapter content may not exceed 5,000 characters';
    }
  }

  if(warningMsg) {
    warningMsg = warningMsg + '.';
    responder.respondMsgOnly(res, {warning: warningMsg});
    connection.release();
    return;
  }

  // ensure user did not author the current node
  var query = 'SELECT author_uid FROM nodes WHERE uid=?;';
  connection.query(query, [user_position], function(err, rows) {
    if(err) {
      responder.respondError(res, 'Database error validating user permission to post new content at this position.');
      logMgr.error(err);
      connection.release();
      return;
    }

    if(rows[0].author_uid == user_uid) {
      // user wrote the chapter at the current node, so they are top-blocked!
      responder.respondMsgOnly(res, {warning: "You are not allowed to post new chapters following chapters you wrote!"});
      connection.release();
      return;
    }

    // also ensure user did not already author any nodes following this node
    query = 'SELECT author_uid FROM nodes WHERE parent_uid=?;';
    connection.query(query, [user_position], function(err, rows) {
      if(err) {
        responder.respondError(res, 'Database error validating user permission to post new content at this position.');
        logMgr.error(err);
        connection.release();
        return;
      }

      for(var i = 0; i < rows.length; i++) {
        if(rows[i].author_uid == user_uid) {
          responder.respondMsgOnly(res, {warning: "You are not allowed to post multiple chapters following the same chapter!"});
          connection.release();
          return;
        }
      }

      // validate parent still exists
      // insert new chapter!!
      query =
        'START TRANSACTION; ' +
          'INSERT INTO nodes (uid, parent_uid, author_uid, path_snippet, node_snippet, votification) ' +
          'SELECT ?, positions.node_uid, positions.user_uid, ?, ?, ? ' +
            'FROM positions ' +
            'WHERE positions.user_uid=?;' +
          'UPDATE positions SET node_uid=? WHERE user_uid=?; ' +
        'COMMIT;';
      var newNodeUid = generateGuid();
      connection.query(query, [newNodeUid, inputPath, inputBody, 0, user_uid, newNodeUid, user_uid], function(err, rows) {
        if(err) {
          responder.respondError(res, 'Database error saving new chapter information.');
          logMgr.error(err);
          connection.release();
          return;
        }

        responder.respond(res, session_uid);
        connection.release();
        return;
      });
    });
  });
}
