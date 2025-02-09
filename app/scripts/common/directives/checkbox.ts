import { IScope } from 'angular'

import template from './../views/checkbox.html'

export const CheckboxDirective = () => {
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
}
