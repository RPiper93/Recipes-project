'use strict';

angular.module('recipesApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'recipes/login.html',
    controller: 'LoginCtrl'
  });
}])
.controller('LoginCtrl', [ "$scope", "$http", function($scope, $http, auth) {
  $scope.login = function()  {
    if($scope.loginForm.$valid) {
      // auth.login($scope.user);
    return  $http.post('http://localhost:3000/api/login', { email: $scope.user.email, password: $scope.user.password})
    
    }
    console.log('hello')
    // else {
    //   $scope.loginForm.submitted = true;
    // }
    
  }
}]);