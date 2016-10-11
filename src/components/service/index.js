var angular = require('angular');
var ServiceService = require('./ServiceService');

angular
    .module('ModalService', [])
    .service('ModalService', ServiceService);