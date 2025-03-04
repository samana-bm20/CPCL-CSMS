// /* eslint-disable no-constant-condition */
// import React, { useState, useEffect } from "react";
// import { IconButton, Dialog, DialogContent } from "@mui/material";
// import AddLocationAltRounded from "@mui/icons-material/AddLocationAltRounded";
// import { loadModules } from "esri-loader";
// const [Popup, TileLayer, FeatureLayer, MapView, Map, Zoom, ScaleBar, Expand, BasemapGallery, reactiveUtils, Legend, LayerList, typeRendererCreator, IdentityManager, geometry, SpatialReference, Fullscreen, Home, geometryEngine, Point, MapImageLayer,
// ] = await loadModules(["esri/widgets/Popup", "esri/layers/TileLayer", "esri/layers/FeatureLayer", "esri/views/MapView", "esri/Map", "esri/widgets/Zoom", "esri/widgets/ScaleBar",
//   "esri/widgets/Expand", "esri/widgets/BasemapGallery", "esri/core/reactiveUtils", "esri/widgets/Legend", "esri/widgets/LayerList", "esri/smartMapping/renderers/type", "esri/identity/IdentityManager", "esri/geometry", "esri/geometry/SpatialReference", "esri/widgets/Fullscreen", "esri/widgets/Home", "esri/geometry/geometryEngine", "esri/geometry/Point", "esri/layers/MapImageLayer",], { css: true });


// export function MapModal({ openMapModal, setOpenMapModal, setSelectedArea }) {

//   const handleOpenMapModal = () => setOpenMapModal(true);
//   const handleCloseMapModal = () => setOpenMapModal(false);
//   let initializeMap;
//   let mapView;
//   initializeMap = async () => {

//     // eslint-disable-next-line no-constant-condition
//     if (true) {
//       const mapContainer = document.getElementById('map')
//       try {
//         const [
//           Map,
//           MapView,
//           GeoJSONLayer,
//         ] = await loadModules([
//           "esri/Map",
//           "esri/views/MapView",
//           "esri/layers/GeoJSONLayer",
//           "esri/symbols/SimpleFillSymbol",
//           "esri/renderers/SimpleRenderer",
//         ]);

//         const map = new Map({
//           basemap: "dark-gray-vector",
//         });

//         mapView = new MapView({
//           container: mapContainer,
//           map: map,
//           // zoom: 18,
//           minZoom: 13,
//           maxZoom: 22,
//           center: [80.2785, 13.0827],
//         });
//         let renderer = {
//           type: "simple",
//           symbol: {
//             type: "simple-fill",
//             color: [46, 49, 146, 0.3],
//             outline: {
//               width: 1,
//               color: "#ED1C24"
//             }
//           }
//         };
//         const geoJsonLayer = new GeoJSONLayer({
//           url: "/cpclBoundary.geojson",
//           renderer: renderer,
//           outFields: ["*"]
//         });



//         const boundaryLayer = new TileLayer({
//           url: "https://mlinfomap.org/server/rest/services/Hosted/CPCLTileExport/MapServer",
//           title: "CPCL Plant Imagery",
//           opacity: 1,
//         });

//         map.add(boundaryLayer)
//         // map.add(geoJsonLayer);

//         mapView.on("click", (event) => {
//           mapView.hitTest(event).then((response) => {
//             const results = response.results;
//             if (results.length > 0) {
//               const feature = results.find((result) => result.layer === geoJsonLayer)?.graphic;

//               if (feature) {
//                 console.log("Feature attributes:", feature.attributes);
//                 const areaName = feature.attributes.area || "Unknown Area";
//                 const area = feature.attributes || "Unknown Area";
//                 setSelectedArea(area)
//               }
//             }
//           });
//         });

