import Carousel from './carousel';
import React from 'react';
import ReactDOM from 'react-dom/client';

const images = [
  {
    name: 'Bulbasaur',
    imgLink: '../images/001.png'
  },
  {
    name: 'Charmander',
    imgLink: '../images/004.png'
  },
  {
    name: 'Squirtle',
    imgLink: '../images/007.png'
  },
  {
    name: 'Pikachu',
    imgLink: '../images/025.png'
  },
  {
    name: 'Jigglypuff',
    imgLink: '../images/039.png'
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Carousel images={images}/>);
