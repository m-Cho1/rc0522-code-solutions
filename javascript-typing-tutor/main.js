var $words = document.querySelectorAll('span');
var correctWords = 0;

document.addEventListener('keydown', typing);

function typing(event) {
  if (event.key === $words[correctWords].textContent) {
    $words[correctWords].classList.remove('color-wrong');
    $words[correctWords].classList.remove('start');
    $words[correctWords].classList.add('color-right');
    correctWords++;
    $words[correctWords].classList.add('start');
  } else {
    $words[correctWords].classList.add('color-wrong');
  }
}
