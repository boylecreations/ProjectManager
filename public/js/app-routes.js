// public/js/appRoutes.js
angular.module('appRoutes', ['ngResource']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            activetab: 'home'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController',
            activetab: 'nerd'

        })

        .when('/users', {
            templateUrl: 'views/users.html',
            controller: 'UserIndexController',
            activetab: 'user'
        })

        .when('/users/new', {
            templateUrl: 'views/edit.html',
            controller: 'UserEditController',
            activetab: 'user'
        })

        .when('/users/:id', {
            templateUrl: 'views/show.html',
            controller: 'UserShowController',
            activetab: 'profile'
        })

        .when('/users/:id/edit', {
            templateUrl: 'views/edit.html',
            controller: 'UserEditController',
            activetab: 'profile'
        })

        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController',
            activetab: 'contact'
        })

        .otherwise({ redirectTo: "/users"});





    $locationProvider.html5Mode(true);

}]);
