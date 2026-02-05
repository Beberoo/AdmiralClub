import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Trophy, Users, Briefcase, Rocket, Target, DollarSign, Shield } from 'lucide-react';
import MoneyRain from '../components/MoneyRain';
import CareerHero from '../components/career-detail/CareerHero';
import CareerContent from '../components/career-detail/CareerContent';
import CareerBenefits from '../components/career-detail/CareerBenefits';
import CareerCTA from '../components/career-detail/CareerCTA';
import CareerRelated from '../components/career-detail/CareerRelated';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const CareerDetail = () => {
  const { id } = useParams();

  // Mock data - svi poslovi iz Karijera.jsx
  const allJobs = [
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

  const currentJobId = Number(id);
  const currentJob = allJobs.find(job => job.id === currentJobId);

  if (!currentJob) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-[#050208] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Pozicija nije pronađena</h1>
          <p className="text-gray-400 mb-8">Pozicija sa ID-om {id} ne postoji.</p>
          <a href="/karijera" className="text-fuchsia-500 hover:text-fuchsia-400 font-black uppercase">
            ← Nazad na karijere
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700 min-h-screen bg-[#050208] relative overflow-hidden uppercase font-black">
      <ScrollToTop />
      <MoneyRain />

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-cyan-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10">
        <CareerHero job={currentJob} />
        <CareerContent job={currentJob} />
        <CareerBenefits />
        <CareerCTA jobId={currentJobId} />
        <CareerRelated jobs={allJobs} currentJobId={currentJobId} />
      </div>
    </div>
  );
};

export default CareerDetail;
