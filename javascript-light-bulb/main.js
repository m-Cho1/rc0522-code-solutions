var $bulb = document.querySelector('.light-bulb');
var $background = document.querySelector('body');
var click = 0;

$bulb.addEventListener('click', lightOn);
function lightOn(event) {
  if (click === 0) {
    $bulb.classList.remove('light-on');
    $bulb.classList.add('light-off');
    $background.className = 'black';
    click = 1;
  } else if (click === 1) {
    $bulb.classList.remove('light-off');
    $bulb.classList.add('light-on');
    $background.className = 'white';
    click = 0;
  }
}
