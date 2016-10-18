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
  if(!localStorage['favorites']) {
      localStorage['favorites'] = JSON.stringify([]);
  }
  if(!localStorage['location']) {
      localStorage['location'] = JSON.stringify([]);
  }
  if(!localStorage['myLocation']) {
      localStorage['myLocation'] = JSON.stringify([]);
  }
  if(!localStorage['recentSearch']) {
      localStorage['recentSearch'] = JSON.stringify([]);
  }
});
