var angular = require('angular');
// var MyLocationService = require('./LocationService');
var MyLocationTpl = require('./MyLocationTemplate.html');
var MyLocationComponent = require('./components/myLocation-item');


angular.module('search.myLocation', [])
    .config(function($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('search.mylocation', {
                url: "",
                template: MyLocationTpl,
                params: {
                    houseResponse: null
                }
            });
    })
    .component('myLocation', MyLocationComponent);