import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click me!</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const btn = <CustomButton />;
root.render(btn);
