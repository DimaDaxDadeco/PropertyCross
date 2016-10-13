module.exports = function FavoritesService(SearchService) {
    
    var self = this;
    
    self.get = function(currentList, elemOnList, arr) {
        SearchService.backVal = "favorites";
        return arr.slice(currentList, elemOnList + currentList);
    };
    self.listLength = function(arr) {
        return arr.length;
    };

}