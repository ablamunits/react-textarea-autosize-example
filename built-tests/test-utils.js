"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDom = require("react-dom");
var es6_promise_1 = require("es6-promise");
exports.renderToBody = function (component) {
    var elem = document.createElement('div');
    document.body.appendChild(elem);
    ReactDom.render(component, elem);
    return elem;
};
var Spy = (function () {
    function Spy(stub) {
        if (stub === void 0) { stub = function () { return null; }; }
        var _this = this;
        this.calls = 0;
        this.callArgs = [];
        this.fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var val = _this.stub.apply(_this, args);
            _this.calls++;
            _this.callArgs.push(args);
            return val || new es6_promise_1.Promise(function (r, s) { return r(); });
        };
        this.calls = 0;
        this.callArgs = [];
        this.stub = stub;
    }
    Spy.dummy = function () {
        return new Spy().fn;
    };
    Spy.prototype.called = function () {
        return this.calls > 0;
    };
    Spy.prototype.getLastCallArgs = function () {
        return this.callArgs[this.callArgs.length - 1];
    };
    return Spy;
}());
exports.Spy = Spy;
