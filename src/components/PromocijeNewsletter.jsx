import React from 'react';
import { Sparkles } from 'lucide-react';

const PromocijeNewsletter = () => {
  return (
    <div className="mt-40 p-1 rounded-[40px] bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 shadow-3xl">
      <div className="bg-[#050208] rounded-[38px] p-20 text-center relative overflow-hidden">
        <Sparkles className="text-fuchsia-400 mx-auto mb-10 animate-pulse" size={48} />
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 italic uppercase leading-tight">
          NE PROPUSTITE <br />
          <span className="text-fuchsia-500">NI JEDAN BONUS</span>
        </h2>
        <p className="text-gray-400 text-xl font-light italic mb-12 max-w-2xl mx-auto lowercase font-sans">
          Prijavite se na naš newsletter i budite prvi koji saznaju za nove bonuse i ekskluzivne turnire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="vaša email adresa..."
            className="w-full sm:w-[400px] px-10 py-6 bg-white/5 border-2 border-white/10 rounded-full text-white font-black placeholder:text-gray-600 focus:outline-none focus:border-fuchsia-500 transition-all"
          />
          <button className="w-full sm:w-max px-16 py-6 bg-white text-black rounded-full font-black text-[12px] tracking-widest hover:bg-fuchsia-500 hover:text-white transition-all shadow-2xl uppercase">
            PRIJAVI SE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromocijeNewsletter;
