var constants = require('./constants');
var db = require('./dbAccess')();

var logMgr = require('./utils/logger')('responder.js', true);

function respondError(res, error) {
  logMgr.error(error);
  var response = {};
  response.error = error;
  res.clearCookie(constants.sessionCookie);
  res.send(JSON.stringify(response));
}

/*
 *  Respond to the client with a message only, no other page content.  The 'msg'
 *  parameter here expects a JSON object with at least one of the properties:
 *  [msg | warning | error]
 *  where each property accepts a string.
 *  If more than one property is used, only the most severe level will be
 *  propagated.
 *  This function also accepts a simple string as for the message parameter, in
 *  which case this will be propagated as the lowest severity of message.
 *  Valid sample calls:
 *     respondMsgOnly(res, {warning: 'Be careful!'});
 *     respondMsgOnly(res, {error: 'Critical error requiring session reset!'}, true);
 */
function respondMsgOnly(res, msg, sessionReset) {
  var response = {};

  if(msg.error) {
    response.error = msg.error;
    logMgr.out('Responding with error: ' + msg.error);
  }
  else if(msg.warning) {
    response.warning = msg.warning;
    logMgr.out('Responding with warning: ' + msg.warning);
  }
  else if(msg.msg) {
    response.msg = msg.msg;
    logMgr.out('Responding with message: ' + msg.msg);
  }
  else {
    response.msg = msg;
    logMgr.out('Responding with message: ' + msg);
  }

  response.messageOnly = true;

  if(sessionReset) {
    logMgr.out('. . . including session reset.');
    res.clearCookie(constants.sessionCookie);
  }
  res.send(JSON.stringify(response));
}

