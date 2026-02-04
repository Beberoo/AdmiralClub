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

const LocationsMap = ({ clubs, hoveredClubId, selectedClubId }) => {
  const mapRef = useRef(null);
  const map = useRef(null);
  const markersRef = useRef({});

  // Animiraj zoom kada je klub selektovan
  useEffect(() => {
    if (selectedClubId && map.current) {
      const selectedClub = clubs.find(club => club.id === selectedClubId);
      if (selectedClub) {
        map.current.flyTo(selectedClub.coordinates, 15, {
          duration: 1.5,
          easeLinearity: 0.25
        });
        
        // Otvori popup za selektovani klub
        setTimeout(() => {
          const marker = markersRef.current[selectedClubId];
          if (marker) {
            marker.openPopup();
          }
        }, 1500);
      }
    }
  }, [selectedClubId, clubs]);

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

        // Kreiraj popup sa slikom i informacijama
        const popupContent = `
          <div style="min-width: 280px; font-family: system-ui;">
            <img src="${club.image}" alt="${club.name}" 
                 style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;" />
            <div style="padding: 0 4px;">
              <div style="font-size: 10px; color: #d946ef; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">
                ${club.city}
              </div>
              <h3 style="font-size: 16px; font-weight: 700; color: #fff; margin: 0 0 12px 0;">
                ${club.name}
              </h3>
              <div style="display: flex; align-items: start; gap: 8px; margin-bottom: 8px; color: #9ca3af; font-size: 12px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="min-width: 14px; margin-top: 2px;">
                  <path d="M3 11l19-9-9 19-2-8-8-2z"></path>
                </svg>
                <span>${club.address}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; color: #9ca3af; font-size: 12px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="min-width: 14px;">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>${club.hours}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; color: #9ca3af; font-size: 12px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="min-width: 14px;">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>${club.phone}</span>
              </div>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 300,
          className: 'custom-popup'
        });

        markersRef.current[club.id] = marker;
      });
    } catch (err) {
      console.error('Map error:', err);
    }
  }, [clubs, hoveredClubId]);

  return <div ref={mapRef} className="w-full h-full rounded-3xl overflow-hidden" />;
};

export default LocationsMap;
