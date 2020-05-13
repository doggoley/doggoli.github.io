function lentin(cb) {
  var input = '';
  var key = '766978847378';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

lentin(function () {alert('U r so cute today #!#!')})
lentin(function () {alert('True Love never ends')})
lentin(function() {alert('I like U very much!!')})
lentin(function() {alert('U r My Best Friend')})
