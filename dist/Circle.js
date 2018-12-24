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
exports.__esModule = true;
var React = require("react");
var PropTypes = require("prop-types");
// export the Circle React component from this module
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // change the position automatically if the props get changed
    Circle.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.lat !== this.props.lat || nextProps.lng !== this.props.lng) {
            this.setCenter({
                lat: nextProps.lat,
                lng: nextProps.lng
            });
        }
        if (nextProps.radius !== this.props.radius) {
            this.setRadius(nextProps.radius);
        }
    };
    // remove the circle on unmount of the component
    Circle.prototype.componentWillUnmount = function () {
        var map = this.context.map;
        if (this.circle) {
            map.removeObject(this.circle);
        }
    };
    Circle.prototype.render = function () {
        var map = this.context.map;
        if (map && !this.circle) {
            this.addCircleToMap();
        }
        return null;
    };
    Circle.prototype.addCircleToMap = function () {
        var map = this.context.map;
        var _a = this.props, lat = _a.lat, lng = _a.lng, strokeColor = _a.strokeColor, lineWidth = _a.lineWidth, fillColor = _a.fillColor, radius = _a.radius;
        // create a circle at the provided location
        var circle = new H.map.Circle({
            lat: lat,
            lng: lng
        }, radius, {
            style: {
                fillColor: fillColor,
                lineWidth: lineWidth,
                strokeColor: strokeColor
            }
        });
        map.addObject(circle);
        this.circle = circle;
    };
    Circle.prototype.setCenter = function (point) {
        this.circle.setCenter(point);
    };
    Circle.prototype.setRadius = function (radius) {
        this.circle.setRadius(radius);
    };
    // define the context types that are passed down from a <HEREMap> instance
    Circle.contextTypes = {
        map: PropTypes.object
    };
    Circle.defaultProps = {
        fillColor: "rgba(255, 255, 255, 0.5)",
        lineWidth: 1,
        radius: 1000,
        strokeColor: "black"
    };
    return Circle;
}(React.Component));
exports.Circle = Circle;
// make the Circle component the default export
exports["default"] = Circle;
