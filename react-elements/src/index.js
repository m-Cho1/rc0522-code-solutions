import React from 'react';
import ReactDOM from 'react-dom/client';

const reactElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log('reactElement: ', reactElement);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(reactElement);
