var logMgr = require('../utils/logger')('handleDraftSaveRequest.js', true);
var responder = require('../responder');

module.exports = function(req, res, connection, session_uid, userRow) {
  responder.respondMsgOnly(res, {warning: 'Draft salvation not yet implemented on backend, but FYI got path ' + req.body.draftPath +
    ' and body ' + req.body.draftBody + ' to be added with parent node ' + user_position + '.'});
  connection.release();
  return;
}
