module.exports = function SearchCtrl($scope, $state, $http, SearchService, NavigationService, spinnerService) {

    var self = this;
    $scope.loading = true;

    $scope.$watch(function() {
        return NavigationService.backLink;
    }, function() {
        self.backLink = NavigationService.backLink;
    });

    self.getLocations = function () {
        spinnerService.show('houseListSpinner');
        SearchService.getLocations(self.searchQuery)
            .then(function(response) {
                $state.go('search.location', {
                    houseResponse: response.data.response
                });
                spinnerService.hide('houseListSpinner');
            });
        $scope.loading = false;
    };

    self.myLocation = function() {
        spinnerService.show('houseListSpinner');
          SearchService.getCurrentLocation()
            .then(function(pos) {
              SearchService.getByLocation(pos)
                .then(function(locations) {
                    $state.go('search.mylocation', {
                        houseResponse: locations.data.response
                    });
                    spinnerService.hide('houseListSpinner');
                })
            });
        $scope.loading = false;
    };
}