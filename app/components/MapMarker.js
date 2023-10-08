import { useEffect, useRef, useState } from "react";
import { Marker } from "react-map-gl/maplibre";

function MapMarker({ cluster, markerCenterHandler, setSelectedJob, bounce }) {
  const [isHover, setIsHover] = useState("not_hover");
  const [markerOuterColor, setMarkerOuterColor] = useState(
    cluster.CategoryOuterColor
  );
  const markerRef = useRef(null);
  const markerBtnRef = useRef(null);

  useEffect(() => {
    switch (isHover) {
      case "not_hover":
        setMarkerOuterColor(cluster.CategoryOuterColor);
        break;
      case "hover":
        setMarkerOuterColor(cluster.CategoryOuterHoverColor);
        break;
      case "pressed":
        setMarkerOuterColor(cluster.CategoryOuterColor);
        break;
      default:
        break;
    }
  }, [isHover]);

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
          className={`marker_btn ${bounce ? "animate-bounce" : ""}`}
          style={{
            width: "65px",
            height: "65px",
            backgroundColor: markerOuterColor,
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            position: "relative",
            transition: "all ease-in-out 0.2s",
            // pressColor #C4D8F7
          }}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsHover("pressed");
            setTimeout(() => {
              setSelectedJob(cluster);
            }, 200);
          }}
          //     onMouseOver={toggleHover}
          onMouseEnter={() => setIsHover("hover")}
          onMouseLeave={() => setIsHover("not_hover")}>
          {/* job count badge */}
          {cluster.jobs.length > 1 && (
            <div className="absolute top-[3px] right-[-4px] rounded-full w-[24px] h-[24px] grid place-items-center leading-none bg-white text-[11px]">
              {cluster.jobs.length > 9 ? "9+" : cluster.jobs.length}
            </div>
          )}
          {/* home icon svg */}
          <div
            style={{
              width: "50px",
              height: "50px",
              background:
                isHover === "pressed" ? "#C4D8F7" : cluster.CategoryColour,
              display: "grid",
              placeItems: "center",
              borderRadius: "999px",
            }}
            dangerouslySetInnerHTML={{ __html: cluster.icon }}>
            {/* <span ></span> */}
          </div>
        </button>
      </Marker>
    </>
  );
}

export default MapMarker;

{
  /* <Marker
              key={`job-${cluster.properties.jobId}`}
              latitude={cluster.latitude}
              longitude={cluster.longitude}
              onClick={() =>
                markerCenterHandler(cluster.latitude, cluster.longitude)
              }
              ref={markerRef}>
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
                {cluster.jobs.length > 1 && (
                  <div className="absolute top-[-10px] right-[-5px] rounded-full py-1 px-2 leading-none bg-white">
                    {cluster.jobs.length > 9 ? "9+" : cluster.jobs.length}
                  </div>
                )}
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
            </Marker> */
}