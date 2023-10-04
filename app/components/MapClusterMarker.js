import { useEffect, useState } from "react";
import { Marker } from "react-map-gl/maplibre";

function MapClusterMarker({ cluster, clusterHandler }) {
  const [clusterInnerBg, setClusterInnerBg] = useState(
    "rgba(217, 217, 217, 0.70)"
  );

  // every cluster point has coordinates
  const [longitude, latitude] = cluster.geometry.coordinates;

  // the point may be either a cluster or a job point
  const { point_count: pointCount } = cluster.properties;

  //   set cluster inner container color base on pointCount
  useEffect(() => {
    if (pointCount <= 4 && pointCount > 2) {
      setClusterInnerBg("rgba(198, 198, 198, 0.70)");
    }
    if (pointCount > 4) {
      setClusterInnerBg("rgba(173, 173, 173, 0.70)");
    }
  }, [pointCount]);

  return (
    <Marker
      key={`cluster-${cluster.id}`}
      latitude={latitude}
      longitude={longitude}
      onClick={() => {
        clusterHandler(cluster);
        setClusterInnerBg("rgba(125, 125, 125, 0.70)");

        setTimeout(() => {
          setClusterInnerBg("rgba(217, 217, 217, 0.70)");
        }, 200);
      }}>
      <div
        className="cluster_marker_outer"
        style={{ background: `rgba(233, 233, 233, 0.70)` }}>
        <div
          className="cluster_marker_inner"
          style={{
            background: clusterInnerBg,
          }}>
          <div
            className="cluster-marker cursor-pointer"
            // style={{
            //   width: `${30 + (pointCount / points.length) * 20}px`,
            //   height: `${30 + (pointCount / points.length) * 20}px`,
            // }}
            style={{
              background: "rgba(255, 255, 255, 0.70)",
            }}>
            {pointCount}
          </div>
        </div>
      </div>
    </Marker>
  );
}

export default MapClusterMarker;

{
  /* <Marker
                key={`cluster-${cluster.id}`}
                latitude={latitude}
                longitude={longitude}
                onClick={() => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    20
                  );
                  setClusterInnerBg("rgba(125, 125, 125, 0.70)");
                  setTimeout(() => {
                    mapRef.current?.easeTo({
                      center: [longitude, latitude],
                      zoom: expansionZoom,
                      duration: 500,
                    });
                  }, 200);
                }}>
                <div
                  className="cluster_marker_outer"
                  style={{ background: `rgba(233, 233, 233, 0.70)` }}>
                  <div
                    className="cluster_marker_inner"
                    style={{
                      background: clusterInnerBg,
                    }}>
                    <div
                      className="cluster-marker cursor-pointer"
                      // style={{
                      //   width: `${30 + (pointCount / points.length) * 20}px`,
                      //   height: `${30 + (pointCount / points.length) * 20}px`,
                      // }}
                      style={{
                        background: `rgba(255, 255, 255, 0.70)`,
                      }}>
                      {pointCount}
                    </div>
                  </div>
                </div>
              </Marker> */
}
