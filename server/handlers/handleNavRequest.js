var constants = require('../constants');
var logMgr = require('../utils/serverLogger')('handleNavRequest.js');
var responder = require('../responder');

module.exports = function(req, res, connection, session_uid, userRow) {
  var user_uid = userRow['uid'];
  var destination = req.body.navigate;
  if(destination==constants.defaultParentUid) {
    responder.respondMsgOnly(res, {msg: "You are already at the first chapter."});
    connection.release();
    return;
  }

  var query = 'UPDATE positions SET node_uid=? WHERE user_uid=?;';
  connection.query(query, [destination, user_uid], function(err, result) {
    if(err) {
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
