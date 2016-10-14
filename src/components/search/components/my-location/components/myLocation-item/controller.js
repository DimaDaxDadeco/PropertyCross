module.exports = function($stateParams, ResultsService, ModalService, SearchService) {

    var self = this;

    ResultsService.resetLocationsData();
    SearchService.backLinkEdit("search.mylocation");

    var errors = {
        "200": "ambiguous location",
        "201": "unknown location",
        "202": "misspelled location",
        "210": "coordinate error",
        "900": "bad request",
        "500": "internal Nestoria error"
    };
    
    if($stateParams.houseResponse) {
        var responseCode = $stateParams.houseResponse.application_response_code;    
        var hasError = !!errors[responseCode];        
    }

    if (hasError) {     
        self.recentSearch = localStorage['myLocation'] ? JSON.parse(localStorage['myLocation']) : [];
        ModalService.showErrorModal(errors[responseCode]);
        return;
    } 

    self.houseResponse = $stateParams.houseResponse;

    self.recentSearch = localStorage['myLocation'] ? JSON.parse(localStorage['myLocation']) : [];

    if ($stateParams.houseResponse && localStorage['myLocation']) {
        self.recentSearch = JSON.parse(localStorage['myLocation']);

        var titles = []; 
        self.recentSearch.forEach(function(item, i, arr) {
            titles.push(item.title)
        });
        var numOfElement = titles.indexOf($stateParams.houseResponse.locations[0].long_title);

        if (numOfElement !== -1) {
            self.recentSearch.splice(numOfElement, 1);
        }       
    }

    if ($stateParams.houseResponse) {
        self.recentSearch.unshift({
            title: $stateParams.houseResponse.locations[0].long_title,
            totalRes: $stateParams.houseResponse.total_results
        });
    }
    localStorage['myLocation'] = JSON.stringify(self.recentSearch);
}