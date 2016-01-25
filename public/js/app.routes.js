
angular.module('appRoutes', ['ui.router', 'ngResource'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            activetab: 'home',
            controller: 'MainController',
            controllerAs: 'MC'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            activetab: 'users',
            controller: 'AboutController',
            controllerAs: 'AbC'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            activetab: 'contact',
            controller: 'ContactCtrl',
            controllerAs: 'CC'
        })
        .state('users', {
            url: '/users',
            templateUrl: 'views/users.html',
            activetab: 'users',
            controller: 'UserController',
            controllerAs: 'UC'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'views/projects.html',
            activetab: 'projects',
            controller: 'ProjectController',
            controllerAs: 'PC'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'js/components/admin/admin.html',
            activetab: 'admin',
            controller: 'AdminController',
            controllerAs: 'DC'
        })
    }]);


// public/js/appRoutes.js via ngRoute DEPRECATED
/*
angular.module('appRoutes', ['ngResource']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

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

}]);
*/
