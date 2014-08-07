
/**
 * Application Entry Point
 *
 * @author Anil 
 */

'use strict';

var bullsfirstApp = angular.module('bullsfirst', ['ngRoute', 'ui.bootstrap', 'highcharts-ng']);

bullsfirstApp.config(function ($routeProvider) {
    $routeProvider
		.when('/', {templateUrl: 'Views/Mainpage.html'})
    	.otherwise({redirectTo: '/'});
    
    });
