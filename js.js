var app = angular.module('myApp', []);
app.controller('MyCtrl', function($scope, $http) 
{
  $http.get("header.html").then(function (response) {
    $scope.names = response.data.records;
  });
}); 