import React from 'react';

const PromoHero = ({ promo }) => {
  return (
    <section className="relative py-10 px-4 text-center z-10">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-500/30 px-6 py-2 rounded-full mb-8 backdrop-blur-md shadow-2xl">
        <span className="text-xs font-black tracking-[0.3em] text-white uppercase italic">{promo.tag}</span>
      </div>

      <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-none">
        {promo.title} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-pink-400 to-purple-400 animate-pulse">
          {promo.subtitle}
        </span>
      </h1>

      <p className="text-gray-400 max-w-2xl mx-auto italic font-light text-xl tracking-wide mb-16">
        {promo.desc}
      </p>

      <div className="max-w-4xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border border-fuchsia-500/20">
        <img src={promo.img} alt={promo.title} className="w-full h-96 object-cover" />
      </div>
    </section>
  );
};

export default PromoHero;
