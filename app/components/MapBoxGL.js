import JobList from "@/src/utilities/db";

import { useRef, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

// get lat long number
function getLatLongNum(str) {
  return str.split(",");
}

const MapBoxGL = () => {
  const jobData = JobList;
  const [selectedJob, setSelectedJob] = useState(null);
  const mapRef = useRef(null);
  const popRef = useRef(null);
  const [viewPort, setViewPort] = useState({
    latitude: 51.9198816454355,
    longitude: 4.478242294834028,
    zoom: 10,
  });
  return (
    <div className="relative bg-white flex items-center justify-center w-full overflow-hidden rounded-xl h-[400px] lg4:h-[500px]">
      <ReactMapGL
        {...viewPort}
        onMove={(e) => setViewPort(e.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        ref={(instance) => (mapRef.current = instance)}>
        {jobData?.map((job, i) => {
          const locationArr = getLatLongNum(job.CompanyLocation);
          return (
            <Marker
              key={i}
              latitude={locationArr[0]}
              longitude={locationArr[1]}
              // offsetLeft={-15}
              // offsetTop={-15}
              // className={highlightedId === job.id ? "marker-active" : ""}
            >
              {/* company location */}
              <button
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: job.ComapnyCategoryColour.toLowerCase(),
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "50%",
                  position: "relative",
                }}
                type="button"
                onClick={() => setSelectedJob(job)}>
                {/* job count badge */}
                <div className="absolute top-[-10px] right-[-5px] rounded-full py-1 px-2 leading-none bg-white">
                  1
                </div>
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
            latitude={getLatLongNum(selectedJob.CompanyLocation)[0]}
            longitude={getLatLongNum(selectedJob.CompanyLocation)[1]}
            onClose={() => setSelectedJob(null)}
            closeOnClick={false}>
            <div className=" bg-white">
              <div className="border border-gray-400 p-2 rounded-md flex items-center gap-2">
                {/* logo container start */}
                <div className="min-w-[44px] max-w-[44px] h-[44px] rounded-lg bg-black text-center flex items-center justify-center text-white translate-y-[1px]">
                  {/* Logo div */}
                  <div
                    className="w-full h-full p-2 grid place-items-center"
                    dangerouslySetInnerHTML={{
                      __html: selectedJob.CompanyLogoSvg,
                    }}
                  />
                </div>
                {/* logo container end */}
                <div className="w-[120px]">
                  <h1 className="text-base truncate font-bold text-gray-800">
                    {selectedJob.JobName}
                  </h1>
                  <div className="whitespace-nowrap text-gray-800 text-[14px] font-semibold flex items-center gap-2">
                    <div className="w-[12px] h-[12px] bg-green-500 rounded-full"></div>
                    {selectedJob.Salary}
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapBoxGL;
