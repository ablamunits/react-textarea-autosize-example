"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_textarea_autosize_1 = require("react-textarea-autosize");
var MyCustomTextarea = (function (_super) {
    __extends(MyCustomTextarea, _super);
    function MyCustomTextarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyCustomTextarea.prototype.handleValueChange = function (e) {
        this.props.onChange(e.target.value);
    };
    MyCustomTextarea.prototype.render = function () {
        return (React.createElement(react_textarea_autosize_1.default, { value: this.props.value, onChange: this.handleValueChange.bind(this) }));
    };
    return MyCustomTextarea;
}(React.Component));
exports.MyCustomTextarea = MyCustomTextarea;
