'use strict';

/* App Module */

var vidoecamApp = angular.module('vidoecamApp', [
	'ngRoute',
	'vidoeControllers',
]);

vidoecamApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'templates/main.html',
        controller: 'VidoeViewCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);