import React from 'react';
import ReactDOM from 'react-dom/client';

import StopWatch from './stopwatch';

const element = (
  <div>
    <StopWatch />
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);
