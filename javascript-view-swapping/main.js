var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');
var $tabContainer = document.querySelector('.tab-container');

$tabContainer.addEventListener('click', clickEvent);
function clickEvent(event) {
  if (event.target.matches('.tab') === true) {
    for (var i = 0; i < $tabs.length; i++) {
      var tab = $tabs[i];
      if (tab === event.target) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $views.length; j++) {
      var viewContainer = $views[j];
      if (dataView === viewContainer.getAttribute('data-view')) {
        viewContainer.classList.remove('hidden');
      } else {
        viewContainer.classList.add('hidden');
      }
    }
  }
}
