"use client";
import JobList from "@/src/utilities/jobs-example";
import maplibregl from "maplibre-gl";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl/maplibre";
import useSupercluster from "use-supercluster";

const MapModal = (props) => {
  const [showButton, setShowButton] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  // new map state - mapbox
  const jobData = JobList;
  const [selectedJob, setSelectedJob] = useState(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const markerBtnRef = useRef(null);
  const popRef = useRef(null);
  const [viewPort, setViewPort] = useState({
    latitude: 51.9198816454355,
    longitude: 4.478242294834028,
    zoom: 10,
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

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      setShowButton(currentScrollPos < scrollPos);
      setScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

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

  return (
    <>
      {props.modal === false ? (
        /* Show map button starts */
        <button
          onClick={() => {
            props.setModal(true);
          }}
          className={`shadow-lg fixed bottom-5 left-1/2 -translate-x-1/2 items-center justify-center gap-2 bg-black whitespace-nowrap text-white w-[100px] h-[50px] rounded-full text-[15px] transition z-30 ${
            props.modal === false ? "flex lg4:hidden" : "hidden"
          } ${showButton === true ? "" : "translate-y-[calc(100%+20px)]"}`}>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
            />
          </svg> */}
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
          className={`shadow-lg fixed bottom-5 left-1/2 -translate-x-1/2 items-center justify-center gap-2 bg-black whitespace-nowrap text-white w-[100px] h-[50px] rounded-full text-[15px] transition z-30 ${
            props.modal === true ? "flex lg4:hidden" : "hidden"
          } ${showButton === true ? "" : "translate-y-[calc(100%+20px)]"}`}>
          List
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
            />
            <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z" />
          </svg>
        </button>
      )}

      {props.modal === true && (
        <div className={`w-full overflow-hidden rounded-xl h-[450px] z-50`}>
          <div className="leaflet-container">
            <ReactMapGL
              {...viewPort}
              onMove={(e) => setViewPort(e.viewState)}
              style={{ width: "100%", height: "100%" }}
              cursor="grab"
              mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_TOKEN}`}
              ref={(instance) => (mapRef.current = instance)}
              mapLib={maplibregl}>
              {/* clusters marker */}
              {clusters.map((cluster) => {
                // every cluster point has coordinates
                const [longitude, latitude] = cluster.geometry.coordinates;
                // the point may be either a cluster or a job point
                const { cluster: isCluster, point_count: pointCount } =
                  cluster.properties;

                // we have a cluster to render
                if (isCluster) {
                  return (
                    <Marker
                      key={`cluster-${cluster.id}`}
                      latitude={latitude}
                      longitude={longitude}
                      onClick={() => {
                        const expansionZoom = Math.min(
                          supercluster.getClusterExpansionZoom(cluster.id),
                          20
                        );
                        mapRef.current?.easeTo({
                          center: [longitude, latitude],
                          zoom: expansionZoom,
                          duration: 500,
                        });
                      }}>
                      <div
                        className="cluster-marker cursor-pointer"
                        style={{
                          width: `${30 + (pointCount / points.length) * 20}px`,
                          height: `${30 + (pointCount / points.length) * 20}px`,
                        }}>
                        {pointCount}
                      </div>
                    </Marker>
                  );
                }

                // we have a single point (job) to render
                return (
                  <Marker
                    key={`job-${cluster.properties.jobId}`}
                    latitude={cluster.latitude}
                    longitude={cluster.longitude}
                    onClick={() =>
                      markerCenterHandler(cluster.latitude, cluster.longitude)
                    }
                    ref={markerRef}>
                    {/* company location */}
                    <button
                      ref={markerBtnRef}
                      className="marker_btn"
                      style={{
                        width: "42px",
                        height: "42px",
                        backgroundColor: cluster.CategoryColour.toLowerCase(),
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "50%",
                        position: "relative",
                      }}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedJob(cluster);
                      }}>
                      {/* job count badge */}
                      {cluster.jobs.length > 1 && (
                        <div className="absolute top-[-10px] right-[-5px] rounded-full py-1 px-2 leading-none bg-white">
                          {cluster.jobs.length > 9 ? "9+" : cluster.jobs.length}
                        </div>
                      )}
                      {/* home icon svg */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={22}
                        height={22}
                        style={{ fill: "#ffffff" }}
                        viewBox="0 0 72 72">
                        <path d="M 36 10 C 34.861 10 33.722922 10.386609 32.794922 11.162109 L 11.517578 28.941406 C 10.052578 30.165406 9.5519375 32.270219 10.460938 33.949219 C 11.219708 35.3497 12.603889 36.065273 14 36.066406 L 14 50 C 14 54.418 17.582 58 22 58 L 50 58 C 54.418 58 58 54.418 58 50 L 58 36.078125 C 59.17234 36.077559 60.334392 35.56667 61.126953 34.574219 C 62.503953 32.850219 62.112922 30.303672 60.419922 28.888672 L 58 26.867188 L 58 16.667969 C 58 15.194969 56.805984 14 55.333984 14 L 52.667969 14 C 51.194969 14 50 15.194969 50 16.667969 L 50 20.181641 L 39.205078 11.162109 C 38.277078 10.386609 37.139 10 36 10 z M 36 19.212891 C 36.22775 19.212891 36.455125 19.290312 36.640625 19.445312 L 50 30.607422 L 50 49.5 C 50 49.776 49.776 50 49.5 50 L 42 50 L 42 38 C 42 36.895 41.105 36 40 36 L 32 36 C 30.895 36 30 36.895 30 38 L 30 50 L 22.5 50 C 22.224 50 22 49.776 22 49.5 L 22 30.607422 L 35.359375 19.445312 C 35.544875 19.290313 35.77225 19.212891 36 19.212891 z"></path>
                      </svg>
                    </button>
                  </Marker>
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
                    className={`customScroll map_popup_scrollbar bg-white space-y-[6px] p-[6px] h-fit max-h-[186px] ${
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
