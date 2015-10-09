'use strict';


// Declare app level module which depends on filters, and services
angular.module('hbApp', [
  'ngRoute',
  'ngAnimate',
  'google-maps'.ns(),
  'hbApp.filters',
  'hbApp.services',
  'hbApp.directives',
  'hbApp.controllers',

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {templateUrl: 'templates/home.html'})
    .when('/about-us', {templateUrl: 'templates/about_us.html'})
    .when('/news', {templateUrl: 'templates/news.html'})
    .when('/products/:type', {templateUrl: 'templates/products.html'})
    .when('/products/:type/:slug', {templateUrl: 'templates/products.html'})
    .when('/contact-us', {templateUrl: 'templates/contact_us.html'})
    .otherwise({redirectTo: '/home'});
}]);
