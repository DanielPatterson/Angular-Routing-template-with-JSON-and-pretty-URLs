'use strict';

var app = angular.module('app', ['ngRoute', 'appControllers', 'appServices'])
    
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider.
    when('/', {
    templateUrl: 'app/views/page1.html',
    controller: 'page1Ctrl'
    }).
    when('/page2', {
    templateUrl: 'app/views/page2.html',
    controller: 'page2Ctrl'
    }).
    when('/items/:itemId', {
    templateUrl: 'app/views/items.html',
    controller: 'reusableCtrl'
    }).
    otherwise({
    redirectTo : '/'
    });

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
    
}]); 