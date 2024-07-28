import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = () => {
  // Your location coordinates
  const position = [26.249449366949783, 78.16994892140436];

  // Function to open location in a new tab when marker is clicked
  const openLocationInNewTab = () => {
    const lat = position[0];
    const lon = position[1];
    window.open(`https://www.google.com/maps?q=${lat},${lon}`, "_blank");
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        display: "flex",
        height: "400px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 1.0)",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <a
        href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Marker position={position} onClick={openLocationInNewTab}>
          <Popup>Your Location</Popup>
        </Marker>
      </a>
    </MapContainer>
  );
};

export default MapComponent;
