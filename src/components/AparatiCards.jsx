import React from 'react';
import { RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const AparatiCards = ({ machines, flippedCards, toggleFlip }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {machines.map((m) => (
        <div
          key={m.id}
          className={`flip-card h-[460px] md:h-[550px] w-full ${flippedCards[m.id] ? 'flipped' : ''}`}
          onClick={() => toggleFlip(m.id)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front bg-[#0a0510] border border-white/10 shadow-2xl overflow-hidden group">
              <div className="h-full w-full relative">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                  <span className="text-[9px] font-black tracking-[0.5em] text-fuchsia-500 uppercase mb-2">
                    Model Serija {m.id}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter uppercase leading-none">
                    {m.name}
                  </h3>

                  <div className="mt-8 flex items-center gap-2 text-white/30 font-black text-[9px] tracking-widest">
                    <RefreshCcw size={12} className="animate-spin-slow" /> KLIKNI ZA INFO
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card-back bg-gradient-to-br from-[#120821] to-[#050208] border border-fuchsia-500/30 shadow-[0_0_60px_rgba(217,70,239,0.2)] p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-[10px] font-black tracking-widest ${m.color} uppercase`}>Premium Spec</span>
                  <div className="bg-white/10 px-4 py-2 rounded-xl text-white font-black text-xs italic">RTP {m.rtp}</div>
                </div>

                <h3 className="text-2xl font-black text-white italic tracking-tight mb-4 text-left border-l-4 border-fuchsia-500 pl-4 uppercase leading-none">
                  {m.name}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm font-light italic leading-relaxed text-left mb-6">
                  {m.desc}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-left bg-white/5 p-3 rounded-xl border border-white/5">
                    {/* Icon placeholder */}
                    <span className="text-[10px] font-black text-white tracking-widest uppercase">{m.tech}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {m.specs.map((s) => (
                      <div key={s} className="flex items-center gap-3 text-left pl-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-[9px] font-black text-gray-500 tracking-widest uppercase">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Link
                  to="/locations"
                  className="w-full sm:w-max px-8 py-4 bg-fuchsia-700 !text-white font-black text-xs tracking-[0.2em] rounded-full shadow-md hover:bg-fuchsia-800 hover:!text-white transition-all uppercase focus:outline-none text-center"
                >
                  PRONAĐI KLUB
                </Link>
                <button className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/10 hover:bg-white hover:text-black transition-all">
                  <RefreshCcw size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <style>{`
        .flip-card {
          perspective: 2000px;
          cursor: pointer;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
        }
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 28px;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default AparatiCards;
