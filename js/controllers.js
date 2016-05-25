'use strict';

/* Controllers */

var vidoeControllers = angular.module('vidoeControllers', []);

vidoeControllers.controller('VidoeViewCtrl', ['$scope',
	function($scope){
		$scope.test = 'Hello world';
	}]);