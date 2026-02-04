import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix za Leaflet default ikone
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const LocationsMap = ({ clubs, hoveredClubId }) => {
  const mapRef = useRef(null);
  const map = useRef(null);
  const markersRef = useRef({});

  useEffect(() => {
    if (!mapRef.current) return;

    try {
      if (!map.current) {
        map.current = L.map(mapRef.current).setView([44.4, 20.2], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
          className: 'leaflet-tiles',
        }).addTo(map.current);
      }

      Object.values(markersRef.current).forEach((marker) => {
        if (marker && map.current) {
          map.current.removeLayer(marker);
        }
      });
      markersRef.current = {};

      clubs.forEach((club) => {
        const isHovered = hoveredClubId === club.id;

        const markerHTML = `
          <div class="custom-marker ${isHovered ? 'hovered' : ''}">
            <div class="marker-glow"></div>
            <div class="marker-pin">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="marker-label">${club.name}<br/><span>${club.city}</span></div>
          </div>
        `;

        const marker = L.marker([club.coordinates[0], club.coordinates[1]], {
          icon: L.divIcon({
            html: markerHTML,
            className: 'custom-marker-container',
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40],
          }),
        }).addTo(map.current);

        markersRef.current[club.id] = marker;
      });
    } catch (err) {
      console.error('Map error:', err);
    }
  }, [clubs, hoveredClubId]);

  return <div ref={mapRef} className="w-full h-full rounded-3xl overflow-hidden" />;
};

export default LocationsMap;
