var angular = require('angular');
var ModalService = require('./modal/ModalService');
var NavigationService = require('./navigation/NavigationService');

angular
    .module('services', [])
    .service('ModalService', ModalService)
    .service('NavigationService', NavigationService);