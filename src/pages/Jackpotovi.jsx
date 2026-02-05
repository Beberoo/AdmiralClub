import React, { useEffect } from 'react';
import { Star, Crown, Shield } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import JackpotsHero from '../components/jackpot/JackpotsHero';
import JackpotsCards from '../components/jackpot/JackpotsCards';
import JackpotsCTA from '../components/jackpot/JackpotsCTA';
import MoneyRain from '../components/MoneyRain';

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
