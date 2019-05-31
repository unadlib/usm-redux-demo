import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ModuleContext = React.createContext(null);

const ModuleProvider = ({ module, children }) => (
  <ModuleContext.Provider value={module}>
    {children}
  </ModuleContext.Provider>
);

ModuleProvider.propTypes = {
  module: PropTypes.object.isRequired,
  children: PropTypes.node,
};
ModuleProvider.defaultProps = {
  children: null,
};

const pick = (props, isFunction) => {
  const _props = {};
  for(const key in props) {
    if (
      (typeof props[key] === 'function' && isFunction) ||
      (typeof props[key] !== 'function' && !isFunction)
    ) {
      _props[key] = props[key];
    }
  }
  return _props;
}

const connectModule = (moduleSelector) => {
  return Component => {
    const WithModule = connect(
      (_, parentProps) => pick(moduleSelector(parentProps.module).getViewProps(parentProps), false),
      (_, parentProps) => pick(moduleSelector(parentProps.module).getViewProps(parentProps), true),
    )(Component);
    return props => (
      <ModuleContext.Consumer>
        {
          module => (
            <WithModule
              module={module}
              {...props}
            />
          )
        }
      </ModuleContext.Consumer>
    );
  };
}

export {
  ModuleContext as default,
  ModuleProvider,
  connectModule,
};

