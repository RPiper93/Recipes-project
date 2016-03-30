'use strict';

angular.module('recipesApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'recipes/login.html',
    controller: 'LoginCtrl'
  });
}])
.controller('LoginCtrl', [ "$scope", "$http", "auth", "$location", function($scope, $http, auth, $location) {
  $scope.login = function()  {
    if($scope.loginForm.$valid) {
      var promise = auth.login($scope.user);
      promise.then(success,error);
    }
  };
    var success = function(response) {
      localStorage.setItem("auth_token", response.data.auth_token);
      $location.path("/recipes-view")
    };
    var error = function(response) {
      $scope.wrongCredentials = true;
    }
        // else {
    //   $scope.loginForm.submitted = true;
    // }
    

}]);