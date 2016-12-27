var logMgr = require('../utils/logger')('handleNewNameRequest.js', true);
var responder = require('../responder');

module.exports = function(req, res, connection, session_uid, userRow) {
  var newName = req.body.newName;
  if(newName.length < 3) {
    responder.respondMsgOnly(res, {warning: "Your name may not have fewer than 3 characters in it."});
    connection.release();
    return;
  }
  if(newName.length > 16) {
    responder.respondMsgOnly(res, {warning: "Your name may not have more than 16 characters in it."});
    connection.release();
    return;
  }
  if(newName.match(/-{2,}/)) {
    responder.respondMsgOnly(res, {warning: "Your name may not contain consecutive dashes."});
    connection.release();
    return;
  }
  if(newName.match(/[^a-zA-Z0-9-]/)) {
    responder.respondMsgOnly(res, {warning: "Your name may only contain letters, numbers, and dashes."});
    connection.release();
    return;
  }

  var query = 'UPDATE users SET name=? WHERE session_uid=?;';
  connection.query(query, [newName, session_uid], function(err, result) {
    if(err) {
      if(err.toString().toLowerCase().indexOf('duplicate')) {
        responder.respondMsgOnly(res, {warning: 'That name is already taken.  Please try another!'});
        logMgr.error(err);
        connection.release();
        return;
      }
      responder.respondError(res, 'Database error attempting to set new user position.');
      logMgr.error(err);
      connection.release();
      return;
    }

    responder.respond(res, session_uid);
    connection.release();
    return;
  });
}
