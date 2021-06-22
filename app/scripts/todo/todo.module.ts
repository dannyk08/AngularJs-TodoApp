import angular from 'angular';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoFilter } from './filters/todo.filter'
import { TodoService } from './services/todo.service';

export default angular.module('todoApp.todo', [])
  .component('dashboardComponent', DashboardComponent)
  .filter('TodoFilter', TodoFilter)
  .service('TodoService', TodoService)
