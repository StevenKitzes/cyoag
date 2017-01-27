// Alphabet from which to select characters for our UIDs
var alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Generate a random integer between min (inclusive) and max (exclusive)
function randInt(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

// Get a UID!!
function getUid() {
  // List of characters to be populated as we go
  var chars = [];

  // Even the dash locations are randomized (within constraints)
  var dash1 = 5 + randInt(5, 11);
  var dash2 = dash1 + randInt(5, 11);
  var dash3 = dash2 + randInt(5, 11);

  // Generate 37 characters separated by 3 randomly placed dashes
  for(var i = 0; i < 40; i++) {
    // If this is a dash index, insert a dash instead of a random character
    if(i == dash1 || i == dash2 || i == dash3) {
      chars.push('-');
    }
    // Insert random char by indexing into a random one from the alphabet above
    else {
      var cRand = randInt(0,62);
      chars.push(alphabet.charAt(cRand));
    }
  }

  // Join the running character list to create UID as a string
  var result = chars.join('');

  // Report and return generated UID
  return result;
}

// Expose the function that generates the UIDs
module.exports = getUid;
