module.exports = function($scope, ModalService) {

    var self = this;

    $scope.$watch(function() {
        return ModalService.modalInstance;
    }, function(modalInstance) {
        self.modalInstance = modalInstance;
    });

    self.hideErrorModal = function() {
        ModalService.hideErrorModal();
    }
}