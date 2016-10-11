module.exports = function($stateParams, localStorageService, ModalService) {

    var self = this;

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
        if(localStorage['recentSearch']) self.recentSearch = JSON.parse(localStorage['recentSearch']);
        if(localStorage['houseList']) self.houseList = JSON.parse(localStorage['houseList']);
        ModalService.showErrorModal(errors[responseCode]);
    } else {

        self.houseResponse = $stateParams.houseResponse;

        self.recentSearch = localStorage['recentSearch'] ? JSON.parse(localStorage['recentSearch']) : [];

        if ($stateParams.houseResponse) {
            if (localStorage['recentSearch']) {
                self.recentSearch = JSON.parse(localStorage['recentSearch']);
                var numOfElement = self.recentSearch.indexOf($stateParams.houseResponse.locations[0].long_title);

                if (numOfElement != -1) {
                    self.recentSearch.splice(numOfElement, 1);
                }
            }            
        }

        if ($stateParams.houseResponse) self.recentSearch.unshift($stateParams.houseResponse.locations[0].long_title);
        localStorage['recentSearch'] = JSON.stringify(self.recentSearch);

        self.houseList = localStorage['houseList'] ? JSON.parse(localStorage['houseList']) : []; 

        if ($stateParams.houseResponse) self.houseList.unshift($stateParams.houseResponse.listings);
        localStorage['houseList'] = JSON.stringify(self.houseList);    
    }
}