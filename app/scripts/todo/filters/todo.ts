import angular from "angular";

export interface Todo {
  completed: boolean,
}

/**
 * @ngdoc filter
 * @name todoApp.filter:TodoFilter
 * @function
 * @description
 * # TodoFilter
 * Filter in the todoApp.
 */
angular.module('todo')
  .filter('TodoFilter', [function () {

    var filter = function (array: Todo[], criteria: string) {
      var filteredArray: Todo[] = [];
      array.forEach(function (item) {
        if (criteria === 'all') {
          filteredArray.push(item);
        }
        else if (criteria === 'active' && item.completed === false) {
          filteredArray.push(item);
        }
        else if (criteria === 'completed' && item.completed === true) {
          filteredArray.push(item);
        }
      });
      return filteredArray;
    };

    return filter;
  }]);
