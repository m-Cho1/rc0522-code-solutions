var $openModal = document.querySelector('.button-open');
var $modal = document.querySelector('.modal');
var $buttonNo = document.querySelector('.button-no');

$openModal.addEventListener('click', openModalContainer);
function openModalContainer(event) {
  $modal.classList.remove('hidden');
}

$buttonNo.addEventListener('click', closeModalContainer);
function closeModalContainer(event) {
  $modal.classList.add('hidden');
}
