import angular from 'angular';

import { BootstrapComponent } from './bootstrap.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

export default angular.module('todoApp.bootstrap', [])
  .component('bootstrapComponent', BootstrapComponent)
  .component('jumbotronComponent', JumbotronComponent)
