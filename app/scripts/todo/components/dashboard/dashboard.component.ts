import { IComponentOptions, IController, IScope } from "angular";
import { Criteria, Todo } from "../../filters/todo.filter";
import { TodoService } from "../../services/todo.service";

import template from './dashboard.component.html'

export class DashboardController implements IController {
  public todos: Todo[]
  public criteria: Criteria
  public currentTodo: Todo = new Todo({})

  constructor(
    private TodoService: TodoService,
    private $scope: IScope,
  ) {
    'ngInject'
    this.criteria = this.TodoService.criteria
    this.setTodos()
  }

  private setTodos() {
    this.todos = this.TodoService.todos
  }

  $onInit() {
    // console.log(`this >`, this);
  }

  setCriteria(criteria: Criteria) {
    this.TodoService.criteria = criteria;
    this.criteria = this.TodoService.criteria
  };

  addTodo() {
    if (this.currentTodo.text.length) {
      this.TodoService.addTodo(new Todo(this.currentTodo));

      this.currentTodo.text = ''
      this.setTodos()
    }

  };

  delete(index: number) {
    this.TodoService.delete(index);
    this.setTodos()
  };

  clearCompleted() {
    this.TodoService.clearCompleted();
    this.setTodos()
  };

  clearAll() {
    this.TodoService.clearAll();
    this.setTodos()
  };

  onCriteriaChange = (event: MouseEvent) => {
    const { target } = event || {}
    this.criteria = target && (<any>target).value
    this.$scope.$apply()
  }

}

export const DashboardComponent: IComponentOptions = {
  controller: DashboardController,
  controllerAs: '$ctrl',
  template,
}
