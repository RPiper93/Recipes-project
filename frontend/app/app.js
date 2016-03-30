'use strict';
// Declare app level module which depends on views, and components
angular.module('recipesApp', [
  'ngRoute',
  'recipesApp.viewrecipes',
  'recipesApp.postrecipe',
  'recipesApp.viewrecipesdetails',
  'recipesApp.deleterecipes',
  'recipesApp.updaterecipe',
  'recipesApp.voterecipe',
  'recipesApp.login',
  'ngSanitize'
])
.factory("authInterceptor", function() {
  return {
    request: function(config) {
      config.headers = config.headers||{};
      if (localStorage.auth_token) {
        config.headers.token = localStorage.auth_token;
      }
      return config;
    }
  }
}).config(function($httpProvider) {
  $httpProvider.interceptors.push("authInterceptor");
}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'});
}]);