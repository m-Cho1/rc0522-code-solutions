var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', clickEvent);
function clickEvent(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagname: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closestEl = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', closestEl);
    closestEl.remove();
  }
}
