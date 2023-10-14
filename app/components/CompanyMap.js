import maplibregl from "maplibre-gl";
import { useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl/maplibre";

function CompanyMap() {
  const [viewPort, setViewPort] = useState({
    latitude: 51.9198816454355,
    longitude: 4.478242294834028,
    zoom: 10,
  });
  const mapRef = useRef(null);
  return (
    <>
      <ReactMapGL
        {...viewPort}
        onMove={(e) => setViewPort(e.viewState)}
        style={{ width: "100%", height: "100%" }}
        cursor="grab"
        mapStyle={`https://api.maptiler.com/maps/basic/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_TOKEN}`}
        ref={(instance) => (mapRef.current = instance)}
        mapLib={maplibregl}>
        {/* 51.92617732972151, 4.4784539812634465 */}
        <Marker latitude={51.9198816454355} longitude={4.478242294834028}>
          <button>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="25" fill="#37D2A4" />
              <path
                d="M32.3635 16.7596V28.4499H30.7535V21.7249H27.8117V15H20.74V21.7249H17.7982V28.4499H15V32.5405H16.6145C16.5988 32.6629 16.5902 32.7888 16.5902 32.9175C16.5902 34.0658 17.241 35 18.041 35C18.841 35 19.4918 34.0657 19.4918 32.9175C19.4918 32.7887 19.4832 32.6629 19.4675 32.5405H29.084C29.0683 32.6629 29.0597 32.7888 29.0597 32.9175C29.0597 34.0658 29.7105 35 30.5105 35C31.3105 35 31.9613 34.0657 31.9613 32.9175C31.9613 32.7887 31.9527 32.6629 31.937 32.5405H33.5515V29.3027V28.4499V18.4651H35V16.7596C35.0001 16.7596 32.3635 16.7596 32.3635 16.7596ZM27.8117 25.1385V23.4305H29.5653V28.4499H24.8699V23.4305H26.6235V25.1385H27.8117ZM21.9282 16.7056H23.6817V18.4136H24.8699V16.7056H26.6235V21.725H24.8699H23.6817H21.9282V16.7056ZM18.9864 23.4305H20.74V25.1386H21.9282V23.4305H23.6818V28.45H18.9864V23.4305ZM18.0411 33.2945C17.8962 33.2945 17.7785 33.1254 17.7785 32.9175C17.7785 32.7096 17.8963 32.5405 18.0411 32.5405C18.1859 32.5405 18.3037 32.7096 18.3037 32.9175C18.3037 33.1254 18.1859 33.2945 18.0411 33.2945ZM30.5106 33.2945C30.3658 33.2945 30.248 33.1254 30.248 32.9175C30.248 32.7096 30.3658 32.5405 30.5106 32.5405C30.6555 32.5405 30.7733 32.7096 30.7733 32.9175C30.7733 33.1254 30.6555 33.2945 30.5106 33.2945ZM32.3635 30.835H16.1882V30.1555H17.7982H23.6818H24.8699H30.7535H32.3635V30.835Z"
                fill="white"
              />
            </svg>
          </button>
        </Marker>
      </ReactMapGL>
    </>
  );
}

export default CompanyMap;
