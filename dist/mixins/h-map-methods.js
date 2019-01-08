"use strict";
exports.__esModule = true;
var ReactDOM = require("react-dom");
var mixin_1 = require("../utils/mixin");
exports.HMapMethods = mixin_1["default"]({
    // return the HTMLElement representing this HEREMap component
    getElement: function () {
        return ReactDOM.findDOMNode(this);
    },
    getMap: function () {
        return this.state.map;
    },
    setCenter: function (point) {
        var animateCenter = this.props.animateCenter;
        var map = this.state.map;
        map.setCenter(point, animateCenter === true);
    },
    setZoom: function (zoom) {
        var animateZoom = this.props.animateZoom;
        var map = this.state.map;
        map.setZoom(zoom, animateZoom === true);
    }
});
exports["default"] = exports.HMapMethods;
