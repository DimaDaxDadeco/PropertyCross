var angular = require('angular');
var template = require('./template.html');

angular.module('search.location', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('search.location', {
                url: "",
                template: template,
                params: {
                    houseResponse: null
                }
            });
    });