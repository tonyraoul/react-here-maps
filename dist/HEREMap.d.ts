/// <reference types="heremaps" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface HEREMapProps extends H.Map.Options {
    appId: string;
    appCode: string;
    animateCenter?: boolean;
    animateZoom?: boolean;
    hidpi?: boolean;
    interactive?: boolean;
    secure?: boolean;
    routes?: object[];
    transportData?: boolean;
    trafficLayer?: boolean;
    incidentsLayer?: boolean;
}
export interface HEREMapState {
    map?: H.Map;
    behavior?: H.mapevents.Behavior;
    ui?: H.ui.UI;
    markersGroup?: H.map.Group;
    routesGroup?: H.map.Group;
    trafficLayer?: boolean;
}
export interface HEREMapChildContext {
    map: H.Map;
}
export declare class HEREMap extends React.Component<HEREMapProps, HEREMapState> implements React.ChildContextProvider<HEREMapChildContext> {
    static childContextTypes: {
        map: PropTypes.Requireable<object>;
        markersGroup: PropTypes.Requireable<object>;
        routesGroup: PropTypes.Requireable<object>;
    };
    getElement: () => Element;
    getMap: () => H.Map;
    setCenter: (point: H.geo.IPoint) => void;
    setZoom: (zoom: number) => void;
    state: HEREMapState;
    private debouncedResizeMap;
    truckOverlayLayer: H.map.layer.TileLayer;
    defaultLayers: any;
    constructor(props: HEREMapProps, context: object);
    screenToGeo(x: number, y: number): H.geo.Point;
    zoomOnMarkers(): void;
    getChildContext(): {
        map: H.Map;
        markersGroup: H.map.Group;
        routesGroup: H.map.Group;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: HEREMapProps): void;
    render(): JSX.Element;
    private resizeMap;
}
export default HEREMap;
