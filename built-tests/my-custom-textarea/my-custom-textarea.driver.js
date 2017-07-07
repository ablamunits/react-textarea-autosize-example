"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_addons_test_utils_1 = require("react-addons-test-utils");
var my_custom_textarea_comp_1 = require("./my-custom-textarea.comp");
var test_utils_1 = require("../test-utils");
exports.createMyCustomTextarea = function (props) {
    var elem = test_utils_1.renderToBody(React.createElement(my_custom_textarea_comp_1.MyCustomTextarea, props));
    return new MyCustomTextareaDriver(elem);
};
var MyCustomTextareaDriver = (function () {
    function MyCustomTextareaDriver(elem) {
        this.elem = elem;
    }
    MyCustomTextareaDriver.prototype.find = function (selector) {
        return this.elem.querySelector(selector);
    };
    MyCustomTextareaDriver.prototype.getTextarea = function () {
        return this.find('textarea');
    };
    MyCustomTextareaDriver.prototype.getValue = function () {
        return this.getTextarea().value;
    };
    MyCustomTextareaDriver.prototype.enterValue = function (newValue) {
        var textarea = this.getTextarea();
        textarea.value = newValue;
        react_addons_test_utils_1.Simulate.change(textarea);
    };
    return MyCustomTextareaDriver;
}());
exports.MyCustomTextareaDriver = MyCustomTextareaDriver;
