module.exports = function(NavigationService, $stateParams) {

    var self = this;

    self.houseList = JSON.parse(localStorage['favorites']);
    self.visibleElementsAmount = self.houseList.length;

    if ($stateParams.backLink) {
        NavigationService.backLink = $stateParams.backLink;
    }
    self.backLink = NavigationService.backLink;
}