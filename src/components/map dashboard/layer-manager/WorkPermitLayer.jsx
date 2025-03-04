import { loadModules } from "esri-loader";
import { createRenderer, createClusterLayer } from "./FeatureLayerConfig";

const WorkPermitLayer = async (map, view, indiaWebMercatorExtent, isRiskScoreActive) => {
    const [FeatureLayer] = await loadModules(["esri/layers/FeatureLayer"]);

    const workPermitRenderer = createRenderer("unique-value", "usfd_classification", [
        { value: "Hot Work", symbol: { type: "simple-marker", color: "#BC0E12" } },
        { value: "Cold Work", symbol: { type: "simple-marker", color: "#0039F4" } },
    ]);

    const workPermitPopup = {
        title: "WORK PERMIT",
        content: `
      <table class='table table-striped'>
                <tr><th>Permit Type: </th><td class='popup-cell'>{usfd_classification}</td></tr>
                <tr><th>Risk Category: </th><td class='popup-cell'>{lr_rr} Risk</td></tr>
      </table>
    `,
    };



    const workPermitLayer = createClusterLayer(
        "/railFracture.geojson",
        workPermitRenderer,
        workPermitPopup
    );
    workPermitLayer.when(() => {
        console.log("Work permit fields:", workPermitLayer);
    }).catch(err => {
        console.error("Error loading workPermitLayer:", err);
    });

    const query = workPermitLayer.createQuery();
    query.geometry = indiaWebMercatorExtent.extent;
    query.spatialRelationship = "intersects";

    query.where = "usfd_classification = 'Hot Work'";
    const hotWorkQueryResult = await workPermitLayer.queryFeatures(query);

    query.where = "usfd_classification = 'Cold Work'";
    const coldWorkQueryResult = await workPermitLayer.queryFeatures(query);

    // Create layers for Hot Work and Cold Work
    const createClusteredLayer = (features, type, color) => {
        return new FeatureLayer({
            source: features,
            objectIdField: workPermitLayer.objectIdField,
            geometryType: workPermitLayer.geometryType,
            fields: workPermitLayer.fields,
            popupTemplate: workPermitPopup,
            featureReduction: {
                type: "cluster",
                clusterRadius: "100px",
                fields: [
                    {
                        name: "highCount",
                        statisticType: "count",
                        onStatisticField: "lr_rr",
                        onStatisticExpression: `IIf($feature.lr_rr == 'High', 1, 0)`
                    },
                    {
                        name: "mediumCount",
                        statisticType: "count",
                        onStatisticField: "lr_rr",
                        onStatisticExpression: "IIf($feature.lr_rr == 'Medium', 1, 0)"
                    },
                    {
                        name: "lowCount",
                        statisticType: "count",
                        onStatisticField: "lr_rr",
                        onStatisticExpression: "IIf($feature.lr_rr == 'Low', 1, 0)"
                    }
                ],
                popupTemplate: {
                    title: "WORK PERMIT CLUSTER",
                    content: `This cluster represents {cluster_count} ${type} Work Permits.`,
                    fieldInfos: [{ fieldName: "cluster_count", format: { places: 0, digitSeparator: true } }],
                },
                clusterMinSize: 18,
                clusterMaxSize: 36,
                labelingInfo: [
                    {
                        deconflictionStrategy: "none",
                        labelExpressionInfo: { expression: `Text($feature.cluster_count, '#,###')` },
                        symbol: {
                            type: "text",
                            color: "white",
                            font: { weight: "bold", family: "Noto Sans", size: "12px" },
                        },
                        labelPlacement: "center-center",
                    },
                    {
                        deconflictionStrategy: "none",
                        labelExpressionInfo: {
                            expression: `Text($feature.highCount, '#,###')`
                        },
                        symbol: {
                            type: "text",
                            color: "black",
                            xoffset: 8,
                            // yoffset: -2,
                            font: { weight: "bold", family: "Noto Sans", size: "13px" },
                            haloColor: "#ff711d", //orange
                            haloSize: "10px",
                        },
                        labelPlacement: "above-left",
                    },
                    {
                        deconflictionStrategy: "none",
                        labelExpressionInfo: {
                            expression: `Text($feature.mediumCount, '#,###')`
                        },
                        symbol: {
                            type: "text",
                            color: "black",
                            // yoffset: -10,
                            font: { weight: "bold", family: "Noto Sans", size: "13px" },
                            haloColor: "#edbe00", //yellow
                            haloSize: "10px",
                        },
                        labelPlacement: "above-center",
                    },
                    {
                        deconflictionStrategy: "none",
                        labelExpressionInfo: {
                            expression: `Text($feature.lowCount, '#,###')`
                        },
                        symbol: {
                            type: "text",
                            color: "black",
                            xoffset: -8,
                            // yoffset: -2,
                            font: { weight: "bold", family: "Noto Sans", size: "13px", },
                            haloColor: "#00a200", //green
                            haloSize: "10px",
                        },
                        labelPlacement: "above-right",
                    },
                    // {
                    //     deconflictionStrategy: "none",
                    //     labelExpressionInfo: {
                    //         expression: `
                    //         "High: " + Text($feature.highCount, '#,###') +
                    //         "\\nMedium: " + Text($feature.mediumCount, '#,###') +
                    //         "\\nLow: " + Text($feature.lowCount, '#,###')
                    //     `
                    //     },
                    //     symbol: {
                    //         type: "text",
                    //         color: "white",
                    //         font: { weight: "bold", family: "Noto Sans", size: "12px" },
                    //         haloColor: "black", // Outer border (halo) color
                    //         haloSize: "10px", // Halo size (thickness)
                    //     },
                    //     labelPlacement: "above-center",
                    // },

                ],
                renderer: {
                    visualVariables: [
                        { type: "size", field: "cluster_count", stops: [{ value: 1, size: 18 }, { value: 50, size: 30 }, { value: 100, size: 40 }] },
                    ],
                },
            },
            renderer: {
                type: "simple",
                symbol: {
                    type: "simple-marker",
                    style: "circle",
                    color,
                    size: "15px",
                    outline: { color: "#000", width: 1 },
                },
            },
        });
    };

    const hotWorkLayer = createClusteredLayer(hotWorkQueryResult.features, "Hot", "#DA291C");
    console.log(hotWorkQueryResult.features)
    // const coldWorkLayer = createClusteredLayer(coldWorkQueryResult.features, "Cold", "#0057B8");

    // Add layers to the map
    map.add(hotWorkLayer);
    // map.addMany([hotWorkLayer, coldWorkLayer]);

    view.on("layerview-create", (event) => {
        console.log("LayerView created:", event);
        // Check if clustering is enabled
        if (event.layerView.featureReduction?.cluster) {
            const clusterLayerView = event.layerView.featureReduction.cluster;

            // Get cluster graphics
            clusterLayerView.getClusterGraphics().then((graphics) => {
                graphics.forEach((graphic) => {
                    console.log("Cluster graphic details:", graphic.attributes);
                });
            });
        }
    });
};

export default WorkPermitLayer;
