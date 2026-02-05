import React from 'react';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

const NewsRelated = ({ allNews, currentNewsId }) => {
  const relatedNews = allNews.filter(news => news.id !== currentNewsId).slice(0, 3);

  return (
    <section className="py-20 px-6 relative z-10 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white uppercase text-center mb-16 italic">
          Srodne <span className="text-fuchsia-500">Vijesti</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedNews.map((news) => (
            <div
              key={news.id}
              className="group relative rounded-[30px] overflow-hidden border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300 bg-[#0a0510] flex flex-col h-full"
            >
              <div className="h-48 relative overflow-hidden flex-shrink-0">
                <img
                  src={news.img}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-fuchsia-600/80 text-white text-[8px] font-black rounded-full">
                    {news.category}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white mb-3 italic uppercase line-clamp-2 group-hover:text-fuchsia-400 transition-colors">
                  {news.title}
                </h3>

                <p className="text-gray-500 text-xs font-light italic lowercase font-sans mb-4 line-clamp-2">
                  {news.desc}
                </p>

                <div className="flex items-center gap-3 text-gray-500 text-[8px] mb-6 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <Calendar size={10} /> {news.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={10} /> {news.readTime}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <a
                    href={`/news/${news.id}`}
                    className="flex items-center gap-1 text-[9px] font-black text-white hover:text-fuchsia-500 transition-colors uppercase whitespace-nowrap"
                  >
                    PROČITAJ{' '}
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsRelated;
