var angular = require('angular');
var SearchCtrl = require('./SearchCtrl');
var SearchService = require('./SearchService');
var SearchTpl = require('./SearchTemplate.html');
require('./components/location');
require('./components/my-location');

angular
    .module('search', [
        'search.location',
        'search.myLocation'
])
    .config(function($stateProvider) {        
        $stateProvider
            .state('search', {
                url: "/",
                template: SearchTpl,
                abstract: true,
                controller: SearchCtrl,
                controllerAs: '$ctrl'
            });
    })    
    .service('SearchService', SearchService);