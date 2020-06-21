function andrija(cb) {
  var input = '';
  var key = '65786882737465';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

andrija(function () { document.location.href="secrets/page.html";} )
