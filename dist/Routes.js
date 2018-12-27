"use strict";
// a "normal" marker that uses a static image as an icon.
// large numbers of markers of this type can be added to the map
// very quickly and efficiently
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
// export the Marker React component from this module
var Route = /** @class */ (function (_super) {
    __extends(Route, _super);
    function Route() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // remove the marker on unmount of the component
    Route.prototype.componentWillUnmount = function () {
        var _a = this.context, map = _a.map, routesGroup = _a.routesGroup;
        if (this.route) {
            routesGroup.removeObject(this.routeLine);
        }
    };
    Route.prototype.render = function () {
        var map = this.context.map;
        if (map && !this.route) {
            this.addRouteToMap();
        }
        return null;
    };
    Route.prototype.addRouteToMap = function () {
        var _a = this.context, map = _a.map, routesGroup = _a.routesGroup;
        var _b = this.props, children = _b.children, points = _b.points;
        var route;
        var routeLine;
        if (React.Children.count(children) > 0) {
            route = new H.geo.LineString();
            routeLine = new H.map.Polyline(route, { style: { lineWidth: 4 } });
            routesGroup.addObject(routeLine);
        }
        this.route = route;
        this.routeLine = routeLine;
    };
    // define the context types that are passed down from a <HEREMap> instance
    Route.contextTypes = {
        map: PropTypes.object,
        routesGroup: PropTypes.object
    };
    return Route;
}(React.Component));
exports.Route = Route;
exports["default"] = Route;
