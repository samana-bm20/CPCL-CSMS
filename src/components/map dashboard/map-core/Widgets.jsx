import { loadModules } from "esri-loader";
const [
    Zoom,
    ScaleBar,
    Expand,
    BasemapGallery,
    Legend,
    Fullscreen,
    Home,
    LayerList,
    Compass
] = await loadModules(
    [
        'esri/widgets/Zoom',
        'esri/widgets/ScaleBar',
        'esri/widgets/Expand',
        'esri/widgets/BasemapGallery',
        'esri/widgets/Legend',
        'esri/widgets/Fullscreen',
        'esri/widgets/Home',
        'esri/widgets/LayerList',
        'esri/widgets/Compass',
    ],
    { css: true }
);

export const addWidgets = (view) => {
    const zoom = new Zoom({ view });
    const scaleBar = new ScaleBar({ view });
    const compass = new Compass({ view });
    const home = new Home({ view });
    const fullscreen = new Fullscreen({ view });
    const basemapGallery = new BasemapGallery({ view, container: document.createElement("div") });
    const bgExpand = new Expand({ view, content: basemapGallery });
    const layerList = new LayerList({ view });
    const llExpand = new Expand({ view, content: layerList });

    const legend = new Legend({ view,container: document.createElement("div"),expanded: false,});
    const legendExpand = new Expand({
        view,
        content: legend,
        expanded: false, 
        expandIcon: "layer-list", 
        expandTooltip: "Show Legend",
    });

    setTimeout(() => {
        const scaleBarElement = document.querySelector(".esri-scale-bar");
        if (scaleBarElement) {
          scaleBarElement.style.position = "absolute";
          scaleBarElement.style.bottom = "20px";
          scaleBarElement.style.left = "50%";
          scaleBarElement.style.transform = "translateX(-50%)";
        }
      }, 500)

    view.ui.add(zoom, "top-left");
    view.ui.add(home, "top-right");
    view.ui.add(fullscreen, "top-right");
    view.ui.add(bgExpand, "top-left");
    view.ui.add(llExpand, "top-right");
    view.ui.add(legendExpand, "bottom-left");
    view.ui.add(compass, "bottom-right");
    // view.ui.add(scaleBar, "bottom-left");
};

export const addLegend = (view) => {
    const legend = new Legend({ view });
    view.ui.add(legend, "bottom-left");
};