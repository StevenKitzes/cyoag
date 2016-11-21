var constants = require('./constants');
var db = require('./dbAccess')();

function respondError(res, error) {
  console.log(error);
  var response = {};
  response.error = error;
  res.clearCookie(constants.sessionCookie);
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

  // if this user ID already exists, assign new session ID and redirect to main page
  console.log('Beginning response construction.');
  db.getConnection(function(error_getConnection, connection) {
    if(error_getConnection) {
      // handle any error getting connection from pool
      respondError(res, 'ERROR: Problem getting a database connection.  Unable to build response. ' + error_getConnection)
      connection.release();
      return;
    }

    // Let's get everything we can from a single query off the session_uid
    var query =
      'SELECT ' +
        'users.uid as userUid, ' +                // userUid
        'users.name as userName, ' +              // userName
        'users.acct_type as acctType, ' +         // acctType
        'positions.node_uid as nodeUid, ' +       // nodeUid
        'nodes.node_snippet as nodeSnippet, ' +   // nodeSnippet
        'nodes.path_snippet as pathSnippet, ' +   // pathSnippet
        'nodes.parent_uid as parentUid ' +        // parentUid
      'FROM ' +
        'users ' +
        'JOIN positions ON ' +
          'users.uid=positions.user_uid ' +
        'JOIN nodes ON ' +
          'positions.node_uid=nodes.uid ' +
      'WHERE ' +
        'users.session_uid=' + connection.escape(session_uid) + ';'
    connection.query(query, function(error, rows) {
      if(error) {
        // handle any error querying for users with this user ID
        respondError(res, 'ERROR: Problem querying database for user status. ' + error);
        connection.release();
        return;
      }

      // if no data was found with these requirements, this is an error here
      if(rows.length < 1) {
        respondError(res, 'ERROR: Problem identifying user with this session ID.');
        connection.release();
        return;
      }
      if(rows.length > 1) {
        respondError(res, 'ERROR: Found multiple users with this session ID.');
        connection.release();
        return;
      }

      var row = rows[0];
      response.userName = row.userName;
      response.acctType = row.acctType;
      response.nodeUid = row.nodeUid;
      response.snippet.nodeSnippet = row.nodeSnippet;
      response.snippet.lastPath = row.pathSnippet;

      var parentUid = row.parentUid;

      // Now do Votification
      var query = 'SELECT sentiment FROM votes WHERE voter_uid=' + connection.escape(row.userUid) +
        ' AND node_uid=' + connection.escape(row.nodeUid) + ';';
      connection.query(query, function(error, rows) {
        if(error) {
          respondError(res, 'ERROR: Problem retrieving votification information.');
          connection.release();
          return;
        }

        // if multiple votifications for this user and this node, warn server console, and don't count it, but don't error
        if(rows.length > 1) {
          console.log('WARNING: Multiple votifications found; ignoring.');
          response.votification = constants.votificationNone;
        }
        // if we got one result as expected
        else if(rows.length == 1) {
          var sentiment = rows[0];
          if(sentiment) {
            response.votification = constants.votificationUp;
          }
          else {
            response.votification = constants.votificationDown;
          }
        }
        // or zero which would be fine
        else {
          response.votification = constants.votificationNone;
        }

        // now get paths out from here by finding the nodes that have this node as a parent
        var query = 'SELECT uid as pathUid, path_snippet as pathSnippet, votification as pathVotification FROM nodes WHERE parent_uid=' + connection.escape(response.nodeUid) + ';';
        connection.query(query, function(error, rows) {
          if(error) {
            respondError(res, 'ERROR: Problem getting information on paths out of node.');
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
          if(response.nodeUid == 'start') {
            // root node gets special one-off trailing node snippet and trailing path snippet
            response.snippet.trailingSnippet = getTrailingFromSnippet(constants.rootTrailingSnippet);
            res.cookie(constants.sessionCookie, session_uid);
            res.send(JSON.stringify(response));
            connection.release();
            return;
          }
          // if we have to do a final db call to get trailing node
          else {
            var query = 'SELECT node_snippet as trailingSnippet ' +
              'FROM nodes WHERE uid=' + connection.escape(parentUid) + ';';
            connection.query(query, function(error, rows) {
              if(error) {
                respondError(res, 'ERROR: Failed to retrieve trailing node information.');
                connection.release();
                return;
              }

              if(rows.length != 1) {
                respondError(res, 'ERROR: Found multiple trailing nodes.  Note, this is impossible.');
                connection.release();
                return;
              }

              var parent = rows[0];

              var trailingSnippet = getTrailingFromSnippet(parent.trailingSnippet);

              response.snippet.trailingSnippet = trailingSnippet;

              res.cookie(constants.sessionCookie, session_uid);
              res.send(JSON.stringify(response));
              connection.release();
              return;
            });
          }
        });
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
exports.respondError = respondError;

module.exports = exports;
