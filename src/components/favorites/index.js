var angular = require('angular');
var FavoritesCtrl = require('./FavoritesCtrl');
var FavoritesService = require('./FavoritesService');
var FavoritesComponent = require('./component/favorites-item');
var FavoritesTemplate = require('./FavoritesTemplate.html');

angular
    .module('favorites', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('favorites', {
                template: FavoritesTemplate,
                controller: FavoritesCtrl,
                controllerAs: '$ctrl'
            })
    })
    .service('FavoritesService', FavoritesService)
    .component('favoritesItem', FavoritesComponent);
