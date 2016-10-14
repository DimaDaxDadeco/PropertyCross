var controller = require('./controller');
var template = require('../../../common/house-list-item/template.html');

module.exports = {
    controller: controller,
    template: template,
    bindings: {
        house: "="
    }
}