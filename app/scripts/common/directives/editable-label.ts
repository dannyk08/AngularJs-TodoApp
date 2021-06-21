import { IScope, ITimeoutService } from 'angular'

import template from './../views/editable-label.html'

export const EditableLabelDirective = ($timeout: ITimeoutService) => {
  'ngInject'

  return {
    restrict: 'E',
    scope: {
      value: '='
    },
    template,
    link: function postLink(scope: IScope & any, element: JQLite) {

      var textBox = element.find('input')[0];
      scope.editmode = false;

      scope.enterEditMode = function () {
        scope.oldValue = scope.value;
        scope.editmode = true;
        $timeout(function () {
          textBox.focus();
        });
      };
      scope.commit = function () {
        scope.editmode = false;
      };
      scope.cancel = function () {
        scope.editmode = false;
        scope.value = scope.oldValue;
      };


      scope.keyup = function (event: KeyboardEvent) {
        if (event.keyCode === 13) {
          scope.commit();
        }
        if (event.keyCode === 27) {
          scope.cancel();
        }

      };
    }
  };
}
