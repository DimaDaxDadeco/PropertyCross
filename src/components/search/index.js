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
                template: SearchTpl,
                abstract: true,
                controller: SearchCtrl
            });
    })    
    .service('SearchService', SearchService);