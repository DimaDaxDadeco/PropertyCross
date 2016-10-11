var angular = require('angular');
var CommonService = require('./CommonService');
var template = require('./CommonTemplate.html')
var modal = require('./modal');

angular
    .module('CommonService', [])
    .service('CommonService', CommonService)
    .component('commonModal',modal);