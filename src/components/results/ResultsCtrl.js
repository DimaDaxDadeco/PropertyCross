module.exports = function($scope, $stateParams, ResultsService) {

    var self = this;
    if ($stateParams.backLink) ResultsService.backLink = $stateParams.backLink;
    self.backLink = ResultsService.backLink;

    if (!ResultsService.houseList.length) {
        self.numPage = 1;
        ResultsService.getLocations(); 
    } else {
        self.numPage = ResultsService.numPage;
    }

    $scope.$watch(function() {
        return ResultsService.houseList;
    }, function(modalInstance) {
        self.houseList = ResultsService.houseList;  
        self.numHouse = ResultsService.totalRes; 
        self.visibleElementsAmount = self.houseList.length < self.numHouse ? self.houseList.length : self.numHouse; 
    });

    self.LoadMore = function() {
        ResultsService.getLocations(++self.numPage).then(function(response){
            self.houseList = ResultsService.houseList;
            self.visibleElementsAmount = self.houseList.length;
        });
    };

    self.loadMoreHide = function() {
        return self.visibleElementsAmount >= self.numHouse ? "hide": "";
    };
}