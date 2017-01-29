var logMgr = require('../utils/serverLogger')('handleDraftSaveRequest.js', true);
var responder = require('../responder');

var navigate = require('./handleNavRequest');

module.exports = function(req, res, connection, session_uid, userRow) {
  logMgr.out('A draft save request was received from user ' + userRow.uid);

  var user_uid = userRow.uid,
      draftPath = req.body.draftPath,
      draftBody = req.body.draftBody,
      draftParent = req.body.draftParent;

  logMgr.verbose('Got path ' + draftPath + ' and body ' + draftBody + ' to be saved with draft parent ' + draftParent + '.');

  // first thing's last: validate this draft submission for valid path and body
  var warningMsg = '';
  if(draftPath.length > 100) {
    warningMsg += 'Your path teaser may not exceed 100 characters. ';
  }
  if(draftBody.length > 2500) {
    warningMsg += 'Your chapter content may not exceed 2,500 characters. ';
  }

  if(warningMsg) {
    warningMsg += '(This rule applies to drafts as well.)';
    responder.respondMsgOnly(res, {warning: warningMsg});
    connection.release();
    return;
  }

  // assume user already has a draft on this node and try to update/overwrite
  var query =
    'UPDATE drafts SET path_snippet=?, node_snippet=? ' +
    'WHERE parent_uid=? AND author_uid=?;';
  connection.query(query, [draftPath, draftBody, draftParent, user_uid], function(err, rows) {
    if(err) {
      responder.respondError(res, 'Database error attempting to update existing draft.');
      logMgr.error(err);
      connection.release();
      return;
    }

    var affected = rows.affectedRows;
    var changed = rows.changedRows;
    logMgr.verbose('rows affected: ' + affected + ' rows changed: ' + changed);

    // if changed rows > 0, we successfully overwrote, and we're done.
    // if affected rows > 0, but changed == 0, new save was same as old, and we're done.
    if(changed > 0 || (changed == 0 && affected > 0)) {
      req.body.navigateTarget = draftParent;
      navigate(req, res, connection, session_uid, userRow);
      // don't release connection here, it will be needed in navigate and cleared in nav response
      return;
    }

    // else, no rows effected && none changed, means we need to create a draft record
    if(affected < 1) {

    }
  });
}
