import { Criteria, Todo } from "../filters/todo.filter";

export class TodoService {
  todos: Todo[] = []
  criteria: Criteria = Criteria.all

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  clearAll() {
    this.todos = []
  }

  clearCompleted() {
    for (var index = this.todos.length - 1; index >= 0; index--) {
      if (this.todos[index].completed === true) {
        this.delete(index)
      }
    }
  }
}
