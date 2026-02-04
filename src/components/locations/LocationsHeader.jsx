import React from 'react';
import { MapPin } from 'lucide-react';

const LocationsHeader = () => {
  return (
    <section className="relative py-20 px-4 text-center z-10">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-500/30 px-6 py-2 rounded-full mb-8 backdrop-blur-md shadow-2xl relative z-10">
        <MapPin className="text-fuchsia-400 animate-bounce" size={20} />
        <span className="text-xs font-black tracking-[0.3em] text-white uppercase italic">Nađi najbliži klub</span>
      </div>

      <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-none relative z-10">
        ADMIRAL <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-pink-400 to-purple-400 animate-pulse">
          LOKACIJE
        </span>
      </h1>

      <p className="text-gray-400 max-w-3xl mx-auto italic font-light text-xl tracking-wide mb-16 relative z-10">
        Pronađite Vama najbliži Admiral Club i uživajte u vrhunskoj atmosferi na preko 60 lokacija širom Srbije.
      </p>
    </section>
  );
};

export default LocationsHeader;
