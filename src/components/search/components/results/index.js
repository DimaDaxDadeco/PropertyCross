var angular = require('angular');
var SearchResultsComponent = require('./components/search-results');
var template = require('./template.html');

angular.module('search.results', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('search.results', {
                template: template,
                params: {
                    houseList: null
                }
            });
    })
    .component('searchResults', SearchResultsComponent);