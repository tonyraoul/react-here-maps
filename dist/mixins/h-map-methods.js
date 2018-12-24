"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
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
    },
    // change the zoom and center automatically if the props get changed
    componentWillReceiveProps: function (nextProps) {
        if (!lodash_1.isEqual(nextProps.center, this.props.center)) {
            this.setCenter(nextProps.center);
        }
        if (nextProps.zoom !== this.props.zoom) {
            this.setZoom(nextProps.zoom);
        }
    }
});
exports["default"] = exports.HMapMethods;
