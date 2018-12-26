/// <reference types="heremaps" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface MarkerProps extends H.map.Marker.Options, H.geo.IPoint {
    bitmap?: string;
}
export interface MarkerContext {
    map: H.Map;
    markersGroup: H.map.Group;
}
export declare class Marker extends React.Component<MarkerProps, object> {
    static contextTypes: {
        map: PropTypes.Requireable<object>;
        markersGroup: PropTypes.Requireable<object>;
    };
    context: MarkerContext;
    private marker;
    componentWillReceiveProps(nextProps: MarkerProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private addMarkerToMap;
    private setPosition;
}
export default Marker;
