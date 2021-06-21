import angular, { IScope } from 'angular'

import template from './../views/editable-label.html'

/**
 * @ngdoc directive
 * @name todoApp.directive:EditableLabel
 * @description
 * # EditableLabel
 */
angular.module('common')
  .directive('editableLabel', ['$timeout', function ($timeout) {
    return {
      restrict: 'E',
      scope: {
        value: '='
      },
      template,
      link: function postLink(scope: IScope & any, element) {

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
  }]);
