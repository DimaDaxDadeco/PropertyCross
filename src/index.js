'use strict';

var angular = require("angular");
require("angular-ui-router");
require("angular-local-storage");
require("./components");

angular.module('PropertyCross', [
  'ui.router',
  'LocalStorageModule',
  'search',
  'favorites',
  'details',
  'results',
  'ModalService',
  'common'
]).run(function () {
  var localStorageNames = ['favorites', 'location', 'myLocation', 'recentSearch'];
  for (var i = 0, max = localStorageNames.length; i < max; i++) {
    if(!localStorage[localStorageNames[i]]) {
      localStorage[localStorageNames[i]] = JSON.stringify([]);
    }
  }
});
