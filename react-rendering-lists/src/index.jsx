import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

// const pokemonLists = pokedex.map(pokemon =>
//   <li key={pokemon.number}>
//     {pokemon.name}
//     </li>
// );

// const list = (
//   <ul>
//     {pokemonLists}
//   </ul>
// );

class PokemonList extends React.Component {
  render() {
    const pokemons = pokedex.map(pokemon => {
      return <li key={pokemon.number}>{pokemon.name}</li>;
    });
    return <ul>{pokemons}</ul>;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(PokemonList);
