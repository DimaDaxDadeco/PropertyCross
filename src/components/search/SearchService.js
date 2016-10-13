module.exports = function SearchService($http) {

    var self = this;

    self.getLocations = function (searchQuery) {
        var url = "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=" + searchQuery;
        return $http.get(url);
    };
    self.getCurrentLocation = function() {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(function(result) {
                var coordinates = {
                    lng : result.coords.longitude,
                    lat: result.coords.latitude
                }
                resolve(coordinates);
            }, reject);
        });        
    };
    self.getByLocation = function(response) {
        var url = "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&centre_point=51.684183,-3.431481";
        return $http.get(url);
    };
    self.backVal = undefined;
}