import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleButton from './toggle-switch';

const element = (
  <div>
    <ToggleButton />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
