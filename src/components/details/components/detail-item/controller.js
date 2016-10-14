module.exports = function($stateParams, ResultsService) {
    
    var self = this;

    self.houseDetail = $stateParams.houseDetail;
    self.backLink = $stateParams.backLink;

    // self.add = function() {
    self.favorites = localStorage['favorites'] ? JSON.parse(localStorage['favorites']): [];
    if (localStorage['favorites']) {
        self.favorites = JSON.parse(localStorage['favorites']);
        var checkEq = false;
        for (let i = 0; i < self.favorites.length; i++) {
            if (self.favorites[i].title == self.houseDetail.title) {
                checkEq = true;
            }                
        }
        /*if (!checkEq) {
            self.favorites.push(self.houseDetail);
        }*/
    } /*else {
        self.favorites.push(self.houseDetail);            
    } */
    self.add = function() {
        checkEq = true;
        self.favorites.push(self.houseDetail);   
        localStorage['favorites'] = JSON.stringify(self.favorites);       
    }
    // }
    self.hideAddFavorites = function() {
        return checkEq ? "hide" : "";
    }

    var arrTittle = $stateParams.houseDetail.title.split(',');

    self.houseDetail.title = arrTittle[0] + ',' + arrTittle[1]; 
}