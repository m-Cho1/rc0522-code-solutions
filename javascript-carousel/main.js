var $img = document.querySelector('img');
var counter = 0;
var images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];

// click handler for left/right arrow
var $left = document.getElementById('left');
var $right = document.getElementById('right');

$left.addEventListener('click', function () {
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  $img.setAttribute('src', images[counter]);
  changeDotsColor();
});

$right.addEventListener('click', function () {
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  $img.setAttribute('src', images[counter]);
  changeDotsColor();
});

// function for indicators
var $indicatorCont = document.querySelector('.indicator');
var $dots = document.querySelectorAll('.dot');

$indicatorCont.addEventListener('click', indicatorFunction);

function indicatorFunction(event) {
  if (event.target.tagName === 'I') {
    counter = parseInt(event.target.getAttribute('id'));
    $img.setAttribute('src', images[counter]);
    changeDotsColor();
  }
}

// function for changing indicator (dots) color
function changeDotsColor() {
  for (var i = 0; i < $dots.length; i++) {
    var current = $dots[i];
    current.className = 'far fa-circle margin dot';
    if (parseInt(current.getAttribute('id')) === counter) {
      current.className = 'fas fa-circle margin dot';
    }
  }
}

// carousel function

function carousel() {
  counter++;
  if (counter === images.length) {
    counter = 0;
  }
  changeDotsColor();
  $img.setAttribute('src', images[counter]);
}

setInterval(carousel, 3000);
