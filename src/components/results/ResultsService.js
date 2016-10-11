module.exports = function ResultsService($stateParams, $http, localStorageService) {

    var self = this;

    self.getLocations = function () {
        if ($stateParams.location) localStorage['location'] = $stateParams.location;
        var url = "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=" + localStorage['location'];
        return $http.get(url);
    }
    self.get = function(currentList, elemOnList, arr) {
        return arr.slice(currentList, elemOnList + currentList);
    };
    self.listLength = function(arr) {
        return arr.length;
    };

}