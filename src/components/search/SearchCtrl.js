module.exports = function SearchCtrl($state, $http, SearchService) {

    var self = this;

    self.getLocations = function () {
        SearchService.getLocations(self.searchQuery)
            .then(function(response) {
                $state.go('search.location', {
                    houseResponse: response.data.response
                })
            })
    };

    self.myLocation = function() {
      SearchService.getCurrentLocation()
        .then(function(pos) {
          SearchService.getByLocation(pos)
            .then(function(locations) {
                $state.go('search.mylocation', {
                    houseResponse: locations.data.response
                })
            })
        })
    };
}