var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

var $img = document.querySelector('img');
var counter = 0;

// click handler for left/right arrow
var $left = document.getElementById('left');
var $right = document.getElementById('right');

$left.addEventListener('click', function () {
  counter--;
  if (counter === -1) {
    counter = images.length - 1;
  }
  $img.setAttribute('src', images[counter]);

});

$right.addEventListener('click', function () {
  counter++;
  if (counter > images.length - 1) {
    counter = 0;
  }
  $img.setAttribute('src', images[counter]);
});

// function for indicators
var $indicatorCont = document.querySelector('.indicators');
var $dots = document.querySelectorAll('.fa-circle');

// $indicatorCont.addEventListener('click', function (event) {
//   var currentDot = event.target;
//   for (var i = 0; i < $dots.length; i++) {
//     if (event.target.tagName === 'I' && currentDot.id === &$dots[i].id) {
//       $img.setAttribute('src', images[currentDot.id]);
//       currentDot.setAttribute('class', 'fa-solid fa-circle margin');
//     } else {
//       $dots[i].className = 'fa-regular fa-circle margin';
//     }
//   }
// });

function indicatorChange(event) {
  for (var i = 0; i < $dots.length; i++) {
    if (currentDot.id === $dots[i].id) {
      $img.setAttribute('src', images[currentDot.id]);
      currentDot.setAttribute('class', 'fa-solid fa-circle margin');
    } else {
      $dots[i].className = 'fa-regular fa-circle margin';
    }
  }
}

// carousel function
// setInterval(carousel, 2000);

function carousel() {
  $img.setAttribute('src', images[counter]);
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  indicatorChange($img);
}
