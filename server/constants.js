var constants = {}

constants.acctTypeBanned = 'banned';
constants.acctTypeDeleted = 'deleted';
constants.acctTypeModerator = 'moderator';
constants.acctTypeRegistered = 'registered';
constants.acctTypeVisitor = 'visitor';

// this maxAge value acconts for 2 weeks until expiry
constants.cookieExpiry = {maxAge: 1209600000, httpOnly: true};

constants.defaultNodeUid = 'default';
constants.defaultParentUid = '00000000000000-0000000000-00000000000000';
constants.defaultUserName = 'Visitor';
constants.defaultTrailingSnippet = '... and then the user sat down in front of the keyboard, and had to make a choice.';
constants.defaultLastPath = 'The user visits CYOAG.';
constants.defaultNodeSnippet = 'You have come to CYOAG, a unique Create Your Own Adventure Game experience!  Here you will enjoy ' +
  'the results of collaborative efforts by writers from all across the world to write one story of many paths and branches, together! ' +
  '(The CYOAG experience is still loading.)';

constants.emptyString = '';

constants.errorNodeUid = 'error';
constants.errorUserName = 'Visitor';
constants.errorTrailingSnippet = '... and it had been a long night, and the CYOAG development team was really tired.';
constants.errorLastPath = 'The developer makes a horrible mistake.';
constants.errorNodeSnippet = 'It looks like the CYOAG developers have done something wrong and led you here.  What did they do wrong, ' +
  'you might ask ... ?  Well, let me tell you!';

constants.messageRegularClass = 'cyoag-regular-message';
constants.messageWarningClass = 'cyoag-warning-message';
constants.messageErrorClass = 'cyoag-error-message';

constants.modalTypeMessage = 'cyoag-modal-type-message';
constants.modalTypeWarning = 'cyoag-modal-type-warning';
constants.modalTypeError = 'cyoag-modal-type-error';

constants.rootNodeUid = 'start';

constants.rootTrailingSnippet = '... a cold wind blows.';
constants.rootLastPath = 'The writer takes up his pen.';

constants.sessionCookie = 'session_uid';

constants.trailingSnippetLength = 200;

constants.votificationNone = 'none';
constants.votificationUp = 'up';
constants.votificationDown = 'down';

module.exports = constants;
