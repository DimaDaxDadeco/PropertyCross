var angular = require('angular');
var FavoritesCtrl = require('./FavoritesCtrl');
var FavoritesTemplate = require('./FavoritesTemplate.html');

angular
    .module('favorites', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('favorites', {
                template: FavoritesTemplate,
                controller: FavoritesCtrl,
                controllerAs: '$ctrl',
                params: {
                    backLink: null
                }
            })
    });
