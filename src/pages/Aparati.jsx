import React, { useState } from 'react';
import { Crown, Zap, Disc, Dices, Gem, Flame, Star } from 'lucide-react';
import MoneyRain from '../components/MoneyRain';
import AparatiHero from '../components/AparatiHero';
import AparatiCards from '../components/AparatiCards';

const Aparati = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const machines = [
    {
      id: '01',
      name: 'NOVOMATIC VIP LOUNGE',
      rtp: '98.5%',
      tech: 'Dual 32" 4K Ekrani',
      desc: 'Najviši nivo luksuza. VIP Lounge serija nudi ergonomski dizajnirana sjedišta i surround zvuk.',
      specs: ['Smart Touch 2.0', 'VIP Cinema Sound', 'Ergo-Seat'],
      img: 'https://images.unsplash.com/photo-1596742572435-081d21b023be?q=80&w=600',
      icon: Crown,
      color: 'text-amber-400',
    },
    {
      id: '02',
      name: 'APEX PINNACLE LUXURY',
      rtp: '97.2%',
      tech: 'Infinite Curved Panel',
      desc: 'Brzina i dinamika. Apex Pinnacle nudi neviđenu preglednost svih dobitnih linija.',
      specs: ['Pinnacle Link Pro', 'Ambient LED Aura', 'Quick Cash-out'],
      img: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=600',
      icon: Zap,
      color: 'text-cyan-400',
    },
    {
      id: '03',
      name: 'MERKUR AVANTGARDE',
      rtp: '96.8%',
      tech: 'Triple HD Panels',
      desc: 'Nemačka preciznost. Preko 100 legendarnih slot igara na tri kristalno jasna HD ekrana.',
      specs: ['Nemački Standard', 'Classic Game Mix', 'Intelligent UI'],
      img: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=600',
      icon: Disc,
      color: 'text-fuchsia-400',
    },
    {
      id: '04',
      name: 'ADMIRAL ROULETTE',
      rtp: '97.3%',
      tech: 'Electronic Air-Ball',
      desc: 'Kraljica kazina. Omogućava igranje za do 8 igrača istovremeno uz statistiku uživo.',
      specs: ['8-Station Support', 'Real-time Tracker', 'Auto-Control'],
      img: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=600',
      icon: Dices,
      color: 'text-rose-400',
    },
    {
      id: '05',
      name: 'EGT SUPER HOT LINK',
      rtp: '96.5%',
      tech: 'Progressive Network',
      desc: 'Povezanost koja pravi milionere. Direktno uključen u najveću džekpot mrežu u regiji.',
      specs: ['4-Level Jackpot', 'Global Network', 'Turbo Spin'],
      img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=600',
      icon: Flame,
      color: 'text-orange-500',
    },
    {
      id: '06',
      name: 'SYNOT CRYSTAL',
      rtp: '97.8%',
      tech: 'Responsive Crystal Graphics',
      desc: 'Inovativne bonus runde i kristalno jasne animacije koje transformišu vaše iskustvo.',
      specs: ['Smart Touch', 'New-Gen Mechanics', 'Crystal Engine'],
      img: 'https://images.unsplash.com/photo-1541339907198-e08759df9a73?q=80&w=600',
      icon: Gem,
      color: 'text-emerald-400',
    },
    {
      id: '07',
      name: 'GOLDEN 777 CLASSIC',
      rtp: '95.9%',
      tech: 'Mechanical Feel Screens',
      desc: 'Duh starog Las Vegasa u modernom ruhu. Ekrani koji verno prenose osećaj mehaničkih kolutova.',
      specs: ['Mechanical Hybrid', 'Vintage Sound', 'Quick-Pay Ready'],
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600',
      icon: Star,
      color: 'text-blue-400',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#050208] min-h-screen relative overflow-hidden uppercase">
      <MoneyRain />

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AparatiHero />
        <AparatiCards machines={machines} flippedCards={flippedCards} toggleFlip={toggleFlip} />
      </div>
    </div>
  );
};

export default Aparati;
