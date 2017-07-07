"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var test_utils_1 = require("../test-utils");
var my_custom_textarea_driver_1 = require("./my-custom-textarea.driver");
var jsdomGlobal = require("jsdom-global");
describe('My custom textarea test suite', function () {
    var cleanup;
    beforeEach(function () {
        cleanup = jsdomGlobal();
    });
    afterEach(function () {
        cleanup();
    });
    it('Should render a textarea with the desired value and call callback on change', function () {
        var spy = new test_utils_1.Spy();
        var initialValue = 'I am the text content';
        var props = {
            value: initialValue,
            onChange: spy.fn
        };
        console.log(window !== 'undefined');
        console.log(document !== 'undefined');
        console.log(document.createElement('textarea').style);
        var myCustomTextarea = my_custom_textarea_driver_1.createMyCustomTextarea(props);
        chai_1.expect(myCustomTextarea.getValue()).to.eql(initialValue);
        chai_1.expect(spy.called()).to.eql(false);
        myCustomTextarea.enterValue('Some new value');
        chai_1.expect(spy.called()).to.eql(true);
    });
});
