var angular = require('angular');
var ModalService = require('./modal/ModalService');

angular
    .module('ModalService', [])
    .service('ModalService', ModalService);