//         boundaryLayer.watch("loaded", function () {
//           if (boundaryLayer.fullExtent) {
//             mapView.goTo(boundaryLayer.fullExtent, {
//               duration: 1000,
//               padding: { top: 50, left: 50, bottom: 50, right: 50 },
//             }).then(function () {
//                 mapView.zoom = 13; 
//               mapView.rotation = 270; 
//             });
//           }
//         });
//       } catch (error) {
//         console.error("Error loading the map and GeoJSON:", error);
//       }
//     }
//   };
//   setTimeout(() => {
//     initializeMap()
//   }, 500)

//   return (
//     <>
//       <IconButton aria-label="addlocation" size="small" onClick={handleOpenMapModal}>
//         <AddLocationAltRounded sx={{
//           fontSize: {
//             xs: '1rem',
//             md: '1.5rem',
//           },
//           color: 'primary.main',
//           transition: 'all 0.3s ease 0.1s',
//           '&:hover': {
//             color: 'secondary.main',
//             transform: 'translateY(-3px)',
//           },
//         }} />
//       </IconButton>
//       <Dialog open={true} onClose={handleCloseMapModal} maxWidth="md" fullWidth>
//         <DialogContent style={{ height: "450px", position: "relative" }}>
//           <div id="map" className="h-full w-full" />
//         </DialogContent>
//         <p className="text-xs md:text-sm italic text-contrast text-center -mt-4 pb-1 font-inter font-medium">Right click and drag to rotate map</p>
//       </Dialog>
//     </>
//   );
// }

// export default MapModal;


/* eslint-disable no-constant-condition */
import React, { useEffect } from "react";
import { loadModules } from "esri-loader";

export function MapModal({ setSelectedArea }) {
  useEffect(() => {
    const initializeMap = async () => {
      try {
        const [Map, MapView, GeoJSONLayer, TileLayer] = await loadModules([
          "esri/Map",
          "esri/views/MapView",
          "esri/layers/GeoJSONLayer",
          "esri/layers/TileLayer",
        ]);

        const map = new Map({
          basemap: "dark-gray-vector",
        });

        const mapView = new MapView({
          container: "map",
          map: map,
          center: [80.2785, 13.0827],
        });

        let renderer = {
          type: "simple",
          symbol: {
            type: "simple-fill",
            color: [46, 49, 146, 0.3],
            outline: { width: 1, color: "#ED1C24" },
          },
        };

        const geoJsonLayer = new GeoJSONLayer({
          url: "/cpclBoundary.geojson",
          renderer: renderer,
          outFields: ["*"],
        });

        const boundaryLayer = new TileLayer({
          url: "https://mlinfomap.org/server/rest/services/Hosted/CPCLTileExport/MapServer",
          title: "CPCL Plant Imagery",
          opacity: 1,
        });

        map.add(boundaryLayer);

        mapView.on("click", (event) => {
          mapView.hitTest(event).then((response) => {
            const results = response.results;
            if (results.length > 0) {
              const feature = results.find((result) => result.layer === geoJsonLayer)?.graphic;
              if (feature) {
                console.log("Feature attributes:", feature.attributes);
                setSelectedArea(feature.attributes || "Unknown Area");
              }
            }
          });
        });

        boundaryLayer.watch("loaded", function () {
          if (boundaryLayer.fullExtent) {
            mapView.goTo(boundaryLayer.fullExtent, {
              duration: 20,
              padding: { top: 50, left: 50, bottom: 50, right: 50 },
            }).then(() => {
              mapView.zoom = 13;
              mapView.rotation = 270;
            });
          }
        });
      } catch (error) {
        console.error("Error loading the map and GeoJSON:", error);
      }
    };

    initializeMap();
  }, [setSelectedArea]);

  return (
    <div style={{ height: "300px", width: "100%", position: "relative" }}>
      <div id="map" className="h-full w-full" />
      {/* <p className="text-xs md:text-sm italic text-contrast text-center -mt-4 pb-1 font-inter font-medium">
        Right click and drag to rotate map
      </p> */}
    </div>
  );
}

export default MapModal;
