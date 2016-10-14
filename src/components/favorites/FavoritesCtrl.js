module.exports = function($stateParams, FavoritesService) {

    var self = this;
    self.backLink = $stateParams.backLink;

    if (!localStorage['favorites']) {
        localStorage['favorites'] = JSON.stringify([]);
    }
    self.houseList = JSON.parse(localStorage['favorites']); 
    self.visibleElementsAmount = self.houseList.length;

    if ($stateParams.backLink) FavoritesService.backLink = $stateParams.backLink;
    self.backLink = FavoritesService.backLink;

    self.noElements = function() {
        return self.visibleElementsAmount ? "hide" : "";
    }

}