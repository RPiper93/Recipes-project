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
  'ngSanitize'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/recipes-view'});
}]);