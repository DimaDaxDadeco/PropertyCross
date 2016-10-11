var angular = require('angular');
var DetailsCtrl = require('./DetailsCtrl');
var DetailsService = require('./DetailsService');
var DetailsTpl = require('./DetailsTemplate.html');
var DetailsComponent = require('./components/detail-item');

angular.module('details', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('details', {
                template: DetailsTpl,
                controller: DetailsCtrl,
                params: {
                    houseDetail: null
                }
            });
    })
    .component('itemDetails', DetailsComponent)
    .service('DetailsService', DetailsService);