import React from 'react';
import ReactDOM from 'react-dom';
import App from './Page';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

import './Style/Icons/fonts.scss';

export const AppRoot = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root,
  html,
  body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; //1rem = 10px
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <AppRoot />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
