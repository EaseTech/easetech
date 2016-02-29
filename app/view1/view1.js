'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
      .when('/home', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/about', {
        templateUrl: 'view1/about.html',
        controller: 'View1Ctrl'
      })
      .when('/team', {
        templateUrl: 'view1/team.html',
        controller: 'View1Ctrl'
      })
      .when('/services', {
        templateUrl: 'view1/services.html',
        controller: 'View1Ctrl'
      })
      .when('/contact', {
        templateUrl: 'view1/contact.html',
        controller: 'View1Ctrl'
      });
}])

.controller('View1Ctrl', [function() {



}]);