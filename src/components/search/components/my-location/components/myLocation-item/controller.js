module.exports = function($stateParams) {
    navigator.geolocation.getCurrentPosition(function(res) {console.log(res)});
}