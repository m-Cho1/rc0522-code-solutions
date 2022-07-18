const fetchResponse = fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
});

fetchResponse
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

const pokeResponse = fetch('https://pokeapi.co/api/v2/pokemon/150', {
  method: 'GET'
});

pokeResponse
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
