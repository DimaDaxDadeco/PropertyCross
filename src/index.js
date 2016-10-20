'use strict';

var angular = require("angular");
require("angular-ui-router");
require("angular-local-storage");
require("./components");
require('angular-spinners');

angular.module('PropertyCross', [
  'ui.router',
  'LocalStorageModule',
  'search',
  'favorites',
  'details',
  'results',
  'services',
  'common',
  'angularSpinners'
]).config(function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}).run(function () {
  var localStorageNames = ['favorites', 'location', 'myLocation', 'recentSearch'];
  localStorageNames.forEach(function(item) {
    if(!localStorage[item]) {
      localStorage[item] = JSON.stringify([]);
    }
  });
});
