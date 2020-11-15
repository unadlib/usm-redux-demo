import { combineReducers } from "redux";
import { createStore } from "usm-redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import * as localForage from "localforage";
import { connectModule } from "../../lib/moduleContext";

export default class Portal {
  constructor(navigation, counter, todos, options) {
    this.navigation = navigation;
    this.counter = counter;
    this.todos = todos;
    this.options = options;
  }

  createApp(config = {}) {
    this.store = this.createStore();
    const { main, components } = this.options;
    Object.entries(components).forEach(([name, component]) => {
      component.screen = connectModule((portal) => {
        if (toString.call(component.module) === "[object Object]") {
          return component.module;
        }
        if (typeof component.module === "string") {
          return portal[component.module];
        }
        throw new Error(`${name} components must be set module.`);
      })(component.screen);
    });
    const router = this.navigation.createRouter(components);
    const navigator = this.navigation.createNavigator(main, router, config);
    return this.navigation.createApp(navigator);
  }

  createStore() {
    const persistConfig = {
      key: "root",
      storage: localForage,
    };
    const config = {
      handleReducers: (reducers) =>
        persistReducer(persistConfig, combineReducers(reducers)),
      reduxMiddleware: [logger],
    };
    const store = createStore(
      {
        modules: [this.navigation, this.counter, this.todos],
      },
      undefined,
      config
    );
    this.persistor = persistStore(store);
    return store;
  }
}
