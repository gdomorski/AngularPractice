//Angular JS Notes


/*
AngularJS extends HTML with ng-directives.

The ng-app directive defines an AngularJS application.

The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.

The ng-bind directive binds application data to the HTML view.

AngularJS modules define AngularJS applications.

AngularJS controllers control AngularJS applications.

The ng-app directive defines the application, the ng-controller directive defines the controller.


*/
<html ng-app="nameApp">
Lists (ng-repeat)

<ul ng-controller="MyListCtrl">
  <li ng-repeat="phone in phones">
    
  </li>
Model (ng-model)

<select ng-model="orderProp">
  <option value="name">Alphabetical</option>
  <option value="age">Newest</option>
</select>
Defining a module

App = angular.module('myApp', []);

App.controller('MyListCtrl', function ($scope) {
  $scope.phones = [ ... ];
});
Controller with protection from minification

App.controller('Name', [
  '$scope',
  '$http',
  function ($scope, $http) {
  }
]);

a.c 'name', [
  '$scope'
  '$http'
  ($scope, $http) ->
]
Service

App.factory('NameService', function($http){
  return {
    get: function(){
      return $http.get(url);
    }
  }
});


App.controller('controllerName', 
function(NameService){
  NameService.get()
  .then(function(){})
})


Directive

App.directive('name', function(){
  return {
    template: '<h1>Hello</h1>' 
  }
});
