import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoneyRain from '../components/MoneyRain';
import NewsHero from '../components/news-detail/NewsHero';
import NewsContent from '../components/news-detail/NewsContent';
import NewsRelated from '../components/news-detail/NewsRelated';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return null;
};

// Mock data - ista kao u Promocije.jsx
const allNewsItems = [
  {
    id: 1,
    category: 'Novosti',
    title: 'Novi Admiral Club otvoren u Pančevu',
    date: '04.02.2024.',
    readTime: '2 min',
    desc: 'Doživite najmodernije gaming iskustvo na novoj lokaciji. Vrhunski aparati i ekskluzivan ambijent vas čekaju.',
    img: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=800',
    fullContent: {
      intro: 'Ponos nas je što predstavljamo novu lokaciju Admiral Club-a u Pančevu, koja donosi revolucionarno gaming iskustvo sa najmodernijom tehnologijom i ambijentom.',
      details: 'Nova lokacija je opremljena sa najnovijom generacijom aparata i gaming sistema. Posebnu pažnju smo posvetili ambijantu i obezbjeđivanju maksimalnog udobnosti za naše goste. Svaki detalj je pažljivo odabran da osigura nezaboravno iskustvo.',
      keyPoints: [
        'Najnoviji aparati sa 200+ igrica',
        'Premium ambijent sa VIP zonom',
        'Stručni i ljubazan kadar 24/7',
        'Moderne sigurnosne mere',
        'Parking i pristupačnost'
      ],
      conclusion: 'Pozivamo vas da posjetite novu lokaciju Admiral Club-a u Pančevu. Naš tim je siguran da ćete uživati u svim benefitima koje nudimo. Otvorenje je zakazano za 10. februar 2024. godine!'
    }
  },
  {
    id: 2,
    category: 'Blog',
    title: 'Kako funkcioniše naš novi Loyalty sistem?',
    date: '02.02.2024.',
    readTime: '5 min',
    desc: 'Saznajte sve o rankovima od Officera do Admirala i kako da maksimalno iskoristite svoje benefite.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    fullContent: {
      intro: 'Admiral Club je redizajnirao svoj program lojalnosti kako bi vam omogućio da dobijete više. Novi sistem je baziran na kompletnom iskustvu igranja i doživljaja sa nama.',
      details: 'Loyalty sistem je podeljen na pet nivoa: Officer, Captain, Commodore, Admiral i Grand Admiral. Svaki nivo otključava nove pogodnosti, bonuse i ekskluzivne pristupe. Više igrate, više dobijate povratne informacije kroz naš system.',
      keyPoints: [
        'Officer - Starter level sa osnovu benefitima',
        'Captain - Povećani bonusi i prioritetna podrška',
        'Commodore - Ekskluzivni pristup VIP događajima',
        'Admiral - Premium benefiti i personalna usluga',
        'Grand Admiral - Najveći benefiti sa limitiranim bonusima'
      ],
      conclusion: 'Vaša lojalnost je vredna! Počnite sa programom danas i uživajte u eksklusivnim benefitima dok igrate svoje omiljene igrice.'
    }
  },
  {
    id: 3,
    category: 'Intervju',
    title: 'Srećni dobitnik Admiral Grand Jackpota',
    date: '30.01.2024.',
    readTime: '4 min',
    desc: 'Razgovarali smo sa dobitnikom rekordne premije u Beogradu. Pogledajte njegovu priču.',
    img: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=800',
    fullContent: {
      intro: 'Nedavno je jedan od naših vernih igrača osvojio neverovatnu Grand Jackpot premiju u vrijednosti od 50.000 evra! Razgovarali smo sa njim o njegovoj priči i iskustvu.',
      details: 'Igrač je dolazio u naš klub redovno u proteklih 5 godina. Nikad nije očekivao da će osvojiti tako veliku premiju, ali je ostao odlučan i pozitivan. "Admiral Club je deo moje rutine, a sada mogu da kažem da mi je donela najveću sreću," rekao je dobitnik.',
      keyPoints: [
        'Dobitak: 50.000 evra',
        'Igrica: Grand Admiral Jackpot',
        'Period iganja: 5 godina',
        'Lugar dobitka: Beograd - lokacija na Vračaru',
        'Trenutni planovi: Putovanje i prikupljanje savings'
      ],
      conclusion: 'Svi na Admiral Club-u mu čestitamo i pozivamo sve igrače da ponos i strpljenje i da veruju u svoju sreću. Svakoga čeka mogućnost da bude sledeći veliki dobitnik!'
    }
  },
];

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = allNewsItems.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="pt-24 pb-20 bg-[#050208] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white uppercase italic mb-4">Vijest nije pronađena</h1>
          <p className="text-gray-400">Vrati se na <a href="/promocije" className="text-fuchsia-500 hover:underline">stranicu sa vijestima</a></p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-[#050208] min-h-screen relative overflow-hidden uppercase">
      <ScrollToTop />
      <MoneyRain />

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <NewsHero news={newsItem} />
      <NewsContent news={newsItem} />
      <NewsRelated allNews={allNewsItems} currentNewsId={newsItem.id} />
    </div>
  );
};

export default NewsDetail;
