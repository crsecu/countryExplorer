import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useCountries } from "../hooks/useCountries";
import { ChangeCenterProps } from "../types";

function MapSection(): React.JSX.Element {
  const { countryDetailsData } = useCountries();
  const [mapPosition, setMapPosition] = useState<[number, number]>([40, 0]);

  useEffect(
    function () {
      if (countryDetailsData?.latlng) setMapPosition(countryDetailsData.latlng);
    },
    [countryDetailsData?.latlng]
  );

  console.log("position", mapPosition);

  if (!countryDetailsData) return <p>Loading Map 123...</p>;

  return (
    <div className="mapSection">
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

// Custom component to change the center of a Leaflet map
function ChangeCenter({ position }: ChangeCenterProps) {
  // useMap is a hook provided by Leaflet to access the current map instance
  const map = useMap();
  map.setView(position);

  return null;
}

export default MapSection;
