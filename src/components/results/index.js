var angular = require('angular');
var ResultsCtrl = require('./ResultsCtrl');
var ResultsService = require('./ResultsService');
var ResultsTpl = require('./ResultsTemplate.html');

angular
    .module('results', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('results', {
                template: ResultsTpl,
                controller: ResultsCtrl,
                params: {
                    houseList: null,
                    location: null,
                    totalRes: null,
                    backLink: null
                },
                controllerAs: '$ctrl'
            });
    })
    .service('ResultsService', ResultsService);