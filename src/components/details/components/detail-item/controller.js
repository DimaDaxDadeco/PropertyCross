module.exports = function($stateParams) {
    var self = this;

    self.houseDetail = $stateParams.houseDetail;

    self.add = function() {
        this.a = localStorage['favourites'] ? JSON.parse(localStorage['favourites']): [];
        if (localStorage['favourites']) {
            self.a = JSON.parse(localStorage['favourites']);
            self.a.forEach(function(item, i, arr) {
                if (item.title != self.houseDetail.title) {
                    // console.log(arr);
                    // console.log(item.title + " | " + self.houseDetail.title);
                    arr.push(self.houseDetail);
                }
            });
        } else {
            this.a.push(self.houseDetail);            
        } 
        // console.log(this.a);
        localStorage['favourites'] = JSON.stringify(this.a);
    }

    var arrTittle = $stateParams.houseDetail.title.split(',');

    self.houseDetail.title = arrTittle[0] + ',' + arrTittle[1]; 
}