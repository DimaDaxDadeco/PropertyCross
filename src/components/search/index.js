var angular = require('angular');
var SearchCtrl = require('./SearchCtrl');
var SearchService = require('./SearchService');
var SearchTpl = require('./SearchTemplate.html');
var SearchComponent = require('./components/location-list');
require('./location');
require('./my-location');

angular
    .module('search', [
        'search.location',
        'search.myLocation'
])
    .config(function($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('search', {
                url: "/",
                template: SearchTpl,
                abstract: true,
                controller: SearchCtrl,
                controllerAs: '$ctrl'
            });
    })
    .service('SearchService', SearchService)
    .component('locationList', SearchComponent);