import React from 'react';
import { Send } from 'lucide-react';

const KarijeraCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto p-1 rounded-[50px] bg-gradient-to-r from-fuchsia-600 via-purple-600 to-amber-500 shadow-[0_0_80px_rgba(217,70,239,0.3)]">
        <div className="bg-[#050208] rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <Send size={40} className="text-fuchsia-500 mx-auto mb-8 animate-bounce" />
          <h2 className="text-4xl md:text-6xl text-white tracking-tighter mb-6 italic uppercase leading-none">
            POŠALJITE <br />
            <span className="text-fuchsia-500">BIOGRAFIJU</span>
          </h2>
          <p className="text-gray-400 text-lg font-light italic mb-10 max-w-2xl mx-auto lowercase font-sans leading-relaxed px-4">
            Ukoliko ne vidite odgovarajuću poziciju, pošaljite nam Vaš CV u bazu podataka. Mi uvijek tražimo pobjednike.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <button className="w-full sm:w-max px-14 py-5 bg-white text-black rounded-full font-black text-[11px] tracking-widest hover:bg-fuchsia-600 hover:text-white transition-all shadow-3xl uppercase">
              Pošalji Biografiju
            </button>
            <span className="text-[9px] text-gray-600 font-sans italic tracking-widest">
              HR tim će Vas kontaktirati u najkraćem roku.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KarijeraCTA;
