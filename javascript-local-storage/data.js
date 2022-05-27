/* exported todos */

var todos = [];

var previousTodosJSON = window.localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', localStorageFunc);

function localStorageFunc(event) {
  var todosJSON = JSON.stringify(todos);
  window.localStorage.setItem('javascript-local-storage', todosJSON);
}
