module.exports = function ModalService() {

    var self = this;
    self.modalInstance = undefined;

    self.showErrorModal = function(text) {
        self.modalInstance = {
            text: text
        }
    };
    self.hideErrorModal = function() {
        self.modalInstance = undefined;
    };
}