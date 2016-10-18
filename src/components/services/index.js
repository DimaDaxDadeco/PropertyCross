var angular = require('angular');
var ModalService = require('./modal/ModalService');
var NavigationService = require('./navigation/NavigationService');

angular
    .module('ModalService', [])
    .service('ModalService', ModalService)
    .service('NavigationService', NavigationService);