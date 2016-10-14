module.exports = function SearchCtrl($scope, $state, $http, SearchService) {

    var self = this;
    
    $scope.$watch(function() {
        return SearchService.backLink;
    }, function() {
        self.backLink = SearchService.backLink;
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
    if (!localStorage['myLocation']) self.myLocation();
}