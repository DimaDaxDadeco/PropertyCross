module.exports = function(FavoritesService) {

    var self = this;

    if (!localStorage['favorites']) localStorage['favorites'] = JSON.stringify([]);
    self.houseList = JSON.parse(localStorage['favorites']);   

    self.currentList = 0;
    self.elemOnList = 20;

    self.numHouse = FavoritesService.listLength(self.houseList); 


    self.visEl = self.elemOnList < self.numHouse ? self.elemOnList : self.numHouse;

    self.houseList = FavoritesService.get(self.currentList * self.elemOnList, self.elemOnList, JSON.parse(localStorage['favorites']));

    self.LoadMore = function() {
        self.currentList ++;
        if (self.currentList * self.elemOnList + self.elemOnList > self.numHouse) {
            self.visEl = self.numHouse;
        } else {
            self.visEl = self.currentList * self.elemOnList + self.elemOnList;
        }
        var newElemList = FavoritesService.get(self.currentList * self.elemOnList, self.elemOnList, JSON.parse(localStorage['favorites']));

        self.houseList = self.houseList.concat(newElemList);
    }
    self.loadMoreHide = function() {
        return (self.currentList * self.elemOnList + self.elemOnList) >= self.numHouse ? "hide": "";
    }

}