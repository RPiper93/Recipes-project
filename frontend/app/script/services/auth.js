'use strict';

angular.module('recipesApp.login').service('auth', function($http) {
  this.login = function(user) {
    return $http.post('http://localhost:3000/api/login', { email: user.email, password: user.password})
  }
})