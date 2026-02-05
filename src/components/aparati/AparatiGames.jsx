import React from 'react';
import { Gamepad2 } from 'lucide-react';

const AparatiGames = ({ games }) => {
  return (
    <section className="py-20 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <Gamepad2 className="text-fuchsia-500" size={32} />
        <h2 className="text-4xl font-black text-white tracking-tighter">
          POPULARNE <span className="text-fuchsia-500">IGRE</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-fuchsia-500/50 transition-all duration-300 cursor-pointer"
          >
            <img
              src={game.img}
              alt={game.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-end p-3">
              <h3 className="text-white text-[10px] font-black text-center leading-tight uppercase line-clamp-2">
                {game.name}
              </h3>
              {game.tag && (
                <span className="mt-2 px-2 py-1 bg-fuchsia-600/80 text-white text-[8px] rounded-full font-black">
                  {game.tag}
                </span>
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-fuchsia-600/0 group-hover:bg-fuchsia-600/10 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AparatiGames;
