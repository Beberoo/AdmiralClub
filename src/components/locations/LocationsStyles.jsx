import React from 'react';

const LocationsStyles = () => {
  return (
    <style>{`
      .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(217, 70, 239, 0.5);
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(217, 70, 239, 0.8);
      }

      .leaflet-tiles {
        filter: brightness(0.7) contrast(1.1) hue-rotate(-10deg);
      }

      .custom-marker-container {
        background: none !important;
        border: none !important;
      }

      .custom-marker {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 300ms ease;
      }

      .custom-marker.hovered {
        transform: scale(1.4);
      }

      .marker-glow {
        position: absolute;
        width: 40px;
        height: 40px;
        background: radial-gradient(circle, rgba(217, 70, 239, 0.3) 0%, rgba(217, 70, 239, 0) 100%);
        border-radius: 50%;
        filter: blur(15px);
        transition: all 300ms ease;
      }

      .custom-marker.hovered .marker-glow {
        width: 80px;
        height: 80px;
        background: radial-gradient(circle, rgba(217, 70, 239, 0.6) 0%, rgba(217, 70, 239, 0) 100%);
      }

      .marker-pin {
        position: relative;
        z-index: 10;
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, rgba(217, 70, 239, 0.8) 0%, rgba(168, 85, 247, 0.8) 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        box-shadow: 0 0 20px rgba(217, 70, 239, 0.4);
        border: 2px solid rgba(255, 255, 255, 0.3);
        transition: all 300ms ease;
      }

      .custom-marker.hovered .marker-pin {
        background: linear-gradient(135deg, rgba(217, 70, 239, 1) 0%, rgba(168, 85, 247, 1) 100%);
        box-shadow: 0 0 40px rgba(217, 70, 239, 0.8);
        border-color: rgba(255, 255, 255, 0.8);
      }

      .marker-pin svg {
        width: 20px;
        height: 20px;
      }

      .marker-label {
        position: absolute;
        bottom: -55px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.95);
        border: 1px solid rgba(217, 70, 239, 0.5);
        color: white;
        padding: 8px 12px;
        border-radius: 8px;
        white-space: nowrap;
        font-size: 12px;
        font-weight: 600;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transition: all 300ms ease;
        z-index: 100;
        font-family: inherit;
      }

      .marker-label span {
        display: block;
        font-size: 10px;
        color: rgba(217, 70, 239, 0.8);
        font-weight: 400;
        margin-top: 2px;
      }

      .custom-marker.hovered .marker-label {
        opacity: 1;
        visibility: visible;
        bottom: -65px;
      }

      .leaflet-container {
        background: linear-gradient(135deg, rgba(217, 70, 239, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
        font-family: inherit;
      }

      .leaflet-control-zoom {
        border: 1px solid rgba(217, 70, 239, 0.3) !important;
        border-radius: 8px !important;
        background: rgba(255, 255, 255, 0.95) !important;
      }

      .leaflet-control-zoom-in, .leaflet-control-zoom-out {
        color: rgba(217, 70, 239, 0.8) !important;
        font-weight: bold !important;
        border-bottom: 1px solid rgba(217, 70, 239, 0.2) !important;
      }

      .leaflet-control-zoom-in:hover, .leaflet-control-zoom-out:hover {
        background: rgba(217, 70, 239, 0.1) !important;
        color: rgba(217, 70, 239, 1) !important;
      }
    `}</style>
  );
};

export default LocationsStyles;
