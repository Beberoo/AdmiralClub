import React from 'react';

const LocationsHeader = () => {
  return (
    <div className="relative py-40 px-4 overflow-hidden mt-16">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/10 blur-3xl rounded-full" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-xl mb-6">
          <span className="text-white">ADMIRAL</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-500">
            LOKACIJE
          </span>
        </h1>
        <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl px-6 py-4 w-full max-w-2xl mx-auto shadow-lg shadow-black/10 mb-4">
          <p className="text-center text-gray-400 text-lg md:text-2xl italic font-light tracking-wide leading-relaxed drop-shadow-sm">
            Pronađite Vama najbliži Admiral Club i uživajte u vrhunskoj atmosferi na preko 60 lokacija širom Srbije.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationsHeader;
