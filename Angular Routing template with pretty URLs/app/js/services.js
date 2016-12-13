'use strict';

var appServices = angular.module('appServices', ['ngResource']); 

appServices.factory('dropdownData', ['$resource', function($resource) {
	return $resource('app/json/:itemId.json', {}, {
	query: {method:'GET', params:{itemId:'items'}, isArray:true}
	});
}]);