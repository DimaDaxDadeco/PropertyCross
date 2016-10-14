var template = require('../../../common/house-list-item/template.html');
var controller = require('./controller');

module.exports = {
    controller: controller,
    template: template,
    bindings: {
        house: "="
    }
}