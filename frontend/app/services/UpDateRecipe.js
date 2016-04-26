'use strict';
angular.module('recipesApp.updaterecipe')
.service('UpdateRecipeService', function($http){
	return {

		updateRecipe: function(name, ingredients, instructions, preparation_time, link, number, callBack) {
			var param= {name, ingredients, instructions, preparation_time, link}
   			$http.put('http://localhost:3000/recipes/' + number + '.json', param).success(function(data, status){
   			  callBack(data,status)
   			});
		}
	}
})