import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoneyRain from '../components/MoneyRain';
import PromoHero from '../components/promo-detail/PromoHero';
import PromoContent from '../components/promo-detail/PromoContent';
import PromoCTA from '../components/promo-detail/PromoCTA';
import PromoRelated from '../components/promo-detail/PromoRelated';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PromoDetail = () => {
  // Mock data - u produkciji bi se dobijalo sa backenда ili iz props
  const allPromos = [
    {
      id: 1,
      title: 'MEGA BONUS DOBRODOŠLICE',
      subtitle: '100% NA PRVI DEPOZIT',
      tag: 'HOT',
      img: 'https://images.unsplash.com/photo-1596742572435-081d21b023be?q=80&w=1200',
      desc: 'Dobrodošli sa najvećim bonusom na početku. Registruj se i odmah dobi 100% bonus na prvi depozit!'
    },
    {
      id: 2,
      title: 'DŽEKPOT TRKA',
      subtitle: 'SVAKI SPIN SE RAČUNA',
      tag: 'NOVO',
      img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1200',
      desc: 'Svaki spin te deli od milionskog bonusa. Učestvuj u najvećoj trci za džekpot!'
    },
    {
      id: 3,
      title: 'VIKEND RELOAD',
      subtitle: '+50% NA DOPUNU',
      tag: 'LIMITIRANO',
      img: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1200',
      desc: 'Svaki vikend imaj dodatnih 50% na dopunu. Vikend nikad nije bio bolji!'
    }
  ];

  const currentPromoId = 1; // U produkciji bi se dobijalo iz URL parametra

  const currentPromo = allPromos.find(p => p.id === currentPromoId);

  if (!currentPromo) {
    return <div>Promocija nije pronađena</div>;
  }

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700 min-h-screen bg-[#050208] relative overflow-hidden">
      <ScrollToTop />
      <MoneyRain />

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-pink-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <PromoHero promo={currentPromo} />
      <PromoContent promo={currentPromo} />
      <PromoRelated allPromos={allPromos} currentPromoId={currentPromoId} />
    </div>
  );
};

export default PromoDetail;
