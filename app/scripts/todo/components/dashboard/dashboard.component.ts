import { IComponentOptions, IController, IScope } from "angular";
import { Todo } from "../../filters/todo.filter";
import { Criteria, TodoService } from "../../services/todo.service";

import template from './dashboard.component.html'

export class DashboardController implements IController {
  public todos: Todo[]
  public criteria: Criteria
  public currentTodo: Todo = new Todo({})

  constructor(
    private TodoService: TodoService,
  ) {
    'ngInject'

    this.todos = this.TodoService.todos
    this.criteria = this.TodoService.criteria
  }

  $onInit() {
    // console.log(`this >`, this);
  }

  setCriteria(criteria: Criteria) {
    this.TodoService.criteria = criteria;
  };

  addTodo() {
    this.TodoService.addTodo(this.currentTodo);
    this.currentTodo.text = ''
  };

  delete(todo: Todo) {
    this.TodoService.delete(todo);
  };

  clearCompleted() {
    this.TodoService.clearCompleted();
  };

}

export const DashboardComponent: IComponentOptions = {
  controller: DashboardController,
  controllerAs: '$ctrl',
  template,
}
