function doggoli(cb) {
  var input = '';
  var key = '68797171797673';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

doggoli(function () { document.location.href="secrets/page.html";} )
