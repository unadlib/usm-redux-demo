import { createBrowserApp } from '@react-navigation/web';
import { createNavigator, SwitchRouter } from "@react-navigation/core";
import Module from '../../lib/baseModule';

export default class Navigation extends Module {
  constructor(...args) {
    super(...args);
    this._createApp = createBrowserApp;
    this._createNavigator = createNavigator;
    this._createRouter = SwitchRouter;
  }

  generateApp({ main, route, config = {} }) {
    const router = this._createRouter(route);
    const navigator = this._createNavigator(main, router, config);
    return this._createApp(navigator);
  }
}
