import ViewModule, { state, action, computed } from '../../lib/baseViewModule';
import { autobind } from '../../lib/autobind';

const FILTERS = {
  All: 'All',
  Active: 'Active',
  Completed: 'Completed'
};

export default class Todos extends ViewModule {
  @state todos = [];
  @state visibilityFilter = FILTERS.All;
  filters = Object.values(FILTERS);

  @autobind
  @action
  add(text, state) {
    state.todos.push({
      text,
      id: `${Math.random()}`,
      completed: false,
    })
  }

  @autobind
  @action
  toggle(id, state) {
    const todo = state.todos.find(todo => todo.id === id)
    todo.completed = !todo.completed
  }
  
  @autobind
  @action
  setVisibility(filter, state) {
    state.visibilityFilter = filter
  }

  @computed
  list = [
    () => this.todos,
    () => this.visibilityFilter,
    (todos, visibilityFilter) => todos.filter(({ completed }) => 
      visibilityFilter === FILTERS.All ||
      ( visibilityFilter === FILTERS.Active && !completed) ||
      ( visibilityFilter === FILTERS.Completed && completed)
    )
  ]

  getViewProps() {
    return {
      list: this.list,
      filters: this.filters,
      visibilityFilter: this.visibilityFilter,
      setVisibility: this.setVisibility,
      toggleTodo: this.toggle,
      addTodo: this.add,
    };
  }
}
