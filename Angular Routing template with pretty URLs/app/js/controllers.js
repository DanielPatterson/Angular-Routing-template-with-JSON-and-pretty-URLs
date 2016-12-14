'use strict';
 
var appControllers = angular.module('appControllers', []);

appControllers.controller('appCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    
    $scope.seo = {
        pageTitle : 'PageTitle', 
        pageDescription : 'This is the page description for the site (page1)',
        metaAuthor: 'Page Author'
    };

    $scope.getGlobalcomponentA = function () {
        return 'app/components/navbar.html';
    }

    var url="app/json/navbar.json";
    $http.get(url).success( function(response) {
        $scope.navbar = response;
    });

    var url="app/json/route1.json";
    $http.get(url).success( function(response) {
        $scope.route1 = response;
    });

    var url="app/json/route2.json";
    $http.get(url).success( function(response) {
        $scope.route2 = response;
    });

}]);

appControllers.controller('route1Ctrl', ['$scope', function($scope) { 
    $scope.$parent.seo = {
        pageTitle : 'Route 1',
        pageDescripton: 'This is the page description for Route 1',
        metaAuthor: 'Page Author'
    };
}]);

appControllers.controller('route2Ctrl', ['$scope', function($scope) {  
    $scope.$parent.seo = {
        pageTitle : 'Route 2',
        pageDescripton: 'This is the page description for Route 2',
        metaAuthor: 'Page Author'
    };
}]);