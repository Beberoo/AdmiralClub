import React, { useEffect } from 'react';
import {
  Trophy,
  Users,
  Briefcase,
  Rocket,
  Target,
  DollarSign,
  Shield,
} from 'lucide-react';
import MoneyRain from '../components/MoneyRain';
import KarijeraHero from '../components/karijera/KarijeraHero';
import KarijeraBenefits from '../components/karijera/KarijeraBenefits';
import KarijeraJobs from '../components/karijera/KarijeraJobs';
import KarijeraCTA from '../components/karijera/KarijeraCTA';

const Karijera = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const jobs = [
    {
      id: 1,
      title: 'OPERATER NA AUTOMATIMA',
      location: 'Beograd, Novi Sad, Niš',
      type: 'Puno radno vrijeme',
      icon: Target,
      highlight: 'Idealan za eksterne i energične osobe koje vole rad s ljudima.',
      color: 'text-fuchsia-400',
    },
    {
      id: 2,
      title: 'MENADŽER OBJEKTA',
      location: 'Kragujevac',
      type: 'Puno radno vrijeme',
      icon: Briefcase,
      highlight: 'Vodi naš tim ka pobjedi na jednoj od ključnih lokacija.',
      color: 'text-amber-400',
    },
    {
      id: 3,
      title: 'IT SISTEM ADMINISTRATOR',
      location: 'Beograd (HQ)',
      type: 'Hibridno',
      icon: Rocket,
      highlight: 'Održavaj sisteme koji pokreću elitnu zabavu u Srbiji.',
      color: 'text-cyan-400',
    },
    {
      id: 4,
      title: 'BLAGAJNIK / CASHIER',
      location: 'Pančevo, Subotica',
      type: 'Smjenski rad',
      icon: DollarSign,
      highlight: 'Preciznost i profesionalizam u srcu Admiral iskustva.',
      color: 'text-emerald-400',
    },
  ];

  const benefits = [
    { title: 'Stabilnost', desc: 'Rad u globalno priznatom brendu.', icon: Shield },
    { title: 'Bonusi', desc: 'Sistemi nagrađivanja za najbolje.', icon: Trophy },
    { title: 'Edukacija', desc: 'Kontinuirana obuka i napredak.', icon: Rocket },
    { title: 'Tim', desc: 'Rad u dinamičnom okruženju.', icon: Users },
  ];

  return (
    <div className="pt-24 pb-24 bg-[#050208] min-h-screen relative overflow-hidden uppercase font-black">
      <MoneyRain />

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <KarijeraHero />
        <KarijeraBenefits benefits={benefits} />
        <KarijeraJobs jobs={jobs} />
        <KarijeraCTA />
      </div>
    </div>
  );
};

export default Karijera;
