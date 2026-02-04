import React from 'react';
import { X } from 'lucide-react';
import LocationsCards from './LocationsCards';
import LocationsMap from './LocationsMap';

const LocationsMapSection = ({ clubs, allClubs, hoveredClubId, setHoveredClubId }) => {
  return (
    <div className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 -right-40 w-full h-96 bg-fuchsia-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute bottom-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-0 -right-32 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 relative z-10">
        {clubs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <LocationsCards
                clubs={clubs}
                hoveredClubId={hoveredClubId}
                setHoveredClubId={setHoveredClubId}
              />
            </div>

            <div className="relative h-[900px] bg-[#11081a] rounded-3xl border border-white/5 overflow-hidden sticky top-32">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <LocationsMap clubs={allClubs} hoveredClubId={hoveredClubId} />

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
  );
};

export default LocationsMapSection;
