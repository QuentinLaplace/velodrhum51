import React from "react";
import { Provider } from "react-redux";
import { store } from './store';
import ReactDOM from 'react-dom';
import packageJSON from '../package.json';
import '@fontsource/roboto';
import Router from './router/router';

console.log(`${packageJSON.name} - ${packageJSON.version}`);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router />
    </Provider>
  </div>
  ,
  document.getElementById('root')
);