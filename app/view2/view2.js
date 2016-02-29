'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http', function($scope, $http) {

      window.scrollTo(0,0);
/*

$scope.getcall = function(){
  $http.get("countries.json")
      .success(function (data) {
        console.log('success', data);
        $scope.country_data = data;

      })
      .error(function (data) {
        console.log('error', data);
      })

};
*/

}]);