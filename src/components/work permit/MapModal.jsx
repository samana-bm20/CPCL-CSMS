/* eslint-disable no-constant-condition */
import React, { useState, useEffect } from "react";
import { IconButton, Dialog, DialogContent } from "@mui/material";
import AddLocationAltRounded from "@mui/icons-material/AddLocationAltRounded";
import { loadModules } from "esri-loader";

export function MapModal({ openMapModal, setOpenMapModal, setSelectedArea }) {

  const handleOpenMapModal = () => setOpenMapModal(true);
  const handleCloseMapModal = () => setOpenMapModal(false);
  let initializeMap;
  let mapView;
  initializeMap = async () => {

    // eslint-disable-next-line no-constant-condition
    if (true) {
      const mapContainer = document.getElementById('map')
      try {
        const [
          Map,
          MapView,
          GeoJSONLayer,
        ] = await loadModules([
          "esri/Map",
          "esri/views/MapView",
          "esri/layers/GeoJSONLayer",
          "esri/symbols/SimpleFillSymbol",
          "esri/renderers/SimpleRenderer",
        ]);

        const map = new Map({
          basemap: "satellite",
        });

        mapView = new MapView({
          container: mapContainer,
          map: map,
          zoom: 15,
          center: [80.2785, 13.0827],
        });
        let renderer = {
          type: "simple",
          symbol: {
            type: "simple-fill",
            color: [46, 49, 146, 0.3],
            outline: {
              width: 1,
              color: "#ED1C24"
            }
          }
        };
        const geoJsonLayer = new GeoJSONLayer({
          url: "/cpclBoundary.geojson",
          renderer: renderer,
          outFields: ["*"]
        });

        map.add(geoJsonLayer);

        mapView.on("click", (event) => {
          mapView.hitTest(event).then((response) => {
            const results = response.results;
            if (results.length > 0) {
              const feature = results.find((result) => result.layer === geoJsonLayer)?.graphic;

              if (feature) {
                console.log("Feature attributes:", feature.attributes);
                const areaName = feature.attributes.area || "Unknown Area";
                const area = feature.attributes || "Unknown Area"
                setSelectedArea(area)
              }
            }
          });
        });

        geoJsonLayer.watch("loaded", function () {
          if (geoJsonLayer.fullExtent) {
            mapView.goTo(geoJsonLayer.fullExtent, {
              duration: 2000,
              padding: { top: 50, left: 50, bottom: 50, right: 50 },
            }).then(function () {
              //   mapView.zoom = 10; // Adjust this value as needed
            });
          }
        });

      } catch (error) {
        console.error("Error loading the map and GeoJSON:", error);
      }
    }
  };
  setTimeout(() => {
    initializeMap()
  }, 500)

  return (
    <>
      <IconButton aria-label="addlocation" size="small" onClick={handleOpenMapModal}>
        <AddLocationAltRounded sx={{
          fontSize: {
            xs: '1rem',
            md: '1.5rem',
          },
          color: 'primary.main',
          transition: 'all 0.3s ease 0.1s',
          '&:hover': {
            color: 'secondary.main',
            transform: 'translateY(-3px)',
          },
        }} />
      </IconButton>
      <Dialog open={openMapModal} onClose={handleCloseMapModal} maxWidth="md" fullWidth>
        <DialogContent style={{ height: "450px", position: "relative" }}>
          <div id="map" className="h-full w-full" />
        </DialogContent>
        <p className="text-xs md:text-sm italic text-contrast text-center -mt-4 pb-1 font-inter font-medium">Right click and drag to rotate map</p>
      </Dialog>
    </>
  );
}

export default MapModal;
