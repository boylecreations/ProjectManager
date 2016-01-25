angular.module('PostCtrl', [])

.controller('PostController', function($scope, $http) {
    $scope.tagline = "This is for my posts";

    $scope.name = {};
    $scope.username = {};
    $scope.password = {};
    $scope.id = {};

    $scope.formData = {};
    //$scope.$route = $route;

    $http.get('http://boylecreations.com/wp-json/wp/v2/posts')
        .success(function(data) {
          $scope.posts = data;
          console.log(data);
    })
        .error(function(data) {
          console.log('Error ' + data);
    });





});
