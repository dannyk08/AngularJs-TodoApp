import angular, { IScope } from 'angular'

import template from './../views/checkbox.html'

angular.module('common')
  .directive('checkbox', [function () {
    return {
      restrict: 'E',
      scope: {
        check: '='
      },
      template,
      link: function postLink(scope: IScope & any) {
        scope.toggle = function () {
          scope.check = !scope.check;
        }
      }
    }
  }]);
