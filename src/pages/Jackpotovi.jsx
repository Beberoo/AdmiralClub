import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Star, Crown, Shield, Gem, DollarSign, Coins } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import JackpotsHero from '../components/JackpotsHero';
import JackpotsCards from '../components/JackpotsCards';
import JackpotsCTA from '../components/JackpotsCTA';

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
    <div className="relative h-12 md:h-16 w-6 md:w-8 overflow-hidden bg-black/40 rounded-md border border-white/10 inline-block mx-0.5 shadow-inner shadow-black">
      <div 
        className="absolute w-full transition-transform duration-[2000ms] ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center"
        style={{ transform: `translateY(-${offset}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div key={n} className="h-12 md:h-16 flex items-center justify-center font-mono font-black text-3xl md:text-5xl text-white">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

const SlotCounter = ({ value, colorClass }) => {
  const chars = value.split('');

  return (
    <div className="flex items-center justify-center lg:justify-start py-4">
      {chars.map((char, index) => (
        isNaN(parseInt(char)) ? (
          <span key={index} className="text-3xl md:text-5xl font-mono font-black text-white/30 px-0.5 self-end mb-1">
            {char}
          </span>
        ) : (
          <SlotNumber key={index} number={char} />
        )
      ))}
      <span className={`text-lg font-black ml-3 self-end mb-1 uppercase ${colorClass}`}>RSD</span>
    </div>
  );
};

// --- POMOĆNA KOMPONENTA ZA SKROLOVANJE NA VRH ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- JACKPOTOVI PAGE ---
const Jackpotovi = () => {
  const jackpotLevels = [
    { id: 'admiral', title: 'ADMIRAL', amount: '3.923.434', icon: Star, color: 'text-amber-400', borderColor: 'border-amber-500/50', glow: 'shadow-amber-500/20', bg: 'from-amber-600/20 to-transparent' },
    { id: 'vip', title: 'VIP', amount: '1.055.136', icon: Crown, color: 'text-pink-400', borderColor: 'border-pink-500/50', glow: 'shadow-pink-500/20', bg: 'from-pink-600/20 to-transparent' },
    { id: 'atrium', title: 'ATRIUM', amount: '782.472', icon: Shield, color: 'text-cyan-400', borderColor: 'border-cyan-500/50', glow: 'shadow-cyan-500/20', bg: 'from-cyan-600/20 to-transparent' },
    { id: 'royal', title: 'ROYAL', amount: '458.600', icon: Crown, color: 'text-fuchsia-400', borderColor: 'border-fuchsia-500/50', glow: 'shadow-fuchsia-500/20', bg: 'from-fuchsia-600/20 to-transparent' },
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700 min-h-screen bg-[#050208] relative overflow-hidden">
      <ScrollToTop />
      <MoneyRain />
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <JackpotsHero />
      <JackpotsCards jackpotLevels={jackpotLevels} />
      <JackpotsCTA />
    </div>
  );
};

export default Jackpotovi;
