function melissa(cb) {
  var input = '';
  var key = '77697673838365';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

melissa(function () {alert('Twenty-two points, plus triple-word-score, plus fifty points for using all my letters.')})
melissa(function () {alert("Game's over. I'm outta here.")})
