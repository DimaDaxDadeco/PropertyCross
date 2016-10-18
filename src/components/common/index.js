var angular = require('angular');
var modal = require('./modal');
var houseListItem = require('./house-list-item');

angular
    .module('common', [])
    .component('commonModal', modal)
    .component('houseListItem', houseListItem);