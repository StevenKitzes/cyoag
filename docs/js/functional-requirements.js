$(document).ready(function() {
  $('#iterations-container').toggle();
  $('#definitions-container').toggle();
  $('#user-stories-container').toggle();

  $('#iterations-expander').click(function() {
    $('#iterations-container').slideToggle();
  });
  $('#definitions-expander').click(function() {
    $('#definitions-container').slideToggle();
  });
  $('#user-stories-expander').click(function() {
    $('#user-stories-container').slideToggle();
  });
});
