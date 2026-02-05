import React, { useState, useEffect } from 'react';
import { Crown, Zap, Disc, Dices, Gem, Flame, Star } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import MoneyRain from '../components/MoneyRain';
import AparatiHero from '../components/aparati/AparatiHero';
import AparatiCards from '../components/aparati/AparatiCards';
import AparatiGames from '../components/aparati/AparatiGames';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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

  const games = [
    {
      id: 1,
      name: 'BOOK OF RA',
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400',
      tag: 'HOT',
    },
    {
      id: 2,
      name: 'SIZZLING HOT',
      img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400',
      tag: 'NOVO',
    },
    {
      id: 3,
      name: 'ULTRA HOT',
      img: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=400',
    },
    {
      id: 4,
      name: 'LORD OF THE OCEAN',
      img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400',
    },
    {
      id: 5,
      name: 'DOLPHINS PEARL',
      img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400',
      tag: 'TOP',
    },
    {
      id: 6,
      name: 'LUCKY LADY',
      img: 'https://images.unsplash.com/photo-1596742572435-081d21b023be?q=80&w=400',
    },
    {
      id: 7,
      name: 'COLUMBUS',
      img: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=400',
    },
    {
      id: 8,
      name: 'FAUST',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400',
    },
    {
      id: 9,
      name: 'MEGA JOKER',
      img: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=400',
    },
    {
      id: 10,
      name: 'ALWAYS HOT',
      img: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=400',
    },
    {
      id: 11,
      name: 'POWER STARS',
      img: 'https://images.unsplash.com/photo-1600456899121-68eda5705257?q=80&w=400',
    },
    {
      id: 12,
      name: 'JUST JEWELS',
      img: 'https://images.unsplash.com/photo-1574192324001-ee7e2cb0e2d2?q=80&w=400',
    },
    {
      id: 13,
      name: 'ROYAL TREASURES',
      img: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=400',
    },
    {
      id: 14,
      name: 'PHARAOH GOLD',
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#050208] min-h-screen relative overflow-hidden uppercase">
      <ScrollToTop />
      <MoneyRain />

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AparatiHero />
        <AparatiCards machines={machines} flippedCards={flippedCards} toggleFlip={toggleFlip} />
        <AparatiGames games={games} />
      </div>
    </div>
  );
};

export default Aparati;
