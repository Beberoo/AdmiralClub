import React from 'react';
import { Newspaper, Calendar, Clock, ArrowUpRight, Share2, Heart } from 'lucide-react';

const PromocijeNews = ({ newsItems }) => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-12">
        <Newspaper className="text-fuchsia-500" size={32} />
        <h2 className="text-4xl font-black text-white tracking-tighter">
          ADMIRAL <span className="text-fuchsia-500">NOVOSTI</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col h-full bg-[#0a0510] border-2 border-white/10 rounded-[40px] overflow-hidden hover:border-fuchsia-500/30 transition-all duration-500 shadow-3xl"
          >
            <div className="h-56 relative overflow-hidden flex-shrink-0">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[9px] font-black text-fuchsia-500 border border-fuchsia-500/30">
                {item.category}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1 min-h-0">
              <div className="flex items-center gap-4 text-gray-500 text-[8px] mb-4">
                <div className="flex items-center gap-2 font-light italic font-sans whitespace-nowrap">
                  <Calendar size={12} /> {item.date}
                </div>
                <div className="flex items-center gap-2 font-light italic font-sans whitespace-nowrap">
                  <Clock size={12} /> {item.readTime}
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-black text-white mb-4 leading-snug group-hover:text-fuchsia-400 transition-colors uppercase italic line-clamp-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs font-light italic leading-relaxed mb-6 lowercase font-sans line-clamp-3 flex-shrink-0">
                {item.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-2">
                <button className="flex items-center gap-1 text-[9px] font-black text-white hover:text-fuchsia-500 transition-colors group/btn uppercase whitespace-nowrap">
                  PROČITAJ{' '}
                  <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
                <div className="flex gap-3 text-gray-500 flex-shrink-0">
                  <Heart size={14} className="hover:text-fuchsia-500 cursor-pointer transition-colors" />
                  <Share2 size={14} className="hover:text-fuchsia-500 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromocijeNews;
