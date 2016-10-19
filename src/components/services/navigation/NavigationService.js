module.exports = function NavigationService() {

    var self = this;

    self.backLink = "";
    self.setBackLink = function(backLink) {
        self.backLink = backLink;
    };
}