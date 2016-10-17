var angular = require('angular');
var MyLocationTpl = require('./MyLocationTemplate.html');

angular.module('search.myLocation', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('search.mylocation', {
                template: MyLocationTpl,
                params: {
                    houseResponse: null
                }
            });
    });