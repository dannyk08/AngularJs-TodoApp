import angular from "angular";

import { Todo } from "../filters/todo";

export class TodoService {
  todos: Todo[]

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

/**
 * @ngdoc service
 * @name todoApp.todo
 * @description
 * # todo
 * Service in the todoApp.
 */
angular.module('todo').service('TodoService', [TodoService])
