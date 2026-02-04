import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoRelated = ({ allPromos, currentPromoId }) => {
  const related = allPromos.filter(p => p.id !== currentPromoId).slice(0, 3);

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-black text-white tracking-tighter">
            DRUGE <span className="text-fuchsia-500">PROMOCIJE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((promo) => (
            <div key={promo.id} className="group relative h-80 rounded-[30px] overflow-hidden border-2 border-white/10 shadow-2xl hover:border-fuchsia-500/30 transition-all">
              <img
                src={promo.img}
                alt={promo.title}
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-fuchsia-600 text-white text-[9px] rounded-full shadow-[0_0_20px_#d946ef]">
                  {promo.tag}
                </span>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-xl font-black text-white mb-2 italic leading-tight group-hover:tracking-wider transition-all uppercase">
                  {promo.title}
                </h3>
                <p className="text-fuchsia-400 text-sm mb-6 tracking-wide">{promo.subtitle}</p>
                <button className="flex items-center gap-2 text-[9px] font-black text-white hover:text-fuchsia-500 transition-colors group/btn uppercase whitespace-nowrap">
                  PROČITAJ{' '}
                  <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoRelated;
