import React from 'react';
import { ModuleProvider } from './lib/moduleContext';
import MainView from './MainView';
import Todos from './containers/Todos';
import Counter from './containers/Counter';

export default ({ module }) => {
  const routerConfig = {
    main: MainView,
    route: {
      Home: {
        screen: Todos,
        path: '',
      },
      Counter: {
        screen: Counter,
        path: 'Counter',
      },
    }
  };
  const App = module.navigation.generateApp(routerConfig);
  return (
    <ModuleProvider module={module}>
      <App />
    </ModuleProvider>
  )
};
