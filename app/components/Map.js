import "leaflet/dist/leaflet.css";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";

const Map = (props) => {
  const position = [52.3676, 4.9041];

  return (
    <div className="relative bg-white flex items-center justify-center w-full overflow-hidden rounded-xl h-[400px] lg4:h-[500px]">
      {props.loading ? (
        <img src="/images/loading.svg" alt="loading" className="animate-spin" />
      ) : (
        <div className="leaflet-container">
          <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CircleMarker center={position}>
              <Popup>Hello World!</Popup>
            </CircleMarker>
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default Map;
