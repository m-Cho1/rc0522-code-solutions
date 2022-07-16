import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidateInput from './validated-input';

const element = (
  <div>
    <ValidateInput />
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);
