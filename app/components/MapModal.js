"use client";
import JobList from "@/src/utilities/jobs-example";
import maplibregl from "maplibre-gl";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { GeolocateControl } from "react-map-gl";
import ReactMapGL, { Marker, Popup } from "react-map-gl/maplibre";
import useSupercluster from "use-supercluster";
import MapClusterMarker from "./MapClusterMarker";
import MapMarker from "./MapMarker";

const MapModal = (props) => {
  // new map state - mapbox
  const jobData = JobList;
  const [selectedJob, setSelectedJob] = useState(null);
  const mapRef = useRef(null);
  const geoControlRef = useRef(null);
  const popRef = useRef(null);
  const [isLiveLocationActive, setIsLiveLocationActive] = useState(false);
  const [viewPort, setViewPort] = useState({
    latitude: 51.9198816454355,
    longitude: 4.478242294834028,
    zoom: 10,
  });

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
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
    options: { radius: 75, maxZoom: 20 },
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

  function closeModal() {
    props.setModal(false);
  }

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
    <>
      {props.modal === false ? (
        /* Show map button starts */
        <button
          onClick={() => {
            props.setModal(true);
          }}
          className={`shadow-lg fixed bottom-5 left-1/2 -translate-x-1/2 items-center justify-center gap-2 bg-black whitespace-nowrap text-white w-[100px] h-[40px] rounded-full text-[15px] transition z-30 ${
            props.modal === false ? "flex lg4:hidden" : "hidden"
          } `}>
          {/* ${showButton === true ? "" : "translate-y-[calc(100%+20px)]"} */}
          Map
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
            className="fill-white">
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        /* Show Listing button starts */
        <button
          onClick={closeModal}
          className={`shadow-lg fixed bottom-5 left-1/2 -translate-x-1/2 items-center justify-center gap-2 bg-black whitespace-nowrap text-white w-[100px] h-[40px] rounded-full text-[15px] transition z-30 ${
            props.modal === true ? "flex lg4:hidden" : "hidden"
          }`}>
          List
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
      )}

      {props.modal === true && (
        <div className={`w-full overflow-hidden h-[450px] z-[29]`}>
          <div className="leaflet-container relative">
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
                // style={{ opacity: 0 }}
                positionOptions={{ enableHighAccuracy: true }}
              />
              {/* live location marker  */}
              {isGeolocationAvailable &&
                isGeolocationEnabled &&
                isLiveLocationActive && (
                  <Marker
                    latitude={coords?.latitude}
                    longitude={coords.longitude}>
                    <svg
                      width="149"
                      height="149"
                      viewBox="0 0 149 149"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle
                        cx="74.5"
                        cy="74.5"
                        r="74.3"
                        fill="url(#paint0_radial_13_17939)"
                        fill-opacity="0.2"
                        stroke="#006AFF"
                        stroke-width="0.4"
                      />
                      <circle cx="74.4999" cy="74.5" r="12.4167" fill="white" />
                      <circle cx="74.5" cy="74.5" r="10.1591" fill="#62A2FB" />
                      <defs>
                        <radialGradient
                          id="paint0_radial_13_17939"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(74.5 74.5) rotate(90) scale(74.5)">
                          <stop offset="0.338774" stop-color="#006AFF" />
                          <stop
                            offset="1"
                            stop-color="#0066FF"
                            stop-opacity="0.5"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </Marker>
                )}
              {/* clusters marker */}
              {clusters.map((cluster, i) => {
                // the point may be either a cluster or a job point
                const { cluster: isCluster } = cluster.properties;

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
                    bounce={false}
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
            {/* new map end */}
          </div>
        </div>
      )}
    </>
  );
};

export default MapModal;
