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
  'CommonService'
]);