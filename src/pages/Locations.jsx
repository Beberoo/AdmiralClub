import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  MapPin, Navigation, Search, Clock, Phone, Car, Wifi, Beer, Gem, ChevronDown, X
} from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix za Leaflet default ikone
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// --- MOCK DATA ZA KLUBOVE ---
const CLUBS_DATA = [
  {
    id: 1,
    city: 'Beograd',
    name: 'Admiral Club Centar',
    address: 'Žorža Klemansoa 12',
    phone: '+381 11 123 456',
    hours: '00:00 - 24:00',
    features: ['bar', 'parking', 'wifi', 'jackpot'],
    coordinates: [44.823, 20.465]
  },
  {
    id: 2,
    city: 'Beograd',
    name: 'Admiral Club NBG',
    address: 'Bulevar Umetnosti 4',
    phone: '+381 11 987 654',
    hours: '00:00 - 24:00',
    features: ['bar', 'wifi', 'jackpot'],
    coordinates: [44.815, 20.425]
  },
  {
    id: 3,
    city: 'Novi Sad',
    name: 'Admiral Club SPENS',
    address: 'Sutjeska 2',
    phone: '+381 21 555 333',
    hours: '00:00 - 24:00',
    features: ['bar', 'parking', 'wifi', 'jackpot'],
    coordinates: [45.248, 19.845]
  },
  {
    id: 4,
    city: 'Niš',
    name: 'Admiral Club Niš',
    address: 'Trg Kralja Milana 1',
    phone: '+381 18 222 111',
    hours: '00:00 - 24:00',
    features: ['bar', 'wifi', 'jackpot'],
    coordinates: [43.321, 21.895]
  },
  {
    id: 5,
    city: 'Kragujevac',
    name: 'Admiral Club KG',
    address: 'Kralja Petra I 22',
    phone: '+381 34 444 555',
    hours: '08:00 - 04:00',
    features: ['bar', 'parking', 'jackpot'],
    coordinates: [44.012, 20.916]
  }
];

// --- LEAFLET MAPA KOMPONENTA ---
const MapComponent = ({ hoveredClubId }) => {
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
          className: 'leaflet-tiles'
        }).addTo(map.current);
      }

      Object.values(markersRef.current).forEach(marker => {
        if (marker && map.current) {
          map.current.removeLayer(marker);
        }
      });
      markersRef.current = {};

      CLUBS_DATA.forEach((club) => {
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
            popupAnchor: [0, -40]
          })
        }).addTo(map.current);

        markersRef.current[club.id] = marker;
      });
    } catch (err) {
      console.error('Map error:', err);
    }
  }, [hoveredClubId]);

  return <div ref={mapRef} className="w-full h-full rounded-3xl overflow-hidden" />;
};

const FeatureIcon = ({ type }) => {
  switch (type) {
    case 'bar': return <Beer size={14} className="text-amber-400" />;
    case 'parking': return <Car size={14} className="text-blue-400" />;
    case 'wifi': return <Wifi size={14} className="text-cyan-400" />;
    case 'jackpot': return <Gem size={14} className="text-fuchsia-400" />;
    default: return null;
  }
};

