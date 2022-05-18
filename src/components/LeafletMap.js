import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/css/leaflet.override.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

export default function LeafletMap(props) {
  const [mapProperty, setPosition] = useState({
    position: [47.5342, 19.07],
    zoom: 12,
  });

  return (
    <Map
      center={props.props.position || mapProperty.position}
      zoom={props.props.zoom || mapProperty.zoom}
      zoomControl={false}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[47.54154, 19.03426]}
        onclick={() =>
          setPosition({ position: [47.54154, 19.03426], zoom: 18 })
        }
      >
        <Popup>Óbudai Kulturális Központ</Popup>
      </Marker>

      <Marker
        position={[47.59798, 19.05255]}
        onclick={() =>
          setPosition({ position: [47.59798, 19.05255], zoom: 18 })
        }
      >
        <Popup>Békásmegyeri Közösségi Ház</Popup>
      </Marker>

      <Marker
        position={[47.48967, 19.01836]}
        onclick={() =>
          setPosition({ position: [47.48967, 19.01836], zoom: 18 })
        }
      >
        <Popup>MOM Kulturális Központ</Popup>
      </Marker>

      <Marker
        position={[47.51262, 18.99469]}
        onclick={() =>
          setPosition({ position: [47.51262, 18.99469], zoom: 18 })
        }
      >
        <Popup>Virányosi Közösségi Ház és Szarvas Gábor Közösségi Tér</Popup>
      </Marker>

      <Marker
        position={[47.48746, 19.07061]}
        onclick={() =>
          setPosition({ position: [47.48746, 19.07061], zoom: 18 })
        }
      >
        <Popup>Józsefvárosi Galéria és Rendezvényközpont</Popup>
      </Marker>

      <Marker
        position={[47.49992, 19.06815]}
        onclick={() =>
          setPosition({ position: [47.49992, 19.06815], zoom: 18 })
        }
      >
        <Popup>VII. Kerületi Táncstudió</Popup>
      </Marker>
    </Map>
  );
}
