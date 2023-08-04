import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from "react";
import ReactMapGL from "react-map-gl";

const MapBoxGL = () => {
  const mapRef = useRef(null);

  return (
    <div className="relative bg-white flex items-center justify-center w-full overflow-hidden rounded-xl h-[400px] lg4:h-[500px]">
      <ReactMapGL
        //   mapLib={import("mapbox-gl")} 52.3676, 4.9041
        initialViewState={{
          longitude: 52.3676,
          latitude: 4.9041,
          zoom: 3.5,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        ref={(instance) => (mapRef.current = instance)}
      />
    </div>
  );
};

export default MapBoxGL;
