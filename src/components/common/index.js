var angular = require('angular');
var modal = require('./modal');

angular
    .module('common', [])
    .component('commonModal',modal);