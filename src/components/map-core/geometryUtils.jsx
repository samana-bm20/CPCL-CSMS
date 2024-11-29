import { loadModules } from "esri-loader";
const [Extent, webMercatorUtils] = await loadModules([
    'esri/geometry/Extent', 'esri/geometry/support/webMercatorUtils'
],
    { css: true })

export const getIndiaExtent = () => {
    const indiaWGS84Extent = new Extent({
        xmin: 68.1766451354,
        ymin: 6.7475150000,
        xmax: 97.4025614766,
        ymax: 35.4940095078,
        spatialReference: { wkid: 4326 },
    });
    return webMercatorUtils.project(indiaWGS84Extent, { wkid: 102100 });
};

export const chennaiExtent = {
    xmin: 80.26555,
    ymin: 13.145,
    xmax: 80.285,
    ymax: 13.175,
    spatialReference: { wkid: 4326 },
};
