import { loadModules } from "esri-loader";
const [

    MapView,
    Map,
    Popup,
] = await loadModules(
    [
        'esri/views/MapView',
        'esri/Map',
        'esri/widgets/Popup',
    ],
    { css: true }
);
import { chennaiExtent } from "./geometryUtils";
import { addWidgets, addLegend } from "./Widgets";

export const setupMapView = (containerId, constraints) => {
    const map = new Map({ basemap: "satellite" });

    const view = new MapView({
        map,
        zoom: 15,
        extent: chennaiExtent,
        constraints,
        ui: { components: ["attribution"] },
        popup: new Popup({
            dockEnabled: true,
            dockOptions: { buttonEnabled: false, breakpoint: false, position: "top-right" },
            visibleElements: { closeButton: false },
        }),
        container: containerId,
    });

    addWidgets(view);
    // addLegend(view);

    return { view, map };
};
