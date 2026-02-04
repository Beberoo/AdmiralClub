import React from 'react';
import { Link } from 'react-router-dom';

const JackpotsCTA = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10 mb-20">
      <div className="p-1 rounded-[40px] bg-gradient-to-r from-amber-500 via-fuchsia-600 to-cyan-500">
        <div className="bg-[#050208] rounded-[38px] p-12 md:p-20">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
            ČEKAŠ <span className="text-fuchsia-500">SREĆU</span>? <br />
            ONA ČEKA <span className="text-amber-400">TEBE!</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 font-light italic">
            Najveće isplate u regionu. Isplata odmah, bez poreza na sreću. Dođi i uzmi ono što ti pripada.
          </p>
          <Link to="/" className="inline-block px-12 py-5 bg-white text-black font-black text-sm tracking-[0.4em] rounded-full hover:bg-fuchsia-500 hover:text-white transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-fuchsia-500/50 uppercase scale-110">
            NAĐI NAJBLIŽI KLUB I POBEDI
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JackpotsCTA;
