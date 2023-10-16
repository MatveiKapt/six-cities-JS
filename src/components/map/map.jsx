import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {offers, activeItem} = props;
  const mapRef = useRef(null);
  const [mapSettings, setMapSettings] = useState(null);
  const [firstItem = {}] = offers;

  useEffect(() => {
    const coordinates = firstItem.coordinates;
    const ZOOM = 10;

    const settings = leaflet.map(mapRef.current, {
      center: {
        lat: coordinates[0],
        lng: coordinates[1],
      },
      zoom: ZOOM,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(settings);

    setMapSettings(settings);

    return () => {
      mapRef.current.remove();
    };
  }, [mapRef, firstItem, setMapSettings]);

  useEffect(() => {
    if (mapSettings) {
      offers.forEach((item) => {
        const isActive = activeItem ? item.id === activeItem.id : false;
        const coordinates = item.coordinates;
        const customIcon = leaflet.icon({
          iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
          iconSize: [27, 39]
        });

        leaflet.marker({
          lat: coordinates[0],
          lng: coordinates[1],
        },
        {
          icon: customIcon
        })
        .addTo(mapSettings)
        .bindPopup(firstItem.city);
      });
    }
  }, [offers, activeItem, mapSettings]);

  return (
    <div style={{height: `100%`}} ref={mapRef}/>
  );
};

Map.propTypes = {
  offers: PropTypes.array,
  activeItem: PropTypes.object,
};

export default Map;
