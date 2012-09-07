'use strict';

// Declare app level module which depends on filters, and services
angular.module('ten', ['ten.filters', 'ten.services', 'ten.directives', 'ngResource']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $route) {
    /*
     $route.$on('$routeChangeSuccess', function () {
     console.log('123');
     });
     */
    $routeProvider
        .when('/dashboard', {templateUrl:'partials/dashboard', controller:pageWithWidgetsController})
        .when('/lab', {templateUrl:'partials/lab', controller:pageWithWidgetsController})
        .when('/store', {templateUrl:'partials/store', controller:pageWithWidgetsController})
        .when('/', {templateUrl:'partials/main', controller:homeController})
//        .when('/new', {template:'views/edit.html', controller:NewCtrl})
//        .when('/edit/:id', {template:'views/edit.html', controller:EditCtrl})
        .otherwise({redirectTo:'/list'});
    $locationProvider.html5Mode(true);
//    console.log($routeProvider.routes);
}]);