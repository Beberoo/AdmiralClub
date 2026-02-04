import React, { useState, useEffect } from 'react';
import { Gift, Trophy, Flame } from 'lucide-react';
import MoneyRain from '../components/MoneyRain';
import PromocijeHero from '../components/PromocijeHero';
import PromocijeCards from '../components/PromocijeCards';
import PromocijeNews from '../components/PromocijeNews';
import PromocijeNewsletter from '../components/PromocijeNewsletter';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return null;
};

const Promocije = () => {
  const activePromos = [
    {
      id: 1,
      title: 'MEGA BONUS DOBRODOŠLICE',
      subtitle: '100% NA PRVI DEPOZIT',
      tag: 'HOT',
      icon: Gift,
      img: 'https://images.unsplash.com/photo-1596742572435-081d21b023be?q=80&w=1200',
    },
    {
      id: 2,
      title: 'DŽEKPOT TRKA',
      subtitle: 'SVAKI SPIN SE RAČUNA',
      tag: 'NOVO',
      icon: Trophy,
      img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1200',
    },
    {
      id: 3,
      title: 'VIKEND RELOAD',
      subtitle: '+50% NA DOPUNU',
      tag: 'LIMITIRANO',
      icon: Flame,
      img: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1200',
    },
  ];

  const newsItems = [
    {
      id: 1,
      category: 'Novosti',
      title: 'Novi Admiral Club otvoren u Pančevu',
      date: '04.02.2024.',
      readTime: '2 min',
      desc: 'Doživite najmodernije gaming iskustvo na novoj lokaciji. Vrhunski aparati i ekskluzivan ambijent vas čekaju.',
      img: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=800',
    },
    {
      id: 2,
      category: 'Blog',
      title: 'Kako funkcioniše naš novi Loyalty sistem?',
      date: '02.02.2024.',
      readTime: '5 min',
      desc: 'Saznajte sve o rankovima od Officera do Admirala i kako da maksimalno iskoristite svoje benefite.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    },
    {
      id: 3,
      category: 'Intervju',
      title: 'Srećni dobitnik Admiral Grand Jackpota',
      date: '30.01.2024.',
      readTime: '4 min',
      desc: 'Razgovarali smo sa dobitnikom rekordne premije u Beogradu. Pogledajte njegovu priču.',
      img: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=800',
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
        <PromocijeHero />
        <PromocijeCards activePromos={activePromos} />
        <PromocijeNews newsItems={newsItems} />
        <PromocijeNewsletter />
      </div>
    </div>
  );
};

export default Promocije;
