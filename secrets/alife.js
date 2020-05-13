function alife(cb) {
  var input = '';
  var key = '6576737069';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

alife(function () {alert("Save the Viruses!  They're People Too!!!!")})


