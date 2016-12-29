module.exports = function() {
  var date = new Date();

  var
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

  return year + '.' + month + '.' + day + '.' + hour + '.' + minute + '.' + second;
}
