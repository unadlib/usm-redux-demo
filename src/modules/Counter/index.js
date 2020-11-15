import ViewModule, { state, action } from '../../lib/baseViewModule';

export default class Counter extends ViewModule {
  name = 'counter';

  @state count = 0;

  @action
  calculate(num) {
    this.count += num;
  }

  getViewProps() {
    return {
      count: this.count,
      increase: () => this.calculate(1),
      decrease: () => this.calculate(-1),
    };
  }
}
