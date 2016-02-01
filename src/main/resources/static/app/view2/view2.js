'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'taskservice', function ($scope, taskservice) {
        $scope.task;
        $scope.priority;
        
        $scope.add=function (){
           var p ={task:$scope.task,priority:$scope.priority};
           taskservice.addTodo(p);
        };
}]);