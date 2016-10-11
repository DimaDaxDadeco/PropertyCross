module.exports = function SearchService(ResultsService) {

    var self = this;

    ResultsService.getLocations()
        .then(function(response){
            self.houseList = response.data.response.listings;     

            self.currentList = 0;
            self.elemOnList = 3;

            self.numHouse = ResultsService.listLength(self.houseList); 

            self.visEl = self.elemOnList < self.numHouse ? self.elemOnList : self.numHouse;

            self.houseList = ResultsService.get(self.currentList * self.elemOnList, self.elemOnList, response.data.response.listings);

            self.LoadMore = function() {
                self.currentList ++;
                if (self.currentList * self.elemOnList + self.elemOnList > self.numHouse) {
                    self.visEl = self.numHouse;
                } else {
                    self.visEl = self.currentList * self.elemOnList + self.elemOnList;
                }
                var newElemList = ResultsService.get(self.currentList * self.elemOnList, self.elemOnList, response.data.response.listings);

                self.houseList = self.houseList.concat(newElemList);
            }
            self.loadMoreHide = function() {
                return (self.currentList * self.elemOnList + self.elemOnList) >= self.numHouse ? "loadMoreHide": "";
            } 
        });       
}