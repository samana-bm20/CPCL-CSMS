import { loadModules } from "esri-loader";
const [
    Zoom,
    ScaleBar,
    Expand,
    BasemapGallery,
    Legend,
    Fullscreen,
    Home,
] = await loadModules(
    [
        'esri/widgets/Zoom',
        'esri/widgets/ScaleBar',
        'esri/widgets/Expand',
        'esri/widgets/BasemapGallery',
        'esri/widgets/Legend',
        'esri/widgets/Fullscreen',
        'esri/widgets/Home'
    ],
    { css: true }
);

export const addWidgets = (view) => {
    const zoom = new Zoom({ view });
    const scaleBar = new ScaleBar({ view });
    const home = new Home({ view });
    const fullscreen = new Fullscreen({ view });
    const basemapGallery = new BasemapGallery({ view, container: document.createElement("div") });
    const bgExpand = new Expand({ view, content: basemapGallery });

    view.ui.add(zoom, "top-right");
    view.ui.add(home, "top-right");
    view.ui.add(fullscreen, "top-right");
    view.ui.add(bgExpand, "bottom-right");
    view.ui.add(scaleBar, "bottom-left");
};

export const addLegend = (view) => {
    const legend = new Legend({ view });
    view.ui.add(legend, "bottom-left");
};
