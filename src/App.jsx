import { Fragment, useState } from "react";
import {GoogleMap, InfoWindowF, MarkerF, useLoadScript,} from "@react-google-maps/api";

  import "./App.css";

  const markers = [
{
id: 1,
name: "Sonora",
position: { lat: 29.0729673, lng: -110.9559192 }
},
{
id: 2,
name: "Ciudad de México",
position: { lat: 19.4326, lng: -99.1332 }
},
{
 id: 3,
 name: "Sinaloa",
position: { lat: 25.1721, lng: -107.4795 }
}
];
function App() {
const { isLoaded } = useLoadScript({
 googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY
});

const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
  if (marker === activeMarker) {
   return;
    }
  setActiveMarker(marker);
  };

  return (
   <Fragment>
  <div className="container">
   <h1 className="text-center">Vite + React | Google Map Markers</h1>
 <div style={{ height: "90vh", width: "100%" }}>
  {isLoaded ? (
   <GoogleMap
  center={{ lat: 40.3947365, lng: 49.6898045 }}
  zoom={10}
  onClick={() => setActiveMarker(null)}
 mapContainerStyle={{ width: "100%", height: "90vh" }}
 >
{markers.map(({ id, name, position }) => (
<MarkerF
 key={id}
position={position}
onClick={() => handleActiveMarker(id)} 
icon={{
url: "https://freepngimg.com/thumb/map/66946-map-google-maker-pin-maps-download-hq-png.png",
scaledSize: {width: 50, height:50}

}}
>
{activeMarker === id ? (
<InfoWindowF onCloseClick={() => setActiveMarker(null)}>
  <div>
  <p>{name}</p>
   </div>
  </InfoWindowF>
  ) : null}
   </MarkerF>
  ))}
  </GoogleMap>
 ) : null}
      
    </div>
    </div>
    </Fragment>
  )
}
export default App;
