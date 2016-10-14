module.exports = function ResultsService($stateParams, $http, localStorageService, SearchService) {

    var self = this;
    self.numPage = 1;

    self.getLocations = function (page) {
        if (!page) {
            self.resetLocationsData();
        }
        if ($stateParams.location) localStorage['location'] = $stateParams.location;
        var url = "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=" + (page || 1) + "&place_name=" + localStorage['location'];
        
        return $http.get(url)
            .then(function(response) {
                ++self.numPage; 
                self.houseList = self.houseList.concat(response.data.response.listings);
                self.totalPage = response.data.response.total_pages; 
                self.totalRes = response.data.response.total_results;
            });
    };
    
    self.resetLocationsData = function() {
        self.houseList = [];
        self.numPage = 1;
        self.totalPage = undefined;
        self.totalRes = undefined;
    };


    self.resetLocationsData();
}