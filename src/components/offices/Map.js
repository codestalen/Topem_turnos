import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "../../App.css";

const Map = ({ selectSede }) => {
  const [ubicacion, setUbicacion] = useState({
    latitud: 6.250411,
    longitud: -75.588445,
  });

  useEffect(() => {
    if (selectSede === "Sede 1") {
      setUbicacion({
        latitud: 6.250411,
        longitud: -75.588445,
      });
    }

    if (selectSede === "Sede 2") {
      setUbicacion({
        latitud: 6.241197,
        longitud: -75.587569,
      });
    }
  }, [selectSede]);

  return (
    <MapContainer
      center={[ubicacion.latitud, ubicacion.longitud]}
      zoom={14}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ubicacion.latitud, ubicacion.longitud]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
