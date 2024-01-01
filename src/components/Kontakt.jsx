import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Kontakt.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Kontakt = () => {
  const position = [52.25185013428592, 15.925061870010026];

  const markerIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <>
      <div style={{ paddingTop: "200px" }}>
        <h1>Kontakt</h1>
        <p>
          Siedziba biura: ul. Przedmieście Św. Wojciech 21/1 64-360 Zbąszyń tel.
          kontaktowy: (68) 3847 543
        </p>
        <p>
          Dane adresowe: Siedziba firmy: „Keno-eko” sp.j. Jarosław Ciszewski,
          Marcin Pawelski ul. 17 Stycznia nr 9 64-360 Zbąszyń
          kenoekobiuro@gmail.com
        </p>
      </div>
      <MapContainer
        center={position}
        zoom={16}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>Keno-Eko</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Kontakt;
