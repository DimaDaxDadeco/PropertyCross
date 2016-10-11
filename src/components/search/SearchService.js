module.exports = function SearchService($http) {
    var self = this;
    self.getLocations = function (searchQuery) {
        var url = "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=" + searchQuery;
        return $http.get(url);
    }
}