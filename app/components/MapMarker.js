import { useRef, useState } from "react";
import { Marker } from "react-map-gl/maplibre";

function MapMarker({ cluster, markerCenterHandler, setSelectedJob, bounce }) {
  const [isHover, setIsHover] = useState("not_hover");
  const markerRef = useRef(null);
  const markerBtnRef = useRef(null);

  return (
    <>
      <Marker
        key={`job-${cluster.properties.jobId}`}
        latitude={cluster.latitude}
        longitude={cluster.longitude}
        onClick={() => {
          setTimeout(() => {
            markerCenterHandler(cluster.latitude, cluster.longitude);
          }, 200);
        }}
        ref={markerRef}>
        {/* company location */}
        <button
          ref={markerBtnRef}
          className={`marker_btn group ${bounce ? "animate-bounce" : ""}`}
          style={{
            width: "50px",
            height: "50px",
            position: "relative",
            transition: "all ease-in-out 0.2s",
          }}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsHover("pressed");
            setTimeout(() => {
              setSelectedJob(cluster);
            }, 200);
          }}
          onMouseEnter={() => setIsHover("hover")}
          onMouseLeave={() => setIsHover("not_hover")}>
          {/* home icon svg */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: isHover === "hover" ? "56px" : "50px",
              height: isHover === "hover" ? "56px" : "50px",
              opacity: isHover === "pressed" ? 1 : 0.2,
              borderRadius: "999px",
              background: cluster.CategoryColour,
              transition: "all ease-in-out 0.2s",
            }}></div>

          <div
            style={{
              position: "absolute",
              width: "50px",
              height: "50px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: cluster.CategoryColour,
              display: "grid",
              placeItems: "center",
              borderRadius: "999px",
            }}
            dangerouslySetInnerHTML={{ __html: cluster.icon }}></div>
          {/* job count badge */}
          {cluster.jobs.length > 1 && (
            <div className="absolute top-[-7px] right-[-8px] rounded-full w-[24px] h-[24px] grid place-items-center leading-none bg-white text-[11px]">
              {cluster.jobs.length > 9 ? "9+" : cluster.jobs.length}
            </div>
          )}
        </button>
      </Marker>
    </>
  );
}

export default MapMarker;
