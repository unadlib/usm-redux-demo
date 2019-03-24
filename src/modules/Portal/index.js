import Module from '../../lib/baseModule';

export default class Portal extends Module {
  get navigation() {
    return this._modules.navigation;
  }

  get counter() {
    return this._modules.counter;
  }

  get todos() {
    return this._modules.todos;
  }
}
