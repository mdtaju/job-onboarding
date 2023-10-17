import JobList from "@/src/utilities/jobs-example";
import Link from "next/link";

import maplibregl from "maplibre-gl";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";
import ReactMapGL, { Marker, Popup } from "react-map-gl/maplibre";
import useSupercluster from "use-supercluster";
import MapClusterMarker from "./MapClusterMarker";
import MapMarker from "./MapMarker";

const MapBoxGL = () => {
  const jobData = JobList;
  const [selectedJob, setSelectedJob] = useState(null);
  const mapRef = useRef(null);
  const popRef = useRef(null);
  const geoControlRef = useRef(null);
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

  // function geoLocateEvent(e) {
  //   const { latitude, longitude } = e.coords;
  //   console.log(e);

  //   mapRef.current?.easeTo({
  //     center: [longitude, latitude],
  //     zoom: 10,
  //     duration: 500,
  //   });
  // }

  const handleLiveLocation = () => {
    setIsLiveLocationActive((prevState) => !prevState);
    mapRef.current?.easeTo({
      center: [coords?.longitude, coords?.latitude],
      zoom: 10,
      duration: 500,
    });
  };

  return (
    <div className="relative bg-white flex items-center justify-center w-full overflow-hidden rounded-xl h-[400px] lg4:h-[500px]">
      <button
        onClick={handleLiveLocation}
        className="absolute group top-[10px] right-[10px] w-[30px] h-[30px] bg-white rounded-lg z-[2] border-2 border-gray-200 shadow-sm grid place-items-center hover:border-gray-300 active:border-gray-400 ">
        {/* active and normal svg */}
        {isLiveLocationActive ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="block group-hover:hidden "
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.082 2.182C14.1535 2.25353 14.2016 2.34506 14.22 2.44451C14.2384 2.54395 14.2262 2.64663 14.185 2.739L8.52805 15.467C8.48852 15.556 8.42386 15.6316 8.342 15.6843C8.26014 15.7371 8.16465 15.7648 8.06725 15.7641C7.96986 15.7633 7.8748 15.7342 7.79376 15.6801C7.71271 15.6261 7.64921 15.5496 7.61105 15.46L5.57005 10.694L0.803048 8.652C0.713773 8.6136 0.637623 8.55002 0.583912 8.46902C0.530201 8.38803 0.501258 8.29314 0.500621 8.19596C0.499985 8.09878 0.527683 8.00352 0.580328 7.92183C0.632973 7.84014 0.708283 7.77557 0.797048 7.736L13.525 2.079C13.6173 2.03805 13.7198 2.02597 13.819 2.04435C13.9182 2.06274 14.0096 2.11072 14.081 2.182H14.082Z"
              fill="#62A2FB"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="#808080"
            className="block group-hover:hidden "
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.7175 0.28196C13.789 0.353495 13.8371 0.445024 13.8555 0.544467C13.8739 0.643911 13.8617 0.746592 13.8205 0.83896L8.16355 13.567C8.12402 13.656 8.05936 13.7315 7.9775 13.7843C7.89564 13.8371 7.80015 13.8648 7.70275 13.864C7.60536 13.8633 7.5103 13.8341 7.42926 13.7801C7.34821 13.7261 7.28471 13.6496 7.24655 13.56L5.20555 8.79396L0.438546 6.75196C0.349271 6.71356 0.273121 6.64998 0.21941 6.56898C0.165699 6.48799 0.136756 6.3931 0.136119 6.29592C0.135483 6.19874 0.163181 6.10348 0.215826 6.02179C0.268471 5.9401 0.343781 5.87553 0.432546 5.83596L13.1605 0.17896C13.2528 0.138008 13.3553 0.125929 13.4545 0.144313C13.5537 0.162697 13.6461 0.210682 13.7175 0.28196ZM1.88555 6.28396L5.78255 7.95396C5.90039 8.00476 5.9942 8.09892 6.04455 8.21696L7.71455 12.114L12.3785 1.61996L1.88555 6.28396Z"
              fill="#575757"
            />
          </svg>
        )}
        {/* hover svg */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="hidden group-hover:block group-active:hidden "
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.082 2.182C14.1535 2.25353 14.2016 2.34506 14.22 2.44451C14.2384 2.54395 14.2262 2.64663 14.185 2.739L8.52805 15.467C8.48852 15.556 8.42386 15.6316 8.342 15.6843C8.26014 15.7371 8.16465 15.7648 8.06725 15.7641C7.96986 15.7633 7.8748 15.7342 7.79376 15.6801C7.71271 15.6261 7.64921 15.5496 7.61105 15.46L5.57005 10.694L0.803048 8.652C0.713773 8.6136 0.637623 8.55002 0.583912 8.46902C0.530201 8.38803 0.501258 8.29314 0.500621 8.19596C0.499985 8.09878 0.527683 8.00352 0.580328 7.92183C0.632973 7.84014 0.708283 7.77557 0.797048 7.736L13.525 2.079C13.6173 2.03805 13.7198 2.02597 13.819 2.04435C13.9182 2.06274 14.0096 2.11072 14.081 2.182H14.082Z"
            fill="#C8C8C8"
          />
        </svg>
        {/* active svg */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="hidden group-active:block"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.082 2.182C14.1535 2.25353 14.2016 2.34506 14.22 2.44451C14.2384 2.54395 14.2262 2.64663 14.185 2.739L8.52805 15.467C8.48852 15.556 8.42386 15.6316 8.342 15.6843C8.26014 15.7371 8.16465 15.7648 8.06725 15.7641C7.96986 15.7633 7.8748 15.7342 7.79376 15.6801C7.71271 15.6261 7.64921 15.5496 7.61105 15.46L5.57005 10.694L0.803048 8.652C0.713773 8.6136 0.637623 8.55002 0.583912 8.46902C0.530201 8.38803 0.501258 8.29314 0.500621 8.19596C0.499985 8.09878 0.527683 8.00352 0.580328 7.92183C0.632973 7.84014 0.708283 7.77557 0.797048 7.736L13.525 2.079C13.6173 2.03805 13.7198 2.02597 13.819 2.04435C13.9182 2.06274 14.0096 2.11072 14.081 2.182H14.082Z"
            fill="#898989"
          />
        </svg>
      </button>
      <ReactMapGL
        {...viewPort}
        onMove={(e) => setViewPort(e.viewState)}
        style={{ width: "100%", height: "100%" }}
        cursor="grab"
        mapStyle={`https://api.maptiler.com/maps/basic/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_TOKEN}`}
        ref={(instance) => (mapRef.current = instance)}
        mapLib={maplibregl}>
        {/* clusters marker */}
        {/* <GeolocateControl
          ref={geoControlRef}
          onGeolocate={geoLocateEvent}
          // showUserLocation={true}
          trackUserLocation={true}
          showAccuracyCircle={true}
          // style={{ opacity: 0 }}
          positionOptions={{ enableHighAccuracy: true }}
        /> */}
        {isGeolocationAvailable &&
          isGeolocationEnabled &&
          isLiveLocationActive && (
            <Marker latitude={coords?.latitude} longitude={coords.longitude}>
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
                    <stop offset="1" stop-color="#0066FF" stop-opacity="0.5" />
                  </radialGradient>
                </defs>
              </svg>
            </Marker>
          )}
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
            offset={22}>
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
  );
};

export default MapBoxGL;
