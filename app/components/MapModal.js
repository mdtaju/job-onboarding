"use client"
import { useState, useEffect } from 'react'
import { CircleMarker, MapContainer, TileLayer, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapModal = (props) => {
  const [showButton, setShowButton] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY
      setShowButton(currentScrollPos < scrollPos)
      setScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPos])

  function closeModal() {
    props.setModal(false)
  }

  const position = [52.3676, 4.9041]

  return (
    <>
     
        {
          props.modal === false ?
      /* Show map button starts */
            <button
            onClick={() => {props.setModal(true)}}
            className={`shadow-lg fixed bottom-5 left-1/2 -translate-x-1/2 items-center justify-center gap-3 bg-black whitespace-nowrap text-white w-[160px] h-[50px] rounded-full text-[15px] transition z-30 ${props.modal === false ? "flex lg4:hidden" : "hidden"} ${showButton === true ? "" : "translate-y-[calc(100%+20px)]"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/></svg>
            Show Map
          </button>

        :

      /* Show Listing button starts */
          <button
          onClick={closeModal}
          className={`shadow-lg fixed bottom-5 left-1/2 -translate-x-1/2 items-center justify-center gap-3 bg-black whitespace-nowrap text-white w-[160px] h-[50px] rounded-full text-[15px] transition z-30 ${props.modal === true ? "flex lg4:hidden" : "hidden"} ${showButton === true ? "" : "translate-y-[calc(100%+20px)]"}`}
         >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/><path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z"/></svg>
          Show Listing
        </button>
      
        }
    

      <div className={`w-full overflow-hidden rounded-xl h-[400px] z-50 ${props.modal === true ? "flex lg4:hidden" : "hidden"}`}>
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

               
                  </div>
    </>
  )
}

export default MapModal