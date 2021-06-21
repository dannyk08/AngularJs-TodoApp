import angular from 'angular'

import CommonModule from './common/common.module'
import TodoModule from './todo/todo.module'

export default angular
  .module('todoApp', [
    'ui.bootstrap',
    CommonModule.name,
    TodoModule.name,
  ])
