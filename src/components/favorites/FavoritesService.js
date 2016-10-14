module.exports = function FavoritesService() {
    
    var self = this;
    
    self.get = function(currentList, elemOnList, arr) {
        return arr.slice(currentList, elemOnList + currentList);
    };
    self.listLength = function(arr) {
        return arr.length;
    };

}