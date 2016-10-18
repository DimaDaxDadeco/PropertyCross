var angular = require('angular');
var DetailsTpl = require('./DetailsTemplate.html');
var DetailsCtrl = require('./DetailsCtrl');

angular.module('details', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('details', {
                template: DetailsTpl,
                params: {
                    houseDetail: null,
                    backLink: null
                },
                controller: DetailsCtrl,
                controllerAs: "$ctrl"
            });
    });