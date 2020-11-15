import { createBrowserApp } from "@react-navigation/web";
import { createNavigator, SwitchRouter } from "@react-navigation/core";

export default class Navigation {
  constructor() {
    this._createApp = createBrowserApp;
    this._createNavigator = createNavigator;
    this._createRouter = SwitchRouter;
  }

  createApp(...args) {
    return this._createApp(...args);
  }

  createNavigator(...args) {
    return this._createNavigator(...args);
  }

  createRouter(...args) {
    return this._createRouter(...args);
  }
}
