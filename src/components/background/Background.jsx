import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";

const Background = ({ viewState, setViewState, ipAddressData }) => {
  const API_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

  if (!ipAddressData || !ipAddressData.latitude || !ipAddressData.longitude) return 
  
  return (
    <section className="min-h-[900px] h-screen grid grid-rows-3 absolute w-full z-10">
      <img className="w-full h-full sm:block hidden" src="images/pattern-bg-desktop.png" alt="background-pattern" />
      <img className="w-full h-full sm:hidden block" src="images/pattern-bg-mobile.png" alt="background-pattern" />
      <div className="h-full row-span-2">
        <Map
          {...viewState}
          mapboxAccessToken={API_TOKEN}
          style={{
            width: "100%",
            height: "100%",
            cursor: "default"
          }}
          className="cursor-default"
          scrollZoom={true}
          onMove={evt => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/kryptonix/clk88b3xg00l301pfh6gdehrp"
        >
          <Marker longitude={ipAddressData.longitude} latitude={ipAddressData.latitude}>
            <img src="images/icon-location.svg" alt="location marker" />
          </Marker>
          <NavigationControl position="bottom-right" />
          <FullscreenControl />
          <GeolocateControl />
        </Map>
      </div>
    </section>
  )
}

export default Background