function magistr(cb) {
  var input = '';
  var key = '77657173838482';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

magistr(function () {alert('Another haughty bloodsucker.......')})
magistr(function () {alert('YOU THINK YOU ARE GOD,BUT YOU ARE ONLY A CHUNK OF SHIT.')})