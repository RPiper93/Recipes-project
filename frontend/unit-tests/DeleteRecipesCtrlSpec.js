describe('DeleteRecipesCtrl', function(){
  var ctrl, scope, params, location
 
  beforeEach(function(){
    module('recipesApp.postrecipe');
    inject(function($controller, $location, $rootScope, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectDELETE('http://localhost:3000/recipes.json', params).respond(200)
      location = $location
      scope = $rootScope.$new();
      ctrl = $controller('DeleteRecipesCtrl', {$scope:scope})
      var params = {iid: 1, name: "Pizza margarita", ingredients: 'dough, tomatoe, cheese', instructions: "Cook 20 minutes", preparation_time: 20, link: "https://www.youtube.com/watch?v=2kl3Liy5jcQ"}
    });
    it('sends a delete request the api', function(){
      scope.deleteRecipe(recipeId)
      httpBackend.flush()
      expect(location.path()).toBe("/recipes")
    });
  });
});


