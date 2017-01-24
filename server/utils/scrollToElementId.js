module.exports = function(elementId) {
  // scroll window to the editing area - thanks to basil: http://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document
  var box = document.getElementById(elementId).getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  window.scrollTo(left, top);
}
