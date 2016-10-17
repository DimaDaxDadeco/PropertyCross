module.exports = function($stateParams, ResultsService) {
    
    var self = this;

    self.houseDetail = $stateParams.houseDetail;
    self.backLink = $stateParams.backLink;

    self.favorites = localStorage['favorites'] ? JSON.parse(localStorage['favorites']): [];
    self.isHouseFavorite = false;
    for (let i = 0; i < self.favorites.length; i++) {
        if (self.favorites[i].title == self.houseDetail.title) {
            self.isHouseFavorite = true;
        }
    }
    self.addToFavorites = function() {
        self.isHouseFavorite = true;
        self.favorites.push(self.houseDetail);   
        localStorage['favorites'] = JSON.stringify(self.favorites);
    };

    var arrTittle = $stateParams.houseDetail.title.split(',');

    self.houseDetail.title = arrTittle[0] + ',' + arrTittle[1];
}