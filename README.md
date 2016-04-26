Recipedia
==============

Ronin Final Project
-------------

For our final two-week project on Ronin, we wanted to create a web application that allowed users to search through recipes to find one's requiring specific ingredients. The idea behind this was that many people end up throwing out food because they don't know how to use it within a recipe. This web application would allow people to find exactly what ingredients could be used for.

Given more time, we would like to implement ways to search by preparation time or dietary requirements. An important feature we would add would be the option to upload a photo when added a recipe to the database. We would also like to make it possible to share recipes on social media sites.

Team members:
-------------

Follow us!

-Eduardo M Sanchez Delgado https://github.com/hedudelgado  
-Rebecca Piper https://github.com/RPiper93  
-Wim Hekkelman https://github.com/jwhekk  
-Fareed Patel https://github.com/fareedpatel

Screenshots:
---------------

Home Page:
![homepage](/screencaps/homepage.png)

Adding a New Recipe:
![add a recipe](/screencaps/add_recipe.png)

Viewing a Recipe:
![view recipe](/screencaps/view_recipe.png)

Technology Used
---------------
Back End: Ruby on Rails  
Frontend: AngularJS, CSS, HTML  
Testing: Protractor, Karma, rSpec  

Installation Instructions
-------------------------
```
git clone https://github.com/hedudelgado/Recipes-project
$cd RecipesAPI
$bundle install
$rake db:create
$rake db:migrate
$npm install bower -g
$rake bower:install
$rake routes
```

Run the servers
---------------

```
Back End (within backend directory) ->rails s
Go to http://localhost:3000 (or any other path the Api uses) in your browser, to make sure the server is running.
```
```
Front end (within front end directory)-> npm start
Go to http://localhost:8000 (or any other path the Angular uses) in your browser, to make sure the server is running.
```



Testing Instructions
--------------------

RSpec (unit and feature tests, within back end directory)

```
$rails g rspec:install
$rspec
```

JavaScript/Angular - Testing
-----------------------------

Make sure the rails server is running for testing angular as they interact within the end to end tests(e2e).
```
$rails s
```

Make sure you are in Frontend directory for Angular - e2e tests, in a separate command line run:
```
$npm install
$npm run Protractor
```

To test drive the app, make sure you have the Rails and Angular severs running in different command line taps, then in your brower visit: For Rails http://localhost:3000 For Angularjs http://localhost:8000


Project Diagram
---------------

[![solarized dualmode](https://github.com/hedudelgado/Recipes-project/blob/master/diagram.png)](#features)

Completed User Stories
------------
```
As a  user
So that I can share my recipe
I want to be able to add a new recipe
```
```
As a user
So I can break down my recipe,
I would like to add the ingredients list
```
```
As a user
So I can add know how long takes to cook the recipe,
I would like to add a preparation time.
```
```
As a user
So people can cook my recipe,
I want to add instructions to my recipe
```
```
As a user
So that I can change my recipe
I want to be able to update my recipe
```
```
As a user
So that others can see how to exactly cook the recipe
I want to be able to upload a youtube link
```
```
As a user
So that others can see my recipes
I want to be able to see a list of recipes
```
```
As a user
So that recipes can be removed
I want to be able to delete my recipes
```
```
As a user
So that I can see what I’m looking for
I can search by ingredients (or leftovers)
```
```
As a user
So that people understand the popularity of the recipe
I am able to vote up or down
```
```
As a user,
I would like to see some specific recipes,
I would like to search by its name.
```
