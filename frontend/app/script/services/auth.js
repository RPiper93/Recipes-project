'use strict';

angular.module('recipesApp.login').service('auth', function($http) {
  this.login = function(user) {
    return $http.post('/api/login', { email: user.email, password: user.password})
  }
})