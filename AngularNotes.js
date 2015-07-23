//Angular JS Notes
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
