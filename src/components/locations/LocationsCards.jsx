import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import FeatureIcon from './FeatureIcon';

const LocationsCards = ({ clubs, hoveredClubId, setHoveredClubId, onCardClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4 max-h-[900px] overflow-y-auto pr-4 custom-scrollbar">
      {clubs.map((club) => (
        <div
          key={club.id}
          onClick={() => onCardClick(club.id)}
          onMouseEnter={() => setHoveredClubId(club.id)}
          onMouseLeave={() => setHoveredClubId(null)}
          className={`group relative bg-[#0a0510] border rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl cursor-pointer ${
            hoveredClubId === club.id
              ? 'border-fuchsia-400 shadow-fuchsia-900/40 -translate-y-2'
              : 'border-white/5 hover:border-fuchsia-500/30 shadow-fuchsia-900/20'
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-[10px] font-black tracking-widest text-fuchsia-500 uppercase">
                  {club.city}
                </span>
                <h3 className="text-sm font-bold text-white mt-1 group-hover:text-fuchsia-100 transition-colors line-clamp-2">
                  {club.name}
                </h3>
              </div>
              <div
                className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${
                  hoveredClubId === club.id ? 'bg-fuchsia-600/30' : 'bg-white/5'
                }`}
              >
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

            <div className="flex gap-1.5 flex-wrap">
              {club.features.map((feat) => (
                <div
                  key={feat}
                  className="p-1 bg-white/5 rounded-md border border-white/5 hover:border-white/10 transition-colors cursor-help group/feat relative"
                >
                  <FeatureIcon type={feat} />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-[9px] py-0.5 px-1.5 rounded opacity-0 group-hover/feat:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none uppercase tracking-tighter text-white">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-fuchsia-600/5 blur-3xl rounded-full group-hover:bg-fuchsia-600/10 transition-all"></div>
        </div>
      ))}
    </div>
  );
};

export default LocationsCards;
