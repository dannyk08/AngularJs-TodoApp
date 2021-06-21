import { IScope } from "angular";

import { Todo } from "../filters/todo.filter";
import { TodoService } from "../services/todo.service";

export class TodoController {
  constructor(
    $scope: IScope & any,
    TodoService: TodoService,
  ) {
    'ngInject'

    $scope.todos = TodoService.todos;
    $scope.criteria = 'all';
    $scope.setCriteria = function (criteria: string) {
      $scope.criteria = criteria;
    };
    $scope.addTodo = function () {
      TodoService.addTodo({ text: $scope.newTodo.text, completed: false });
      $scope.newTodo.text = '';
    };

    $scope.delete = function (todo: Todo) {
      TodoService.delete(todo);
    };

    $scope.clearCompleted = function () {
      TodoService.clearCompleted();
    };
  }

}
