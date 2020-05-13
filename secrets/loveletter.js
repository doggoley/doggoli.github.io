function loveletter(cb) {
  var input = '';
  var key = '7376798669897985';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

loveletter(function () {alert('Kindly check the attached LOVELETTER coming from me!')})
