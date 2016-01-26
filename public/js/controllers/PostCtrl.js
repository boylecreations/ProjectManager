angular.module('PostCtrl', [])

.controller('PostController', function($scope, $http, $sce) {
    $scope.tagline = "This is for my posts";

    /*$scope.name = {};
    $scope.username = {};
    $scope.password = {};
    $scope.id = {};

    $scope.formData = {};
    $scope.$route = $route;*/
    $scope.data = [];

    $http.get('http://boylecreations.com/wp-json/wp/v2/posts')
        .success(function(data) {
          $scope.posts = data;
          console.log(data);

          angular.forEach($scope.posts, function(value, key) {
              //trust as html
              this[key].title.rendered = $sce.trustAsHtml(value.title.rendered);
              this[key].excerpt.rendered = $sce.trustAsHtml(value.excerpt.rendered);

          }, $scope.posts)
    })
        .error(function(data) {
          console.log('Error ' + data);
    });





});
