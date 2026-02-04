import React from 'react';
import { Zap } from 'lucide-react';

const PromocijeCards = ({ activePromos }) => {
  const isScrollable = activePromos.length > 3;

  return (
    <div className="mb-40">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <Zap className="text-fuchsia-500" size={32} />
          <h2 className="text-4xl font-black text-white tracking-tighter">
            AKTIVNE <span className="text-fuchsia-500">PROMOCIJE</span>
          </h2>
        </div>
        {isScrollable && (
          <div className="hidden md:flex gap-2">
            <div className="p-3 bg-white/5 rounded-full text-gray-500 border border-white/10 italic text-[10px] tracking-widest uppercase">
              Povuci za više
            </div>
          </div>
        )}
      </div>

      <div className={`${isScrollable ? 'flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory custom-scrollbar' : 'grid grid-cols-1 lg:grid-cols-3 gap-8'}`}>
        {activePromos.map((promo) => {
          const Icon = promo.icon;
          return (
            <div
              key={promo.id}
              className={`group relative h-[500px] rounded-[40px] overflow-hidden border-2 border-white/10 shadow-3xl transition-all duration-500 hover:border-fuchsia-500/40 snap-center ${isScrollable ? 'min-w-full md:min-w-[calc(50%-16px)] flex-shrink-0' : ''}`}
            >
              <img
                src={promo.img}
                alt=""
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[3000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute top-10 right-10">
                <span className="px-6 py-2 bg-fuchsia-600 text-white text-[10px] rounded-full shadow-[0_0_20px_#d946ef]">
                  {promo.tag}
                </span>
              </div>

              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 italic leading-tight group-hover:tracking-wider transition-all">
                  {promo.title}
                </h3>
                <p className="text-fuchsia-400 text-lg md:text-xl mb-8 tracking-widest">{promo.subtitle}</p>
                <button className="w-full md:w-max px-12 py-4 bg-white text-black rounded-3xl text-[10px] font-black tracking-widest hover:bg-fuchsia-500 hover:text-white transition-all shadow-2xl uppercase">
                  Saznaj više
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #d946ef, #7e22ce);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default PromocijeCards;
