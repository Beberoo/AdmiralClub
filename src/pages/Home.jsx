import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Jackpots from '../components/Jackpots';
import Loyalty from '../components/Loyalty';
import Locator from '../components/Locator';
import ContentGrid from '../components/ContentGrid';
import { Coins, DollarSign, Gem, Star } from 'lucide-react';

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

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Hero + Jackpots with Shared Background */}
      <div className="relative overflow-hidden">
        <MoneyRain />
        
        {/* Dynamic Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse z-0"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse z-0" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10">
          <Hero />
          <Jackpots isSharedBackground={true} />
        </div>
        
        {/* Blend Transition to Loyalty Section */}
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent via-[#050208]/0 to-[#05020a] z-20 pointer-events-none"></div>
      </div>
      
      <Loyalty />
      <Locator />
      <ContentGrid />
    </>
  );
};

export default Home;
