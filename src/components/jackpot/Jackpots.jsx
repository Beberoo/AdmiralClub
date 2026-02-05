import React, { useState, useEffect } from 'react';
import { Crown, Shield, Star, Coins, DollarSign, Gem, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- KOMPONENTA ZA ANIMACIJU BROJEVA (SLOT COUNTER) ---
const SlotNumber = ({ number }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(parseInt(number) * 10);
    }, 100);
    return () => clearTimeout(timer);
  }, [number]);

  return (
    <div className="relative h-8 md:h-10 w-5 md:w-6 overflow-hidden bg-black/40 rounded-md border border-white/10 inline-block mx-0.5 shadow-inner shadow-black">
      <div 
        className="absolute w-full transition-transform duration-[2000ms] ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center"
        style={{ transform: `translateY(-${offset}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div key={n} className="h-8 md:h-10 flex items-center justify-center font-mono font-black text-xl md:text-2xl text-white">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

const SlotCounter = ({ value }) => {
  const chars = value.split('');
  return (
    <div className="flex items-center justify-center py-2">
      {chars.map((char, index) => (
        isNaN(parseInt(char)) ? (
          <span key={index} className="text-xl md:text-2xl font-mono font-black text-white/30 px-0.5">
            {char}
          </span>
        ) : (
          <SlotNumber key={index} number={char} />
        )
      ))}
    </div>
  );
};

// --- ANIMACIJSKI EFEKT: KIŠA NOVCA I SJAJA ---
const MoneyRain = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const icons = [Coins, DollarSign, Gem, Star];
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
      size: 10 + Math.random() * 20,
      Icon: icons[Math.floor(Math.random() * icons.length)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute text-yellow-500/20 animate-fall"
          style={{
            left: `${p.left}%`,
            top: `-50px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <p.Icon size={p.size} />
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation-name: fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

const Jackpots = ({ isSharedBackground = false }) => {
  const cards = [
    { title: 'ROYAL', amount: '458.600 RSD', color: 'border-fuchsia-500', fromColor: 'from-fuchsia-600', toColor: 'to-purple-900', icon: Crown, shadow: 'shadow-fuchsia-900/50' },
    { title: 'ATRIUM', amount: '782.472 RSD', color: 'border-cyan-400', fromColor: 'from-cyan-500', toColor: 'to-blue-900', icon: Shield, shadow: 'shadow-cyan-900/50' },
    { title: 'VIP', amount: '1.055.136 RSD', color: 'border-pink-500', fromColor: 'from-pink-500', toColor: 'to-rose-900', icon: Crown, shadow: 'shadow-pink-900/50' },
    { title: 'ADMIRAL', amount: '3.923.434 RSD', color: 'border-amber-400', fromColor: 'from-amber-400', toColor: 'to-yellow-900', icon: Star, shadow: 'shadow-amber-900/50' },
  ];

  return (
    <div className={`py-24 relative overflow-hidden ${!isSharedBackground ? 'overflow-hidden' : ''}`}>
      {!isSharedBackground && <MoneyRain />}
      
      {/* Dynamic Background Glows - Only show if not using shared background */}
      {!isSharedBackground && (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse z-0"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse z-0" style={{ animationDelay: '2s' }}></div>
        </>
      )}
      
      <div className="relative z-10 text-center mb-16 px-4">
        <h3 className="text-fuchsia-300 text-sm font-bold mb-2 tracking-[0.3em] uppercase opacity-80">Live Status</h3>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-xl">
          Admiral <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-500">Jackpot</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className={`group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-between aspect-[4/5] hover:-translate-y-4 transition-all duration-500 shadow-2xl ${card.shadow}`}>
              {/* Neon Border Effect on Hover */}
              <div className={`absolute inset-0 rounded-2xl border-2 ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
              <div className={`absolute inset-0 rounded-2xl border ${card.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated Background Glow */}
              <div className={`absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b ${card.fromColor} to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-500 rounded-t-2xl`}></div>

              <div className={`relative z-10 p-4 rounded-full bg-gradient-to-br ${card.fromColor} ${card.toColor} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/20`}>
                <Icon size={32} className="text-white" strokeWidth={2} />
              </div>
              
              <h4 className="relative z-10 text-white font-black text-2xl tracking-[0.2em] mb-auto text-shadow-md group-hover:text-fuchsia-100 transition-colors">{card.title}</h4>
              
              <div className="relative z-10 w-full">
                <p className="text-center text-gray-400 text-[10px] uppercase tracking-widest mb-1">Trenutna vrednost</p>
                <div className="w-full text-center py-2 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded border-y border-white/10 overflow-hidden">
                  <SlotCounter value={card.amount.replace(' RSD', '').trim()} />
                </div>
                <p className="text-center text-white text-xs opacity-70 mt-1">RSD</p>
                
              </div>
            </div>
          );
        })}
      </div>
      {/* Link ispod svih kartica */}
      <div className="w-full flex justify-center mt-12">
        <Link to="/jackpotovi" className="inline-flex items-center gap-2 text-base font-bold text-fuchsia-400 hover:text-fuchsia-300 transition-colors px-6 py-3 rounded-xl bg-black/30 backdrop-blur-lg border border-white/10 shadow-lg tracking-widest uppercase">
          Pogledaj više
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Jackpots;
