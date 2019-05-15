import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import Portal from './modules/Portal';
import Counter from './modules/Counter';
import Todos from './modules/Todos';
import Navigation from './modules/Navigation';
import MainView from './MainView';
import TodosView from './components/TodosPanel';
import CounterView from './components/CounterPanel';
import { ModuleProvider } from './lib/moduleContext';

const counter = new Counter();
const todos = new Todos();
const navigation = new Navigation();
const portal = Portal.create({
  modules: {
    counter,
    todos,
    navigation,
  },
  main: MainView,
  components: {
    Home: {
      screen: TodosView,
      path: '',
      module: todos,
    },
    Counter: {
      screen: CounterView,
      path: 'Counter',
      module: counter,
    },
  }
});
const App = portal.createApp();

ReactDOM.render(
  <Provider store={portal.store}>
    <PersistGate loading={null} persistor={portal.persistor}>
      <ModuleProvider module={portal}>
        <App />
      </ModuleProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
