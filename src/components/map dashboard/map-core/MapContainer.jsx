import React, { useEffect, useState } from "react";
import { getIndiaExtent } from "./geometryUtils";
import { setupMapView } from "./MapViewSetup";
import "../map-core/styles/MapContainer.css";
import SidePanel from "../map-container/SidePanel";
import FeatureLayers from "../map-container/FeatureLayers";
import { loadModules } from 'esri-loader';
const [TileLayer, MapImageLayer
] = await loadModules(["esri/layers/TileLayer", "esri/layers/MapImageLayer",], { css: true });

import WorkPermitLayer from "../layer-manager/WorkPermitLayer";

const MapContainer = () => {
    const [activeLayer, setActiveLayer] = useState(null);
    const [isRiskScoreActive, setIsRiskScoreActive] = useState(null);
    const [view, setView] = useState(null);
    const [map, setMap] = useState(null);
    const indiaWebMercatorExtent = getIndiaExtent();

    useEffect(() => {
        const initializeMap = async () => {
            const indiaWebMercatorExtent = getIndiaExtent();

            const { view, map } = setupMapView("viewDiv-0", {
                geometry: indiaWebMercatorExtent,
                minZoom: 13,
                maxZoom:22,
                maxExtent: indiaWebMercatorExtent,
            });
            setView(view);
            setMap(map);

            const boundaryLayer = new TileLayer({
                url: "https://mlinfomap.org/server/rest/services/Hosted/CPCLTileExport/MapServer",
                title: "CPCL Plant Imagery",
                opacity: 1,
            });

            const featureLayer = new MapImageLayer({
                url: "https://mlinfomap.org/server/rest/services/CPCL_Layers/MapServer", 
                title: "CPCL Plant",
                sublayers: [
                    {
                      id: 13,
                      visible: true,
                      title: "CPCL Outer Polygon"
                    },
                    {
                      id: 12,
                      visible: true,
                      title: "Mounded Bullets Polygon"
                    },
                    {
                      id: 11,
                      visible: true,
                      title: "Tanks"
                    },
                    {
                      id: 10,
                      visible: true,
                      title: "Outer Road Centerline"
                    },
                    {
                      id: 9,
                      visible: true,
                      title: "Road"
                    },
                    {
                      id: 8,
                      visible: true,
                      title: "Road Centerline"
                    },
                    {
                      id: 7,
                      visible: true,
                      title: "Existing Fire Water Line"
                    },
                    {
                      id: 6,
                      visible: true,
                      title: "Fire_Zone Line"
                    },
                    {
                      id: 5,
                      visible: true,
                      title: "Units & Facilities"
                    },
                    {
                      id: 4,
                      visible: true,
                      title: "Culvert"
                    },
                    {
                      id: 3, 
                      visible: true,
                      title: "Fire Zone Point"
                    },
                    {
                        id: 2, 
                        visible: true,
                        title: "Fire_Alarm_Panel_Location",
                      },
                    {
                        id: 1, 
                        visible: true,
                        title: "Tree",
                      },
                      {
                        id: 0, 
                        visible: true,
                        title: " Tricky_Fire_Control",
                      },
                  ],
                opacity: 1,
            });

            await view.when(() => {
                map.add(boundaryLayer);
                map.add(featureLayer);
                view.rotation = 270; 
              });

        };
        initializeMap();
    }, []);

    useEffect(() => {
        if (!map || !view || !activeLayer) return;
        map.removeAll();

        switch (activeLayer) {
            case 1:
                WorkPermitLayer(map, view, indiaWebMercatorExtent, isRiskScoreActive); 
                break;
            default:
                break;
        }
    }, [activeLayer, map, indiaWebMercatorExtent, isRiskScoreActive]);

    const handleFeatureSelect = (sno) => {
        setActiveLayer(sno);
    };

    const handleRiskScoreSwitch = (riskSwitch) => {
        setIsRiskScoreActive(riskSwitch);
    };

    return (
        <div className="flex flex-col-reverse md:flex-row h-full">
            <div className="h-max md:h-auto w-full md:w-[5.5rem] flex flex-row md:flex-col items-start md:items-center justify-evenly md:justify-start bg-white">
                <SidePanel />
            </div>

            <div className="flex-grow relative">
                <div id="viewDiv-0" className="absolute inset-0"></div>
                <div className="absolute bg-none w-full h-[10%]">
                    <FeatureLayers onFeatureSelect={handleFeatureSelect} handleRiskScoreSwitch={handleRiskScoreSwitch}/>
                </div>
            </div>
        </div>
        // <div className="flex flex-col-reverse md:flex-row h-full">
        //     <div className="h-[8%] md:h-auto w-full md:w-[5.5rem] flex flex-row md:flex-col items-start md:items-center justify-evenly md:justify-start flex-shrink-0">
        //         <SidePanel />
        //     </div>

        //     <div className="flex-1 relative">
        //         <div id="viewDiv-0" className="absolute inset-0"></div>
        //         <div className="absolute bg-none w-full h-[10%]">
        //             <FeatureLayers onFeatureSelect={handleFeatureSelect} handleRiskScoreSwitch={handleRiskScoreSwitch}/>
        //         </div>
        //     </div>
        // </div>
    );
};

export default MapContainer;
