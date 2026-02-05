import React from 'react';
import { Sparkles } from 'lucide-react';

const PromocijeNewsletter = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10 mb-20 mt-32">
      <div className="p-1 rounded-[40px] bg-gradient-to-r from-amber-500 via-fuchsia-600 to-cyan-500">
        <div className="bg-[#050208] rounded-[38px] p-12 md:p-20">
          <Sparkles className="text-fuchsia-400 mx-auto mb-8 animate-pulse" size={40} />
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
            NE PROPUSTITE <br />
            <span className="text-fuchsia-500">NI JEDAN BONUS</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 font-light italic">
            Prijavite se na naš newsletter i budite prvi koji saznaju za nove bonuse i ekskluzivne turnire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="vaša email adresa..."
              className="w-full sm:w-[400px] px-10 py-6 bg-white/5 border-2 border-white/10 rounded-full text-white font-black placeholder:text-gray-600 focus:outline-none focus:border-fuchsia-500 transition-all"
            />
            <button
              className="w-full sm:w-max px-12 py-5 bg-fuchsia-700 text-white font-black text-sm tracking-[0.4em] rounded-full shadow-md hover:bg-fuchsia-800 hover:text-white transition-all uppercase focus:outline-none"
            >
              PRIJAVI SE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromocijeNewsletter;
