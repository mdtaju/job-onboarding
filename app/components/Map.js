import JobList from "@/src/utilities/jobs-example";
import Link from "next/link";

import maplibregl from "maplibre-gl";
import { useCallback, useEffect, useRef, useState } from "react";
import { GeolocateControl } from "react-map-gl";
import ReactMapGL, { Popup } from "react-map-gl/maplibre";
import useSupercluster from "use-supercluster";
import MapClusterMarker from "./MapClusterMarker";
import MapMarker from "./MapMarker";

const Map = (props) => {
  const jobData = JobList;
  const [selectedJob, setSelectedJob] = useState(null);
  const mapRef = useRef(null);
  const popRef = useRef(null);
  const geoControlRef = useRef(null);
  const [viewPort, setViewPort] = useState({
    latitude: 52.004001372806805,
    longitude: 4.373833115738175,
    zoom: 12,
  });

  // get points for cluster
  const points = jobData.map((job) => ({
    ...job,
    type: "Feature",
    properties: { cluster: false, jobId: job.id, category: job.Category },
    geometry: {
      type: "Point",
      coordinates: [parseFloat(job.longitude), parseFloat(job.latitude)],
    },
  }));

  // get bonds for cluster
  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewPort.zoom,
    options: { radius: 50, maxZoom: 15 },
  });

  // popup close on random click
  useEffect(() => {
    const popElement = document.getElementsByClassName("marker_btn");
    document.addEventListener("click", function (event) {
      let insideClick = false;
      for (let i = 0; i < popElement.length; i++) {
        const popEl = popElement[i];
        const isClickInside = popEl.contains(event.target);
        if (isClickInside) {
          insideClick = true;
          break;
        }
      }
      if (!insideClick) {
        setSelectedJob(null);
      }
    });
  }, []);

  // click to center the marker
  const markerCenterHandler = useCallback((latitude, longitude) => {
    mapRef.current?.easeTo({ center: [longitude, latitude], duration: 500 });
  }, []);

  // cluster handler
  const clusterHandler = (cluster) => {
    const [longitude, latitude] = cluster.geometry.coordinates;
    const expansionZoom = Math.min(
      supercluster.getClusterExpansionZoom(cluster.id),
      20
    );
    setTimeout(() => {
      mapRef.current?.easeTo({
        center: [longitude, latitude],
        zoom: expansionZoom,
        duration: 500,
      });
    }, 200);
  };

  function geoLocateEvent(e) {
    const { latitude, longitude } = e.coords;

    mapRef.current?.easeTo({
      center: [longitude, latitude],
      duration: 500,
    });
  }

  return (
    <div className="relative bg-white flex items-center justify-center w-full overflow-hidden rounded-xl h-[400px] lg4:h-[500px]">
      <div className="leaflet-container">
        <ReactMapGL
          {...viewPort}
          onMove={(e) => setViewPort(e.viewState)}
          style={{ width: "100%", height: "100%" }}
          cursor="grab"
          mapStyle={`https://api.maptiler.com/maps/basic/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_TOKEN}`}
          ref={(instance) => (mapRef.current = instance)}
          mapLib={maplibregl}>
          <GeolocateControl
            ref={geoControlRef}
            onGeolocate={geoLocateEvent}
            showUserLocation={true}
            trackUserLocation={true}
            showAccuracyCircle={true}
            positionOptions={{ enableHighAccuracy: true }}
          />
          {/* clusters marker */}
          {clusters.map((cluster, i) => {
            const { latitude, longitude } = cluster;
            // the point may be either a cluster or a job point
            const { cluster: isCluster } = cluster.properties;

            //           52.004001372806805,
            // longitude: 4.373833115738175,

            let isBounce = false;
            if (
              latitude == 52.004001372806805 &&
              longitude == 4.373833115738175
            ) {
              isBounce = true;
            }

            // we have a cluster to render
            if (isCluster) {
              return (
                <MapClusterMarker
                  key={i}
                  cluster={cluster}
                  clusterHandler={clusterHandler}
                />
              );
            }

            // we have a single point (job) to render
            return (
              <MapMarker
                key={i}
                cluster={cluster}
                markerCenterHandler={markerCenterHandler}
                setSelectedJob={setSelectedJob}
                bounce={isBounce}
              />
            );
          })}

          {/* job popup */}
          {selectedJob && (
            <Popup
              ref={popRef}
              anchor="bottom"
              latitude={selectedJob.latitude}
              longitude={selectedJob.longitude}
              onClose={() => setSelectedJob(null)}
              closeOnClick={false}
              closeButton={false}
              offset={24}>
              <div
                className={`customScrollMarker map_popup_scrollbar bg-white space-y-[6px] p-[6px] h-fit max-h-[186px] ${
                  selectedJob.jobs.length > 3
                    ? "overflow-scroll"
                    : "overflow-hidden"
                } overflow-x-hidden rounded-lg`}>
                {selectedJob.jobs.map((job, i) => (
                  <div key={i}>
                    <Link href={"/job"} className="outline-none">
                      <div className="hover:bg-gray-100 active:bg-gray-300 border border-gray-300 p-[6px] rounded-lg flex items-center gap-2">
                        {/* logo container start */}
                        <div className="min-w-[40px] max-w-[40px] h-[40px] rounded-lg bg-black text-center flex items-center justify-center text-white translate-y-[1px]">
                          {/* Logo div */}
                          <div
                            className="w-full h-full p-2 grid place-items-center"
                            dangerouslySetInnerHTML={{
                              __html: job.CompanyLogoSvg,
                            }}
                          />
                        </div>
                        {/* logo container end */}
                        <div className="w-[120px]">
                          <h4 className="text-sm whitespace-normal font-bold text-gray-800">
                            {job.JobName}
                          </h4>
                          <div className="whitespace-nowrap text-xs text-gray-800 text-[14px] font-semibold flex items-center gap-1">
                            <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
                            {job.Salary}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Popup>
          )}
        </ReactMapGL>
      </div>
      {/* )} */}
    </div>
  );
};

export default Map;
