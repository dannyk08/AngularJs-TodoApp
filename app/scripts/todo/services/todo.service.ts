import { Todo } from "../filters/todo.filter";

export enum Criteria {
  all = 'all',
  active = 'active',
  completed = 'completed',
}


export class TodoService {
  todos: Todo[] = []
  criteria: Criteria = Criteria.all

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  delete(todo: Todo) {

    this.todos.splice(this.todos.indexOf(todo), 1);
  }
  clearCompleted() {

    for (var index = this.todos.length - 1; index >= 0; index--) {
      if (this.todos[index].completed === true) {
        this.todos.splice(this.todos.indexOf(this.todos[index]), 1);
      }
    }
  }
}
