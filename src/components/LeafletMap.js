import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import '../assets/css/leaflet.override.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function LeafletMap() {
  return (
    <Map center={[47.5342, 19.07]} zoom="12" zoomControl={false}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[47.54154, 19.03426]}>
        <Popup>
          Óbudai Kultúrális Központ
        </Popup>
      </Marker>

      <Marker position={[47.59798, 19.05255]}>
        <Popup>
          Békásmegyeri Közösségi Ház
        </Popup>
      </Marker>
      
      <Marker position={[47.48967, 19.01836]}>
        <Popup>
          MOM Művelődési Központ
        </Popup>
      </Marker>
      
      <Marker position={[47.51262, 18.99469]}>
        <Popup>
          Virányosi Közösségi Ház és Szarvas Gábor Közösségi Tér
        </Popup>
      </Marker>

      <Marker position={[47.50055, 19.04011]}>
        <Popup>
          Budapest Művelődési Központ
        </Popup>
      </Marker>

      <Marker position={[47.48746, 19.07061]}>
        <Popup>
          Józsefvárosi Galéria és Rendezvényközpont
        </Popup>
      </Marker>

      <Marker position={[47.49992,19.06815]}>
        <Popup>
          VII. Kerületi Táncstudió
        </Popup>
      </Marker>

    </Map>
  )
}