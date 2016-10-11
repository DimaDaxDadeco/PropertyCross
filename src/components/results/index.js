var angular = require('angular');
var ResultsCtrl = require('./ResultsCtrl');
var ResultsService = require('./ResultsService');
var ResultsTpl = require('./ResultsTemplate.html');
var ResultsComponent = require('./components/results-item');

angular
    .module('results', [])
    .config(function($stateProvider,localStorageServiceProvider) {
        $stateProvider
            .state('results', {
                template: ResultsTpl,
                controller: ResultsCtrl,
                params: {
                    houseList: null,
                    location: null
                },
                controllerAs: '$ctrl'
            });
    })
    .service('ResultsService', ResultsService)
    .component('resultsItem', ResultsComponent);