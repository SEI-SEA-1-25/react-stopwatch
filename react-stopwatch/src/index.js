import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Stopwatch from './components/Stopwatch';

ReactDOM.render(
  <React.StrictMode>
    <Stopwatch/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();