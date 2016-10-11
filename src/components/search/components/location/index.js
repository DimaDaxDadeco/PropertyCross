var angular = require('angular');
var SearchLocationComponent = require('./components/search-location');
var template = require('./template.html');

angular.module('search.location', [])
    .config(function($stateProvider,localStorageServiceProvider) {
        $stateProvider
            .state('search.location', {
                template: template,
                params: {
                    houseResponse: null
                }
            });
    })
    .component('searchLocation', SearchLocationComponent);