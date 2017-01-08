var generateGuid = require('../utils/uid-gen');
var logMgr = require('../utils/serverLogger')('handleNewNodeRequest.js', true);
var responder = require('../responder');

var navigate = require('./handleNavRequest');

module.exports = function(req, res, connection, session_uid, userRow) {
  var inputPath = req.body.newNodePath;
  var inputBody = req.body.newNodeBody;
  var user_uid = userRow['uid'];
  var user_position = userRow['node_uid'];

  logMgr.out('User ' + user_uid + ' requested to create a new node from position ' + user_position + ' with inputPath "' +
    inputPath + '..." and inputBody "' + inputBody.split(0, 50) + '..."');

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

  //
  // INPUT VALIDATION

  var warningMsg = '';

  var whiteSpaceRegex = /\S*[\s]{3,}\S*/g;

  // check new path content for too many consecutive white space chars
  if(whiteSpaceRegex.test(inputPath)) {
    var matches = inputPath.match(whiteSpaceRegex);
    var problems = 'Found the following problems: ';
    for(var i = 0; i < matches.length; i++) {
      if(/\S*[\s]{3,}\S*/.test(matches[i])) {
        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
      }
    }
    responder.respondMsgOnly(res, {warning: 'Groups of more than two consecutive spaces, tabs, hard returns, and other ' +
      'white space characters together in your story content are forbidden in path teasers.  Please correct any errors and try again!  ' +
      problems});
    connection.release();
    return;
  }

  // check new body content for too many consecutive white space chars
  if(whiteSpaceRegex.test(inputBody)) {
    var matches = inputBody.match(whiteSpaceRegex);
    var problems = 'Found the following problems: ';
    for(var i = 0; i < matches.length; i++) {
      if(/\S*[\s]{3,}\S*/.test(matches[i])) {
        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
      }
    }
    responder.respondMsgOnly(res, {warning: 'Groups of more than two consecutive spaces, tabs, hard returns, and other ' +
      'white space characters together in your story content are forbidden in story content.  Please correct any errors and try again!  ' +
      problems});
    connection.release();
    return;
  }

  var startingWhiteSpaceRegex = /^\s/;
  var endingWhiteSpaceRegex = /\s$/;

  // check new path or body for starting white space
  if(startingWhiteSpaceRegex.test(inputPath)) {
    responder.respondMsgOnly(res, {warning: 'Path teasers may not begin with white space.  Please try again!'});
    connection.release();
    return;
  }
  else if(startingWhiteSpaceRegex.test(inputBody)) {
    responder.respondMsgOnly(res, {warning: 'Story content may not begin with white space.  Please try again!'});
    connection.release();
    return;
  }

  // check new path or body for ending white space
  if(endingWhiteSpaceRegex.test(inputPath)) {
    responder.respondMsgOnly(res, {warning: 'Path teasers may not end with white space.  Please try again!'});
    connection.release();
    return;
  }
  else if(endingWhiteSpaceRegex.test(inputBody)) {
    responder.respondMsgOnly(res, {warning: 'Story content may not end with white space.  Please try again!'});
    connection.release();
    return;
  }

  var repeatCharRegex = /\S*(.)\1{3,}\S*/g;

  // check new path content for too many consecutive same characters
  if(repeatCharRegex.test(inputPath)) {
    var matches = inputPath.match(repeatCharRegex);
    var problems = 'Found the following problems: ';
    for(var i = 0; i < matches.length; i++) {
      if(/(.)\1{3,}/.test(matches[i])) {
        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
      }
    }
    responder.respondMsgOnly(res, {warning: 'Consecutive sets of 4 or more of the same character are forbidden in path teasers.  ' +
      'Please correct any errors and try again!  ' + problems});
    connection.release();
    return;
  }

  // check new body content for too many consecutive same characters
  if(repeatCharRegex.test(inputBody)) {
    var matches = inputBody.match(repeatCharRegex);
    var problems = 'Found the following problems: ';
    for(var i = 0; i < matches.length; i++) {
      if(/(.)\1{3,}/.test(matches[i])) {
        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
      }
    }
    responder.respondMsgOnly(res, {warning: 'Consecutive sets of 4 or more of the same character are forbidden in story content.  ' +
      'Please correct any errors and try again!  ' + problems});
    connection.release();
    return;
  }

  // check input path length restrictions
  if(inputPath.length < 4) {
    warningMsg += 'Your path teaser must be at least 4 characters long. ';
  }
  else if(inputPath.length > 100) {
    warningMsg += 'Your path teaser may not exceed 100 characters. ';
  }

  // check input body length restrictions
  if(inputBody.length < 500) {
    warningMsg += 'Your chapter content must be at least 500 characters long. ';
  }
  else if(inputBody.length > 2500) {
    warningMsg += 'Your chapter content may not exceed 2,500 characters. ';
  }

  if(warningMsg) {
    warningMsg = warningMsg + '.';
    responder.respondMsgOnly(res, {warning: warningMsg});
    connection.release();
    return;
  }

  // INPUT VALIDATION
  //

  // ensure user did not author the current node, that current node exists, and that it is not status deleted
  var query = 'SELECT status, author_uid FROM nodes WHERE uid=?;';
  connection.query(query, [user_position], function(err, rows) {
    if(err) {
      responder.respondError(res, 'Database error validating user permission to post new content at this position.');
      logMgr.error(err);
      connection.release();
      return;
    }

    if(rows.length < 1) {
      // no rows returned; current node didn't even exist!  No idea where user is; send them to start
      req.body.navigate = constants.rootNodeUid;
      navigate(req, res, connection, session_uid, userRow, {error: 'Attempted to append to a chapter that does not exist!  You are being sent back to the beginning of the story.'});
      return;
    }

    if(rows[0].status != constants.nodeStatusVisible) {
      // not a valid node to append new story nodes to
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
          'INSERT INTO nodes (uid, parent_uid, author_uid, path_snippet, node_snippet, votification, status) ' +
          'SELECT ?, positions.node_uid, positions.user_uid, ?, ?, ?, ? ' +
            'FROM positions ' +
            'WHERE positions.user_uid=?;' +
          'UPDATE positions SET node_uid=? WHERE user_uid=?; ' +
        'COMMIT;';
      var newNodeUid = generateGuid();
      connection.query(query, [newNodeUid, inputPath, inputBody, 0, constants.nodeStatusVisible, user_uid, newNodeUid, user_uid], function(err, rows) {
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
