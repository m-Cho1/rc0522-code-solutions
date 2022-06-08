var $countdown = document.querySelector('.countdown-display');
var text = ['3', '2', '1', '~Earth beeeeeeelowwwwww Us~'];
var counter = 0;

var intervalID = setInterval(function () {
  $countdown.textContent = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // for stopping interval after one cycle:
    clearTimeout(intervalID);
  }
}, 1000);
