import React from 'react';

const NewsHero = ({ news }) => {
  return (
    <section className="relative py-10 px-4 text-center z-10">
      <div className="inline-flex items-center gap-2 bg-linear-to-r from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-500/30 px-6 py-2 rounded-full mb-8 backdrop-blur-md shadow-2xl">
        <span className="text-xs font-black tracking-[0.3em] text-white uppercase italic">{news.category}</span>
      </div>

      <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-tight max-w-5xl mx-auto">
        Novi <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-300 via-pink-400 to-purple-400 animate-pulse">
          ČLANAK
        </span>
      </h1>

      <p className="text-2xl md:text-3xl text-white font-black tracking-wide mb-6 uppercase max-w-4xl mx-auto">
        {news.title}
      </p>

      <p className="text-gray-400 max-w-2xl mx-auto italic font-light text-lg tracking-wide mb-4">
        {news.desc}
      </p>

      <p className="text-gray-500 max-w-2xl mx-auto italic font-light text-sm tracking-widest mb-16 uppercase">
        {news.category} • {news.date} 
      </p>

      <div className="max-w-4xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border border-fuchsia-500/20">
        <img src={news.img} alt={news.title} className="w-full h-96 object-cover" />
      </div>
    </section>
  );
};

export default NewsHero;
