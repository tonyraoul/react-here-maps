/// <reference types="heremaps" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface RoutesProps {
    points?: object[];
}
export interface RoutesContext {
    map: H.Map;
    routesGroup: H.map.Group;
}
export declare class Route extends React.Component<RoutesProps, object> {
    static contextTypes: {
        map: PropTypes.Requireable<object>;
        routesGroup: PropTypes.Requireable<object>;
    };
    context: RoutesContext;
    private route;
    private routeLine;
    componentWillReceiveProps(nextProps: RoutesProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private addRouteToMap;
}
export default Route;
