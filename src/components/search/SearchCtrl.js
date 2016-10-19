module.exports = function SearchCtrl($scope, $state, $http, SearchService, NavigationService) {

    var self = this;
    
    $scope.$watch(function() {
        return NavigationService.backLink;
    }, function() {
        self.backLink = NavigationService.backLink;
    });

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