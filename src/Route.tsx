// a "normal" marker that uses a static image as an icon.
// large numbers of markers of this type can be added to the map
// very quickly and efficiently

import * as React from "react";
import * as PropTypes from "prop-types";

// declare an interface containing the required and potential
// props that can be passed to the HEREMap Marker component
export interface RoutesProps {
    points?: object[];
}

// declare an interface containing the potential context parameters
export interface RoutesContext {
  map: H.Map;
  routesGroup: H.map.Group;
}

// export the Marker React component from this module
export class Route extends React.Component<RoutesProps, object> {
  // define the context types that are passed down from a <HEREMap> instance
  public static contextTypes = {
    map: PropTypes.object,
    routesGroup: PropTypes.object,
  };

  public context: RoutesContext;

  private route: H.geo.LineString;
  private routeLine: H.map.Polyline;

  public componentWillReceiveProps(nextProps: RoutesProps) {
    const { map, routesGroup } = this.context;

    if (this.route) {
      routesGroup.removeObject(this.routeLine);
    }
    this.addRouteToMap()
  }
  // remove the marker on unmount of the component
  public componentWillUnmount() {
    const { map, routesGroup } = this.context;

    if (this.route) {
      routesGroup.removeObject(this.routeLine);
    }
  }

  public render(): JSX.Element {
    const {map} = this.context;

    if (map && !this.route) {
      this.addRouteToMap();
    }

    return null;
  }

  private addRouteToMap() {
    const {
      map,
      routesGroup,
    } = this.context;

    const {
      points
    } = this.props;

    let route: H.geo.LineString;
    let routeLine: H.map.Polyline;
    route = new H.geo.LineString();
    points.forEach(point => {
      route.pushPoint(point as H.geo.Point);
    })
    routeLine = new H.map.Polyline(route, {style: { lineWidth: 4 }});
    routesGroup.addObject(routeLine);
    this.route = route;
    this.routeLine = routeLine;
  }

}
export default Route;
