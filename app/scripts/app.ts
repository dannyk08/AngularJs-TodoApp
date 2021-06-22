import angular from 'angular'

import BootstrapModule from './bootstrap/bootstrap.module'
import CommonModule from './common/common.module'
import TodoModule from './todo/todo.module'

const appName = 'todoApp'
const app = angular
  .module(appName, [
    'ui.bootstrap',
    BootstrapModule.name,
    CommonModule.name,
    TodoModule.name,
  ])

angular.element(document).ready(() =>
  angular.bootstrap(document.getElementById(appName), [app.name])
)
