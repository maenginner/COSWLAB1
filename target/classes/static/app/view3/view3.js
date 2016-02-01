'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'ControladorListado'
  });
}])

.controller('ControladorListado', ['$scope', 'taskservice', function($scope, taskservice){
       
         $scope.listado = taskservice.getListado();
         
         $scope.order=function(predicate){
           $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
           $scope.predicate=predicate;  
         };
}]);

