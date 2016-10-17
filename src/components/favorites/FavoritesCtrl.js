module.exports = function($stateParams, FavoritesService) {

    var self = this;
    
    self.backLink = $stateParams.backLink;
    self.back = "favorites";

    self.houseList = JSON.parse(localStorage['favorites']);
    self.visibleElementsAmount = self.houseList.length;

    if ($stateParams.backLink) FavoritesService.backLink = $stateParams.backLink;
    self.backLink = FavoritesService.backLink;
}