var angular = require('angular');
var ModalServiceService = require('./modal/ModalService');

angular
    .module('ModalService', [])
    .service('ModalService', ModalServiceService);