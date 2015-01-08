'use strict';

describe('Filter: TodoFilter', function () {

  // load the filter's module
  beforeEach(module('todoApp'));

  // initialize a new instance of the filter before each test
  var TodoFilter;
  beforeEach(inject(function ($filter) {
    TodoFilter = $filter('TodoFilter');
  }));

  it('should return the input prefixed with "TodoFilter filter:"', function () {
    var text = 'angularjs';
      console.log(text);
    //expect(TodoFilter(text)).toBe('TodoFilter filter: ' + text);
  });

});
