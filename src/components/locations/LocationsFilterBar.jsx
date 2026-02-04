import React from 'react';
import { MapPin, Search, ChevronDown } from 'lucide-react';

const LocationsFilterBar = ({
  activeCity,
  setActiveCity,
  isDropdownOpen,
  setIsDropdownOpen,
  cities,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="sticky top-20 z-40 bg-[#050208]/90 backdrop-blur-md border-y border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-72" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-3.5 text-xs font-bold tracking-widest text-white hover:border-fuchsia-500/50 transition-all shadow-lg"
          >
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-fuchsia-500" />
              <span>GRAD: {activeCity.toUpperCase()}</span>
            </div>
            <ChevronDown
              size={16}
              className={`text-gray-500 transition-transform duration-300 ${
                isDropdownOpen ? 'rotate-180 text-fuchsia-400' : ''
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-[#0a0510] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl">
              {cities.map((city) => (
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
                  {activeCity === city && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
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
  );
};

export default LocationsFilterBar;
