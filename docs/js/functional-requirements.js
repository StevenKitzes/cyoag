$(document).ready(function() {
  $('#iterations-container').toggle();
  $('#definitions-container').toggle();

  $('#iterations-expander').click(function() {
    $('#iterations-container').slideToggle();
  });
  $('#definitions-expander').click(function() {
    $('#definitions-container').slideToggle();
  });
});
