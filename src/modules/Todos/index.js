import ViewModule, { state, action, computed } from "../../lib/baseViewModule";
import { autobind } from "../../lib/autobind";

const FILTERS = {
  All: "All",
  Active: "Active",
  Completed: "Completed",
};

export default class Todos extends ViewModule {
  name = 'Todos';

  @state todos = [];
  @state visibilityFilter = FILTERS.All;
  filters = Object.values(FILTERS);

  @autobind
  @action
  add(text) {
    this.todos.push({
      text,
      id: `${Math.random()}`,
      completed: false,
    });
  }

  @autobind
  @action
  toggle(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
  }

  @autobind
  @action
  setVisibility(filter) {
    this.visibilityFilter = filter;
  }

  @computed(({ todos, visibilityFilter }) => [todos, visibilityFilter])
  get list() {
    return this.todos.filter(
      ({ completed }) =>
        this.visibilityFilter === FILTERS.All ||
        (this.visibilityFilter === FILTERS.Active && !completed) ||
        (this.visibilityFilter === FILTERS.Completed && completed)
    );
  }

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
