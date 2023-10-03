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
              width="63"
              height="62"
              viewBox="0 0 63 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="1.17578"
                y="0.5"
                width="61"
                height="61"
                rx="30.5"
                fill="#EAB308"
              />
              <g clip-path="url(#clip0_19_2353)">
                <path
                  d="M31.6758 21C29.0236 21 26.4801 22.0536 24.6047 23.9289C22.7293 25.8043 21.6758 28.3478 21.6758 31C21.6758 33.6522 22.7293 36.1957 24.6047 38.0711C26.4801 39.9464 29.0236 41 31.6758 41C34.3279 41 36.8715 39.9464 38.7468 38.0711C40.6222 36.1957 41.6758 33.6522 41.6758 31C41.6758 28.3478 40.6222 25.8043 38.7468 23.9289C36.8715 22.0536 34.3279 21 31.6758 21V21ZM36.262 35.4225C36.2194 35.4925 36.1633 35.5533 36.0971 35.6016C36.0309 35.6498 35.9558 35.6845 35.8761 35.7037C35.7964 35.7228 35.7138 35.7261 35.6328 35.7132C35.5519 35.7004 35.4743 35.6717 35.4045 35.6287C33.0558 34.195 30.1008 33.87 26.6195 34.6662C26.4582 34.703 26.2889 34.6743 26.1489 34.5862C26.0088 34.4982 25.9095 34.3582 25.8727 34.1969C25.8359 34.0356 25.8646 33.8663 25.9527 33.7262C26.0407 33.5862 26.1807 33.4868 26.342 33.45C30.152 32.58 33.4195 32.9538 36.0545 34.565C36.1955 34.6514 36.2965 34.7902 36.3354 34.9509C36.3743 35.1116 36.3479 35.2812 36.262 35.4225ZM37.4858 32.7C37.3775 32.8761 37.2037 33.0021 37.0026 33.0501C36.8015 33.0982 36.5895 33.0644 36.4133 32.9562C33.7258 31.305 29.6283 30.8263 26.4483 31.7913C26.2547 31.8372 26.0509 31.8077 25.8784 31.7085C25.7059 31.6094 25.5777 31.4482 25.52 31.2578C25.4623 31.0675 25.4794 30.8622 25.5678 30.684C25.6562 30.5058 25.8093 30.368 25.9958 30.2987C29.627 29.1975 34.142 29.7312 37.2283 31.6275C37.4046 31.7356 37.5308 31.9093 37.5791 32.1104C37.6274 32.3116 37.5938 32.5236 37.4858 32.7ZM37.5908 29.865C34.3683 27.95 29.0508 27.7737 25.9733 28.7075C25.7359 28.7794 25.4797 28.7541 25.261 28.6372C25.0423 28.5202 24.879 28.3211 24.807 28.0837C24.7351 27.8464 24.7604 27.5902 24.8774 27.3714C24.9943 27.1527 25.1934 26.9894 25.4308 26.9175C28.962 25.8463 34.8345 26.0525 38.5458 28.255C38.7593 28.3816 38.9137 28.5879 38.9751 28.8284C39.0366 29.0689 38.9999 29.324 38.8733 29.5375C38.7466 29.751 38.5404 29.9054 38.2999 29.9669C38.0593 30.0283 37.8043 29.9916 37.5908 29.865Z"
                  fill="white"
                />
              </g>
              <rect
                x="1.17578"
                y="0.5"
                width="61"
                height="61"
                rx="30.5"
                stroke="#EAB308"
              />
              <defs>
                <clipPath id="clip0_19_2353">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(21.6758 21)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Marker>
      </ReactMapGL>
    </>
  );
}

export default CompanyMap;