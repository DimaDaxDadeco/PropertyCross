var angular = require('angular');
var DetailsTpl = require('./DetailsTemplate.html');
var DetailsComponent = require('./components/detail-item');

angular.module('details', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('details', {
                template: DetailsTpl,
                params: {
                    houseDetail: null,
                    backLink: null
                }
            });
    })
    .component('detailItem', DetailsComponent);