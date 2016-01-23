
angular.module('UserCtrl', []).controller('UserController', function($scope, $route, $http) {

  $scope.$route = $route;

  $scope.tagline = "Welcome to the site.";
  $scope.name = {};
  $scope.username = {};
  $scope.password = {};
  $scope.id = {};

  $scope.formData = {};

  $http.get('/api/users')
    .success(function(data) {
      $scope.users = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error ' + data);
    });
  $scope.createUser = function() {
    $http.post('/api/users', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        $scope.users = data
        console.log(data);
      })
      .error(function(data) {
        console.log('Error ' + data);
      });
  }




});
