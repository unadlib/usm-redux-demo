import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Portal from './modules/Portal';
import Counter from './modules/Counter';
import Todos from './modules/Todos';
import Navigation from './modules/Navigation';

const counter = new Counter();
const todos = new Todos();
const navigation = new Navigation();
const portal = Portal.create({
  modules: {
    counter,
    todos,
    navigation,
  },
});

ReactDOM.render(
  <Provider store={portal.store}>
    <App module={portal} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
