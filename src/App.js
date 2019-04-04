import React from 'react';
import { ModuleProvider } from './lib/moduleContext';

export default ({ module }) => {
  const App = module.generateApp();
  return (
    <ModuleProvider module={module}>
      <App />
    </ModuleProvider>
  )
};
