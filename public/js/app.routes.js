
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
