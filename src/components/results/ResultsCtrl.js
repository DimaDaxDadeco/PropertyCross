module.exports = function($scope, $stateParams, SearchService, ResultsService) {

    var self = this;
    // SearchService.backVal = undefined; ???

    if (!ResultsService.houseList.length) {
        self.pageNum = 1;
        ResultsService.getLocations(); 
    } else {
        self.pageNum = ResultsService.numPage;
    }

    $scope.$watch(function() {
        return ResultsService.houseList;
    }, function(modalInstance) {
        self.houseList = ResultsService.houseList;  
        self.numHouse = ResultsService.totalRes; 
        self.visibleElementsAmount = self.houseList.length < self.numHouse ? self.houseList.length : self.numHouse;   
    });

    self.LoadMore = function() {
        ResultsService.getLocations(++self.pageNum).then(function(response){
            self.houseList = ResultsService.houseList;
            self.visibleElementsAmount = self.houseList.length;
        });
    };

    self.loadMoreHide = function() {
        return self.visibleElementsAmount >= self.numHouse ? "hide": "";
    };
}