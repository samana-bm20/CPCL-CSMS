import { loadModules } from "esri-loader";
import { createRenderer, createClusterLayer } from "./FeatureLayerConfig";

const WorkPermitLayer = async (map, view) => {
    const [FeatureLayer] = await loadModules(["esri/layers/FeatureLayer"]);

    const workPermitRenderer = createRenderer("unique-value", "usfd_classification", [
        { value: "Hot Work", symbol: { type: "simple-marker", color: "#BC0E12" } },
        { value: "Cold Work", symbol: { type: "simple-marker", color: "#0039F4" } },
    ]);

    const workPermitPopup = {
        title: "CPCL",
        content: `
      <table class='table table-striped'>
        <tr><td>LRRR</td><td class='popup-cell'>{lr_rr}</td></tr>
        <tr><td>USFD Classification</td><td class='popup-cell'>{usfd_classification}</td></tr>
      </table>
    `,
    };

    const workPermitLayer = createClusterLayer(
        "https://mlinfomap.org/server/rest/services/cpcl_work_permit/MapServer/0",
        workPermitRenderer,
        workPermitPopup
    );

    const query = workPermitLayer.createQuery();
    query.geometry = view.extent; 
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
                popupTemplate: {
                    title: "Cluster summary",
                    content: `This cluster represents {cluster_count} ${type} Work features.`,
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
                    outline: { color: "white", width: 1 },
                },
            },
        });
    };

    const hotWorkLayer = createClusteredLayer(hotWorkQueryResult.features, "Hot", "red");
    const coldWorkLayer = createClusteredLayer(coldWorkQueryResult.features, "Cold", "blue");

    // Add layers to the map
    map.addMany([hotWorkLayer, coldWorkLayer]);
};

export default WorkPermitLayer;
