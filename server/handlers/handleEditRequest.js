var constants = require('../constants');
var logMgr = require('../utils/serverLogger')('handleNewNodeRequest.js', true);
var responder = require('../responder');

var navigate = require('./handleNavRequest');

module.exports = function(req, res, connection, session_uid, userRow) {
  var targetNode = req.body.editTarget;
  var updatedPath = req.body.updatedPath;
  var updatedBody = req.body.updatedBody;
  var user_uid = userRow.user_uid;
  var user_position = userRow.node_uid;

  logMgr.out('User ' + user_uid + ' requested to edit an existing node at position ' + targetNode + ' with updatedPath "' +
    updatedPath + '..." and updatedBody "' + updatedBody.split(0, 50) + '..."');

  if(!user_position) {
    responder.respondError(res, 'Unable to establish link between existing chapter and new chapter.');
    connection.release();
    return;
  }

  if(!updatedPath || !updatedBody) {
    responder.respondError(res, 'Crucial data was missing from the chapter authoring request.');
    connection.release();
    return;
  }

  if(targetNode != user_position) {
    responder.respondError(res, 'User was not detected at the location of the node being edited.');
    logMgr.debug('targetNode: ' + targetNode + ' user_position: ' + user_position)
    connection.release();
    return;
  }

  //
  // INPUT VALIDATION

  var warningMsg = '';

  var whiteSpaceRegex = /\S*[\s]{3,}\S*/g;

  // check new path content for too many consecutive white space chars
  if(whiteSpaceRegex.test(updatedPath)) {
    var matches = updatedPath.match(whiteSpaceRegex);
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
  if(whiteSpaceRegex.test(updatedBody)) {
    var matches = updatedBody.match(whiteSpaceRegex);
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
  if(startingWhiteSpaceRegex.test(updatedPath)) {
    responder.respondMsgOnly(res, {warning: 'Path teasers may not begin with white space.  Please try again!'});
    connection.release();
    return;
  }
  else if(startingWhiteSpaceRegex.test(updatedBody)) {
    responder.respondMsgOnly(res, {warning: 'Story content may not begin with white space.  Please try again!'});
    connection.release();
    return;
  }

  // check new path or body for ending white space
  if(endingWhiteSpaceRegex.test(updatedPath)) {
    responder.respondMsgOnly(res, {warning: 'Path teasers may not end with white space.  Please try again!'});
    connection.release();
    return;
  }
  else if(endingWhiteSpaceRegex.test(updatedBody)) {
    responder.respondMsgOnly(res, {warning: 'Story content may not end with white space.  Please try again!'});
    connection.release();
    return;
  }

  var repeatCharRegex = /\S*(.)\1{3,}\S*/g;

  // check new path content for too many consecutive same characters
  if(repeatCharRegex.test(updatedPath)) {
    var matches = updatedPath.match(repeatCharRegex);
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
  if(repeatCharRegex.test(updatedBody)) {
    var matches = updatedBody.match(repeatCharRegex);
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
  if(updatedPath.length < 4) {
    warningMsg += 'Your path teaser must be at least 4 characters long. ';
  }
  else if(updatedPath.length > 100) {
    warningMsg += 'Your path teaser may not exceed 100 characters. ';
  }

  // check input body length restrictions
  if(updatedBody.length < 500) {
    warningMsg += 'Your chapter content must be at least 500 characters long. ';
  }
  else if(updatedBody.length > 2500) {
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

  // ensure user DID author the current node (or is a moderator), that current node exists, that it is not status deleted
  var query = 'SELECT status, author_uid FROM nodes WHERE uid=?;';
  connection.query(query, [user_position], function(err, rows) {
    if(err) {
      responder.respondError(res, 'Database error validating positioning and authorization to edit this chapter.');
      connection.release();
      return;
    }

    if(rows.length < 1) {
      // no rows returned; current node didn't even exist!  No idea where user is; send them to start
      req.body.navigateTarget = constants.rootNodeUid;
      navigate(req, res, connection, session_uid, userRow, {error: 'Attempted to edit a chapter that does not exist!  You are being sent back to the beginning of the story.'});
      // don't release connection here, it will be needed in navigate and cleared in nav response
      return;
    }

    if(rows[0].status != constants.nodeStatusVisible) {
      // not a valid node to edit
      req.body.navigateTarget = rows[0].parent_uid;
      navigate(req, res, connection, session_uid, userRow, {error: 'Attempted to edit a chapter that appears not exist.  It may have been deleted while you were writing (possibly by a moderator).  You are being sent to the nearest undeleted chapter.'});
      // don't release connection here, it will be needed in navigate and cleared in nav response
      return;
    }

    if(rows[0].author_uid != user_uid && userRow.acct_type != constants.acctTypeModerator) {
      // user was not the original author, nor a moderator, so they are forbidden to edit here
      responder.respondMsgOnly(res, {warning: "Only a chapter's original author (or a moderator) is permitted to edit that chapter!"});
      connection.release();
      return;
    }

    // if all these checks were good, we should be fine committing the edit!
    query = 'UPDATE nodes SET path_snippet=?, node_snippet=? WHERE uid=?;';
    connection.query(query, [updatedPath, updatedBody, user_position], function(err, rows) {
      if(err) {
        responder.respondError(res, 'Database error committing edits.');
        connection.release();
        return;
      }

      responder.respond(res, session_uid, {msg: constants.specialMessage_editSuccess});
      connection.release();
      return;
    });
  });
}
