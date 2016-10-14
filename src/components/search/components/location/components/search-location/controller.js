module.exports = function($stateParams, ModalService, ResultsService, SearchService) {

    var self = this;

    ResultsService.resetLocationsData();
    SearchService.backLinkEdit("search.location");

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
        self.recentSearch = localStorage['recentSearch'] ? JSON.parse(localStorage['recentSearch']) : [];
        ModalService.showErrorModal(errors[responseCode]);
        return;
    } 

    self.houseResponse = $stateParams.houseResponse;

    self.recentSearch = localStorage['recentSearch'] ? JSON.parse(localStorage['recentSearch']) : [];

    if ($stateParams.houseResponse && localStorage['recentSearch']) {
        self.recentSearch = JSON.parse(localStorage['recentSearch']);

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
    localStorage['recentSearch'] = JSON.stringify(self.recentSearch);        

}