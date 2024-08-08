"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Styles from "./map.module.css";

export default function Map() {
  useEffect(() => {
    const map = L.map("map").setView([-23.55052, -46.633308], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([-23.55052, -46.633308])
      .addTo(map)
      .bindPopup("Beer Masters")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      className={Styles.map}
      style={{ height: "400px", width: "100%" }}
    />
  );
}
