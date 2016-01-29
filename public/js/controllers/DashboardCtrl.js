angular.module('DashboardCtrl', [])

.controller('DashboardController', function($scope, $http) {
    $scope.title = 'Dashboard Page';


    $scope.formData = {}

    /*$scope.createProject = function() {
        $http.post('/api/projects', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.projects = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };*/

    $scope.createUser = function() {
        $http.post('/api/users', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.users = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


});
