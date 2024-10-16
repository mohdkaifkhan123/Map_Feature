import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from 'react-dom/server';

const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-icon",
    html: renderToString(<FaMapMarkerAlt size={30} color="red" />),
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40],
  });
};

const Map = () => {
  const start = [19.0760, 72.8777];  
  const current = [-36.802237, 12.913736];  
  const end = [40.7128, -74.0060];  
  const journey = [start, current, end];

  useEffect(() => {
    document.body.style.height = "100vh";
    document.documentElement.style.height = "100vh";
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "100vh", width: "100vw" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={start} icon={createCustomIcon()} />
      <Marker position={current} icon={createCustomIcon()} />
      <Marker position={end} icon={createCustomIcon()} />

      <Polyline positions={journey} color="blue" />
    </MapContainer>
  );
};

export default Map;
