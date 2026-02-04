import React from 'react';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const KarijeraCTA = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10 mb-20">
      <div className="p-1 rounded-[40px] bg-gradient-to-r from-amber-500 via-fuchsia-600 to-cyan-500">
        <div className="bg-[#050208] rounded-[38px] p-12 md:p-20">
          <Send size={40} className="text-fuchsia-500 mx-auto mb-8 animate-bounce" />
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
            POŠALJITE <br />
            <span className="text-fuchsia-500">BIOGRAFIJU</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 font-light italic">
            Ukoliko ne vidite odgovarajuću poziciju, pošaljite nam Vaš CV u bazu podataka. Mi uvijek tražimo pobjednike.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <Link
              to="/"
              className="w-full sm:w-max px-12 py-5 bg-fuchsia-700 text-white font-black text-sm tracking-[0.4em] rounded-full shadow-md hover:bg-fuchsia-800 hover:text-white transition-all uppercase focus:outline-none"
            >
              Pošalji Biografiju
            </Link>
            <span className="text-[9px] text-gray-600 font-sans italic tracking-widest">
              HR tim će Vas kontaktirati u najkraćem roku.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KarijeraCTA;