function respond(res, session_uid, msg) {
  var response = {};
  response.snippet = {};

  // handle any messaging
  if(msg) {
    if(msg.msg) {
      response.msg = msg.msg;
    }
    if(msg.warning) {
      response.warning = msg.warning;
    }
    else {
      response.msg = msg;
    }
  }

  // build and send a response based on conditions
  logMgr.out('Beginning response construction.');
  db.getConnection(function(error_getConnection, connection) {
    if(error_getConnection) {
      // handle any error getting connection from pool
      respondError(res, 'Problem getting a database connection.  Unable to build response. ' + error_getConnection)
      connection.release();
      return;
    }

    // Let's get everything we can from a single query off the session_uid
    var query =
      'SELECT ' +
        'users.uid as userUid, ' +
        'users.name as userName, ' +
        'users.acct_type as acctType, ' +
        'positions.node_uid as nodeUid, ' +
        'nodes.node_snippet as nodeSnippet, ' +
        'nodes.path_snippet as pathSnippet, ' +
        'nodes.parent_uid as parentUid, ' +
        'votes.sentiment as sentiment ' +
      'FROM users ' +
        'LEFT JOIN positions ' +
          'ON users.uid=positions.user_uid ' +
        'LEFT JOIN nodes ' +
          'ON positions.node_uid=nodes.uid ' +
        'LEFT JOIN votes ' +
          'ON nodes.uid=votes.node_uid AND users.uid=votes.user_uid ' +
      'WHERE ' +
        'users.session_uid=?;'
    logMgr.verbose('Query attempted: ' + query);
    connection.query(query, [session_uid], function(error, rows) {
      if(error) {
        // handle any error querying for users with this session ID
        respondError(res, 'Database error querying for user status.');
        logMgr.error(error);
        connection.release();
        return;
      }
      logMgr.debug('Query yielded: ' + JSON.stringify(rows[0]));

      // if no data was found with these requirements, this is an error here
      if(rows.length < 1) {
        respondError(res, 'No user found with this session ID; normally this should be caught by session.js.');
        connection.release();
        return;
      }
      if(rows.length > 1) {
        respondError(res, 'Multiple users with this session ID; this should normally be caught by session.js.');
        connection.release();
        return;
      }

      var row = rows[0];

      // catch any problems thus far and handle them
      if(row.nodeUid == null) {
        // user was found, but couldn't determine position; create user position entry at 'start' and alert the user
        query = 'INSERT INTO positions (user_uid, node_uid) VALUES (?, ?);';
        connection.query(query, [row.userUid, constants.rootNodeUid], function(error, rows) {
          if(error) {
            // handle any error resetting this user's position
            respondError(res, 'Database error prevented correction of missing user position.');
            logMgr.error('Database query error trying to correct missing user position:');
            logMgr.error(error);
            connection.release();
            return;
          }

          respond(res, session_uid, {warning: 'User position was lost due to an error!  I apologize.  You are being returned to the start of the story.'});
          connection.release();
        });
        return;
      }
      if(row.parentUid == null) {
        // user position was found, couldn't find node with that uid; reset to 'start' and alert the user
        query = 'UPDATE positions SET node_uid=? WHERE user_uid=?;';
        connection.query(query, [constants.rootNodeUid, row.userUid], function(error, rows) {
          if(error) {
            // handle any error resetting this user's position
            respondError(res, 'Database error prevented reset of erroneous user position.');
            logMgr.error(error);
            connection.release();
            return;
          }

          respond(res, session_uid, {warning: 'User position was lost!  Possibly a chapter was deleted by its author or a moderator.  You are being returned to the start of the story.'});
          connection.release();
        });
        return;
      }

      response.userName = row.userName;
      response.acctType = row.acctType;
      response.nodeUid = row.nodeUid;
      response.parentUid = row.parentUid;
      response.snippet.nodeSnippet = row.nodeSnippet;
      response.snippet.lastPath = row.pathSnippet;
      switch(row.sentiment) {
        case 1:
          response.votification = constants.votificationUp;
          break;
        case -1:
          response.votification = constants.votificationDown;
          break;
        case 0:
        default:
          response.votification = constants.votificationNone;
          break;
      }
      logMgr.verbose('Votification status: ' + response.votification);

      // now get paths out from here by finding the nodes that have this node as a parent
      query =
        'SELECT uid as pathUid, path_snippet as pathSnippet, votification as pathVotification ' +
          'FROM nodes WHERE parent_uid=?;';
      connection.query(query, [response.nodeUid], function(error, rows) {
        if(error) {
          respondError(res, 'Database error path information from node.');
          logMgr.error(error);
          connection.release();
          return;
        }

        // for each row, with no-rows-returned being a legal state
        response.paths = [];
        for(var row = 0; row < rows.length; row++) {
          var path = {
            pathUid: rows[row].pathUid,
            pathSnippet: rows[row].pathSnippet,
            pathVotification: rows[row].pathVotification
          };
          response.paths.push(path);
        }

        // finally, let's get trailing node's info, if valid/needed (root node has no trailing node)
        if(response.nodeUid == constants.rootNodeUid) {
          // root node gets special one-off trailing node snippet and trailing path snippet
          response.snippet.trailingSnippet = getTrailingFromSnippet(constants.rootTrailingSnippet);
          res.cookie(constants.sessionCookie, session_uid, constants.cookieExpiry);
          res.send(JSON.stringify(response));
          connection.release();
          return;
        }
        // if we have to do a final db call to get trailing node
        else {
          var query = 'SELECT node_snippet as trailingSnippet FROM nodes WHERE uid=?;';
          connection.query(query, [response.parentUid], function(error, rows) {
            if(error) {
              respondError(res, 'Database error trying to retrieve information about previous chapter.');
              logMgr.error(error);
              connection.release();
              return;
            }

            if(rows.length != 1) {
              respondError(res, 'Found multiple parent chapters.  Note, this is impossible.  CYOAG dev is fired.');
              connection.release();
              return;
            }

            var parent = rows[0];
            var trailingSnippet = getTrailingFromSnippet(parent.trailingSnippet);
            response.snippet.trailingSnippet = trailingSnippet;

            res.cookie(constants.sessionCookie, session_uid, constants.cookieExpiry);
            res.send(JSON.stringify(response));
            connection.release();
            return;
          });
        }
      });
    });
  });
}

function getTrailingFromSnippet(full) {
  // if the snippet already fits within the limit for trailing snippet length
  if(full.length <= constants.trailingSnippetLength) {
    // just return the sucker
    return full;
  }

  var startIndex = full.length - constants.trailingSnippetLength;
  return '...' + full.substring(startIndex);
}

var exports = {};

exports.respond = respond;
exports.respondMsgOnly = respondMsgOnly;
exports.respondError = respondError;

module.exports = exports;
