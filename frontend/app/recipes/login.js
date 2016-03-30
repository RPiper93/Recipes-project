'use strict';

angular.module('recipesApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'recipes/login.html',
    controller: 'LoginCtrl'
  });
}])
.controller('LoginCtrl', [ "$scope", "$http", function($scope, $http) {
  $scope.login = function()  {
    if($scope.loginForm.$valid) {}
  }
}]);