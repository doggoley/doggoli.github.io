function suicide(cb) {
  var input = '';
  var key = '83857367736869';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

suicide(function () {alert('Your PC has been infected by the Suicide virus.')})
suicide(function () {alert('I will now kill myself. Press D to disinfect.')})
suicide(function () {alert('PHALCON/SKISM 1992, Hard at work to make your life a living hell')})

