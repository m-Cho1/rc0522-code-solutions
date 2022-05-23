var clicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  clicks++;
  $clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    $hotButton.classList.add('cold');
  } else if (clicks < 7) {
    $hotButton.classList.remove('cold');
    $hotButton.classList.add('cool');
  } else if (clicks < 10) {
    $hotButton.classList.remove('cool');
    $hotButton.classList.add('tepid');
  } else if (clicks < 13) {
    $hotButton.classList.remove('tepid');
    $hotButton.classList.add('warm');
  } else if (clicks < 16) {
    $hotButton.classList.remove('warm');
    $hotButton.classList.add('hot');
  } else {
    $hotButton.classList.remove('hot');
    $hotButton.classList.add('nuclear');
  }
});
