var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', xhrLoadFunc);

function xhrLoadFunc(event) {
  var response = xhr.response;
  console.log('xhr.status : ', xhr.status);
  console.log('xhr.response : ', response);
  for (var i = 0; i < response.length; i++) {
    var index = response[i];
    var li = document.createElement('li');
    li.textContent = index.name;
    $userList.appendChild(li);
  }
}
xhr.send();
