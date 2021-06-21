import angular from 'angular';


import { TodoFilter } from './filters/todo.filter'
import { TodoService } from './services/todo.service';
import { TodoController } from './controllers/todo.controller';

export default angular.module('todoApp.todo', [])
  .controller('TodoCtrl', TodoController)
  .filter('TodoFilter', TodoFilter)
  .service('TodoService', TodoService)