const Locations = () => {
  const [activeCity, setActiveCity] = useState('Sve');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredClubId, setHoveredClubId] = useState(null);
  const cities = ['Sve', 'Beograd', 'Novi Sad', 'Niš', 'Kragujevac'];

  const filteredClubs = useMemo(() => {
    return CLUBS_DATA.filter(club => {
      const matchesCity = activeCity === 'Sve' || club.city === activeCity;
      const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           club.address.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCity && matchesSearch;
    });
  }, [activeCity, searchTerm]);

  useEffect(() => {
    const handleClickOutside = () => setIsDropdownOpen(false);
    if (isDropdownOpen) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  const clubsToShow = filteredClubs.length > 0 ? filteredClubs : CLUBS_DATA;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="relative py-40 px-4 overflow-hidden mt-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/10 blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-xl mb-6">
            <span className="text-white">ADMIRAL</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-500">LOKACIJE</span>
          </h1>
          <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl px-6 py-4 w-full max-w-2xl mx-auto shadow-lg shadow-black/10 mb-4">
            <p className="text-center text-gray-400 text-lg md:text-2xl italic font-light tracking-wide leading-relaxed drop-shadow-sm">
              Pronađite Vama najbliži Admiral Club i uživajte u vrhunskoj atmosferi na preko 60 lokacija širom Srbije.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-[#050208]/90 backdrop-blur-md border-y border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Custom Dropdown for City Selection */}
          <div className="relative w-full md:w-72" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-3.5 text-xs font-bold tracking-widest text-white hover:border-fuchsia-500/50 transition-all shadow-lg"
            >
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-fuchsia-500" />
                <span>GRAD: {activeCity.toUpperCase()}</span>
              </div>
              <ChevronDown size={16} className={`text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-fuchsia-400' : ''}`} />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full mt-2 bg-[#0a0510] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl">
                {cities.map(city => (
                  <button
                    key={city}
                    onClick={() => {
                      setActiveCity(city);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-6 py-4 text-xs font-bold tracking-widest transition-all flex items-center justify-between group ${
                      activeCity === city 
                        ? 'bg-fuchsia-600 text-white shadow-inner shadow-fuchsia-900/50' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{city.toUpperCase()}</span>
                    {activeCity === city && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-full md:w-80">
            <input 
              type="text"
              placeholder="Pretraži lokaciju..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors shadow-lg placeholder:text-gray-600"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>
      </div>

      {/* Clubs & Map Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        {/* Glowing Orbs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -right-40 w-full h-96 bg-fuchsia-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 -right-32 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-12 relative z-10">
          {clubsToShow.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Cards Column */}
              <div>
                <div className="grid grid-cols-2 gap-4 max-h-[900px] overflow-y-auto pr-4 custom-scrollbar">
                  {clubsToShow.map((club) => (
                    <div 
                      key={club.id} 
                      onMouseEnter={() => setHoveredClubId(club.id)}
                      onMouseLeave={() => setHoveredClubId(null)}
                      className={`group relative bg-[#0a0510] border rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl cursor-pointer ${
                        hoveredClubId === club.id 
                          ? 'border-fuchsia-400 shadow-fuchsia-900/40 -translate-y-2' 
                          : 'border-white/5 hover:border-fuchsia-500/30 shadow-fuchsia-900/20'
                      }`}
                    >
                      {/* Visual Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Card Content */}
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <span className="text-[10px] font-black tracking-widest text-fuchsia-500 uppercase">{club.city}</span>
                            <h3 className="text-sm font-bold text-white mt-1 group-hover:text-fuchsia-100 transition-colors line-clamp-2">{club.name}</h3>
                          </div>
                          <div className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${
                            hoveredClubId === club.id 
                              ? 'bg-fuchsia-600/30' 
                              : 'bg-white/5'
                          }`}>
                            <MapPin size={14} className="text-fuchsia-400" />
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-1.5 text-gray-400 group-hover:text-gray-300">
                            <Navigation size={10} className="text-fuchsia-500/50 mt-0.5 flex-shrink-0" />
                            <span className="text-[10px] font-light line-clamp-1">{club.address}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-gray-300">
                            <Clock size={10} className="text-fuchsia-500/50 flex-shrink-0" />
                            <span className="text-[10px] font-light">{club.hours}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-gray-300">
                            <Phone size={10} className="text-fuchsia-500/50 flex-shrink-0" />
                            <span className="text-[10px] font-light">{club.phone}</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="flex gap-1.5 flex-wrap">
                          {club.features.map(feat => (
                            <div key={feat} className="p-1 bg-white/5 rounded-md border border-white/5 hover:border-white/10 transition-colors cursor-help group/feat relative">
                              <FeatureIcon type={feat} />
                              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-[9px] py-0.5 px-1.5 rounded opacity-0 group-hover/feat:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none uppercase tracking-tighter text-white">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Background Decor */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-fuchsia-600/5 blur-3xl rounded-full group-hover:bg-fuchsia-600/10 transition-all"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Column */}
              <div className="relative h-[900px] bg-[#11081a] rounded-3xl border border-white/5 overflow-hidden sticky top-32">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <MapComponent hoveredClubId={hoveredClubId} />
                
                {/* Info Box */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl text-center z-10">
                  <h4 className="text-white font-bold tracking-widest uppercase text-xs">Sve lokacije</h4>
                  <p className="text-gray-500 text-[10px] mt-1">Hoveraj karticu za pin na mapi</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-40 border border-dashed border-white/10 rounded-3xl">
              <X size={48} className="mx-auto text-gray-700 mb-4" />
              <h3 className="text-white text-xl font-bold">Nema rezultata</h3>
              <p className="text-gray-500 mt-2">Pokušajte sa drugim kriterijumima pretrage.</p>
            </div>
          )}
        </div>
      </div>

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

        /* Leaflet Styles */
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
    </>
  );
};

export default Locations;
