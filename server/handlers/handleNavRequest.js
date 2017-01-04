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
      'WHERE positions.user_uid=? AND nodes.status=?;';
  connection.query(query, [destination, user_uid, constants.nodeStatusVisible], function(err, rows) {
    if(err) {
      responder.respondError(res, 'Database error attempting to set new user position.');
      logMgr.error(err);
      connection.release();
      return;
    }

    if(rows.affectedRows < 1) {
      // no updates made, meaning no such node, or node status deleted; fix!
      // user needs to be moved to a safe, undeleted node
    }

    responder.respond(res, session_uid);
    connection.release();
    return;
  });
}
