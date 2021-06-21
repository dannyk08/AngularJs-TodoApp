import './common/common.module'
import './common/directives/checkbox'
import './common/directives/editablelabel'

import './todo/todo.module'
import './todo/filters/todo'
import './todo/controllers/todo'
import './todo/services/todo'

'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', ['common', 'todo', 'ui.bootstrap']);
