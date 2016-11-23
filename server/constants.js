var constants = {}

constants.acctTypeVisitor = 'visitor';
constants.acctTypeRegistered = 'registered';
constants.acctTypeModerator = 'moderator';

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

constants.rootNodeUid = 'start';

constants.rootTrailingSnippet = '... and a cold wind blows.';
constants.rootLastPath = 'The writer takes up his pen.';

constants.sessionCookie = 'session_uid';

constants.trailingSnippetLength = 200;

constants.votificationNone = 'none';
constants.votificationUp = 'up';
constants.votificationDown = 'down';

module.exports = constants;
