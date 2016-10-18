module.exports = function($stateParams) {

    var self = this;

    self.houseDetail = $stateParams.houseDetail;
    self.backLink = $stateParams.backLink;

    self.favorites = JSON.parse(localStorage['favorites']);

    self.isHouseFavorite = self.favorites.some(function(currentValue) {
        return currentValue.title == self.houseDetail.title;
    });
    self.addToFavorites = function() {
        self.isHouseFavorite = true;
        self.favorites.push(self.houseDetail);   
        localStorage['favorites'] = JSON.stringify(self.favorites);
    };

    var arrTitle = $stateParams.houseDetail.title.split(',');

    self.houseDetail.title = arrTitle[0] + ',' + arrTitle[1];
}