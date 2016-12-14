'use strict';

var app = angular.module('app', ['ngRoute', 'appControllers'])
    
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider.
    when('/', {
    templateUrl: 'app/views/route1.html',
    controller: 'route1Ctrl'
    }).
    when('/route2', {
    templateUrl: 'app/views/route2.html',
    controller: 'route2Ctrl'
    }).
    otherwise({
    redirectTo : '/'
    });

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
    
}]); 