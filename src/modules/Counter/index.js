import ViewModule, { state, action } from '../../lib/baseViewModule';

export default class Counter extends ViewModule {
  @state count = 0;

  @action
  calculate(num, state) {
    state.count += num;
  }

  getViewProps() {
    return {
      count: this.count,
    };
  }

  getViewFunctions() {
    return {
      increase: () => this.calculate(1),
      decrease: () => this.calculate(-1),
    }
  }
}