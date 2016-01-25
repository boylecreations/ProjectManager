
angular.module('appRoutes', ['ui.router', 'ngResource'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            controller: 'MainController as MC',
            templateUrl: 'views/home.html',
            activetab: 'home'    
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
            controller: 'ContactController',
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
        .state('posts', {
            url: '/posts',
            templateUrl: 'views/posts.html',
            activetab: 'posts',
            controller: 'PostController',
            controllerAs: 'PostsC'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'js/components/admin/dashboard.html',
            activetab: 'admin',
            controller: 'DashboardController',
            controllerAs: 'DC'
        })

        // Eliminate the Hash- Pretty URL, use the HTML5 History API
        $locationProvider.html5Mode(true);

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
