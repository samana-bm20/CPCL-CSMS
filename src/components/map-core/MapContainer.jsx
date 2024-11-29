import React, { useEffect, useState } from "react";
import { getIndiaExtent } from "./geometryUtils";
import { setupMapView } from "./MapViewSetup";
import "../map-core/styles/MapContainer.css";
import SidePanel from "../map-container/SidePanel";
import FeatureLayers from "../map-container/FeatureLayers";

// Import layers
import WorkPermitLayer from "../layer-manager/WorkPermitLayer";
// import RadiographyLayer from "../layer-manager/RadiographyLayer";

const MapContainer = () => {
    const [activeLayer, setActiveLayer] = useState(null); // Track the selected layer
    const [view, setView] = useState(null);
    const [map, setMap] = useState(null);
    const indiaWebMercatorExtent = getIndiaExtent();

    useEffect(() => {
        const initializeMap = async () => {
            const indiaWebMercatorExtent = getIndiaExtent();

            const { view, map } = setupMapView("viewDiv-0", {
                geometry: indiaWebMercatorExtent,
                minZoom: 3,
                maxExtent: indiaWebMercatorExtent,
            });

            setView(view);
            setMap(map);

            await view.when();
        };

        initializeMap();
    }, []);

    useEffect(() => {
        if (!map || !view || !activeLayer) return;
        map.removeAll();

        switch (activeLayer) {
            case 1:
                WorkPermitLayer(map, indiaWebMercatorExtent); //if we pass 'view' only chennai extent features will appear
                break;
            // case 2:
            //     RadiographyLayer(map, view.extent);
            //     break;
            default:
                break;
        }
    }, [activeLayer, map, view]);

    const handleFeatureSelect = (sno) => {
        setActiveLayer(sno);
    };

    return (
        <div className="flex flex-col flex-col-reverse md:flex-row h-full">
            <div className="h-[8%] md:h-auto w-full md:w-[5.5rem] flex flex-row md:flex-col items-start md:items-center justify-evenly md:justify-start flex-shrink-0">
                <SidePanel />
            </div>

            <div className="flex-1 relative">
                <div id="viewDiv-0" className="absolute inset-0"></div>
                <div className="absolute bg-none w-full h-[10%]">
                    <FeatureLayers onFeatureSelect={handleFeatureSelect} />
                </div>
            </div>
        </div>
    );
};

export default MapContainer;
