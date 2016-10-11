var angular = require('angular');
// var MyLocationService = require('./LocationService');
var MyLocationTpl = require('./MyLocationTemplate.html');
var MyLocationComponent = require('./components/myLocation-item');


angular.module('search.myLocation', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('search.mylocation', {
                url: "",
                template: MyLocationTpl
            });
    })
    .component('myLocation', MyLocationComponent);