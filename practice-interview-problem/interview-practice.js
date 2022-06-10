// function getRangeReport(start, end) {
//   var results = {
//     total: null,
//     odds: [],
//     evens: [],
//     average: null,
//     range: []
//   };
//   for (var i = start; i <= end; i++) {
//     results.total += i;
//     results.range.push(i);
//     if (i % 2 === 0) {
//       results.evens.push(i);
//     } else if (i % 2 === 1) {
//       results.odds.push(i);
//     }
//   }
//   results.average = results.total / results.range.length;
//   return results;
// }

// getRangeReport(1, 10);

var $animalList = document.querySelector('#animal-list');

var $btn = document.querySelector('#view-btn');

$btn.addEventListener('click', viewAniimalFunc);

function viewAniimalFunc(event) {
  if ($animalList.children.length !== 0) {
    $animalList.replaceChildren();
  }
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://zoo-animal-api.herokuapp.com/animals/rand/10');
  xhr.responseType = 'json';
  xhr.addEventListener('load', xhrLoadFunc);

  function xhrLoadFunc(event) {
    console.log('xhr status : ', xhr.status);
    console.log('xhr response : ', xhr.response);
    var response = xhr.response;
    for (var i = 0; i < response.length; i++) {
      var animalName = response[i];
      var li = document.createElement('li');
      li.textContent = animalName.name;
      $animalList.appendChild(li);
    }
  }
  xhr.send();
}
