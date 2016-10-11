module.exports = function SearchCtrl($scope, $state, $http, SearchService) {
    $scope.getLocations = function () {
        SearchService.getLocations($scope.searchQuery)
            .then(function(response) {
                $state.go('search.location', {
                    houseResponse: response.data.response
                })
            })
    }
}