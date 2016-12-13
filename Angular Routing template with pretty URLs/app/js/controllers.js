'use strict';
 
var appControllers = angular.module('appControllers', []);

appControllers.controller('appCtrl', ['$scope', '$http', '$routeParams', 'dropdownData', function($scope, $http, $routeParams, dropdownData) {
    
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

    var url="app/json/page1.json";
    $http.get(url).success( function(response) {
        $scope.page1 = response;
    });

    var url="app/json/page2.json";
    $http.get(url).success( function(response) {
        $scope.page2 = response;
    });
    
    $scope.getGlobalcomponentZ = function () {
        return 'app/components/footer.html';
    }

    var url="app/json/footer.json";
    $http.get(url).success( function(response) {
        $scope.footer = response;
    });

    $scope.date = new Date();

    $scope.items = dropdownData.query();
    $scope.orderProp = 'age';

}]);

appControllers.controller('page1Ctrl', ['$scope', function($scope) { 
    $scope.$parent.seo = {
        pageTitle : 'Page 1',
        pageDescripton: 'This is the page description for page 1',
        metaAuthor: 'Page Author'
    };
}]);

appControllers.controller('page2Ctrl', ['$scope', function($scope) {  
    $scope.$parent.seo = {
        pageTitle : 'Page 2',
        pageDescripton: 'This is the page description for page 2',
        metaAuthor: 'Page Author'
    };
}]);

appControllers.controller('reusableCtrl', ['$scope', function($scope) {
    $scope.$parent.seo = {
        pageTitle : 'Reusable page',
        pageDescripton: 'This is the page description for the Reusable page',
        metaAuthor: 'Page Author'
    };
}]);