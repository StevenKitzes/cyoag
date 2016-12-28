var constants = require('../constants');
var logMgr = require('../utils/logger')('handleVotification.js', true);
var responder = require('../responder');

module.exports = function(req, res, connection, session_uid, userRow) {
  var user_uid = userRow['uid'];
  var node_uid = req.body.votify;
  var newVote = req.body.newVote;

  var oldValue, newValue, voteValueDiff;
  switch(newVote) {
    case constants.votificationDown:
      newValue = -1;
      break;
    case constants.votificationNone:
      newValue = 0;
      break;
    case constants.votificationUp:
      newValue = 1;
      break;
    default:
      responder.respondError(res, 'Illegal votification value for old vote.');
      connection.release();
      return;
  }

  // now we will have to query the DB to learn if we must update existing votes, or create a new row
  var query =
    'SELECT nodes.uid, votes.sentiment AS sentiment ' +
      'FROM nodes ' +
        'LEFT JOIN votes ' +
          'ON nodes.uid=votes.node_uid AND votes.user_uid=? AND votes.node_uid=? ' +
        'WHERE nodes.uid=?;';
  connection.query(query, [user_uid, node_uid, node_uid], function(error, rows) {
    if(rows.length > 1) {
      // too many rows back, indicates node duplicity
      responder.respondError(res, 'More than one vote detected for this user at this node.');
      connection.release();
      return;
    }
    else if(rows.length == 0) {
      // zero rows indicates node does not exist, can't vote on non-existent node
      responder.respondError(res, 'The node being voted on does not exist.  It may have been recently deleted.');
      connection.release();
      return;
    }

    var row = rows[0];

    if(row.sentiment == null) {
      // node existed so row returned, but no vote on that node for this user
      // create vote, and don't forget to update node's votification count
      query = 'START TRANSACTION; ' +
        'INSERT INTO votes (user_uid, node_uid, sentiment) VALUES (?, ?, ?); ' +
        'UPDATE nodes SET votification=votification+? WHERE uid=?;' +
        'COMMIT;'
      logMgr.verbose('Trying vote creation query: ' + query);
      connection.query(query, [user_uid, node_uid, newValue, newValue, node_uid], function(error, rows) {
        if(error) {
          responder.respondMsgOnly(res, {error: 'Database error creating a vote for this user on this node.'});
          logMgr.error('Database error: ' + error);
          connection.release();
          return;
        }

        res.clearCookie(constants.cookieNode);
        res.cookie(constants.cookieSession, session_uid, constants.cookieExpiry);
        res.send(
          JSON.stringify({
            votification: newVote
          })
        );
        connection.release();
        return;
      });
      //
      // end messy transaction code required by NPM mysql module:
    }
    else {
      // node and vote existed, so instead of creating we will need to update both
      oldValue = row.sentiment;
      voteValueDiff = newValue - oldValue;
      query = 'UPDATE votes, nodes ' +
        'SET votes.sentiment=?, nodes.votification=nodes.votification+? ' +
        'WHERE votes.user_uid=? AND votes.node_uid=? AND nodes.uid=?;'
      connection.query(query, [newValue, voteValueDiff, user_uid, node_uid, node_uid], function(error, rows) {
        if(error) {
          responder.respondError(res, 'Database error updating existing vote for this user on this node.');
          logMgr.error('Database error: ' + error);
          connection.release();
          return;
        }

        res.clearCookie(constants.cookieNode);
        res.cookie(constants.cookieSession, session_uid, constants.cookieExpiry);
        res.send(
          JSON.stringify({
            votification: newVote
          })
        );
        connection.release();
        return;
      });
    }
  });
}
