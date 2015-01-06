'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TodoCtrl', ['$scope',function ($scope) {

        $scope.todos=[];
        $scope.addTodo=function(){
            $scope.todos.push({text:$scope.newTodo.text,completed:false});
            $scope.newTodo.text='';
        };

        $scope.delete=function(todo){
            $scope.todos.splice($scope.todos.indexOf(angular.copy(todo)),1);
        };

        $scope.clearCompleted=function(){
            for(var index=$scope.todos.length-1;index>=0;index--){
                if($scope.todos[index].completed===true){
                    $scope.todos.splice($scope.todos.indexOf($scope.todos[index]),1);
                }
            }
        };
  }]);
