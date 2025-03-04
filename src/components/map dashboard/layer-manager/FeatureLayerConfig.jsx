import { loadModules } from "esri-loader";
const [FeatureLayer, GeoJSONLayer] = await loadModules(['esri/layers/FeatureLayer', 'esri/layers/GeoJSONLayer'], { css: true });

export const createFeatureLayer = (url, renderer, popupTemplate, featureReduction = null) => {
    return new FeatureLayer({
        url,
        renderer,
        popupTemplate,
        featureReduction,
    });
};

export const createRenderer = (type, field, uniqueValueInfos) => ({
    type,
    field,
    uniqueValueInfos,
});

export const createCluster = (clusterRadius, popupTemplate, clusterMinSize, clusterMaxSize, labelingInfo, renderer) => ({
    type: "cluster",
    clusterRadius,
    popupTemplate,
    clusterMinSize,
    clusterMaxSize,
    labelingInfo,
    renderer
});

export const createClusterLayer = (url, renderer, popup, clusterConfig) => {
    return new GeoJSONLayer({
        url,
        renderer,
        popup,
        featureReduction: clusterConfig,
    });
};

export const createInsetView = (map, indiaWebMercatorExtent, containerId) => {
    return new MapView({
        map,
        zoom: 3,
        container: containerId,
        extent: indiaWebMercatorExtent,
        ui: {
            components: []
        }
    });
};
