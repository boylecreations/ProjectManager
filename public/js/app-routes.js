
angular.module('appRoutes', ['ui.router', 'ngResource'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            activetab: 'home',
            controller: 'MainCtrl'
        })
        .state('users', {
            url: '/',
            templateUrl: 'views/users.html',
            activetab: 'users',
            controller: 'UserCtrl'
        })
        .state('projects', {
            url: '/',
            templateUrl: 'views/projects.html',
            activetab: 'projects',
            controller: 'ProjectCtrl'
        })
        .state('contact', {
            url: '/',
            templateUrl: 'views/contact.html',
            activetab: 'contact',
            controller: 'ContactCtrl'
        })
    }]);


// public/js/appRoutes.js
/*angular.module('appRoutes', ['ngResource']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            activetab: 'home'
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

        .when('/projects', {
            templateUrl: 'views/projects.html',
            controller: 'ProjectController',
            activetab: 'projects'
        })



        .otherwise({ redirectTo: "/"});





    $locationProvider.html5Mode(true);

}]);*/
