import React from 'react';
import { Trophy, DollarSign, Users, Rocket, Shield, BookOpen } from 'lucide-react';

const CareerBenefits = () => {
  const benefits = [
    {
      title: 'Kompetitivna Plata',
      desc: 'Plaćanje prema iskustvu sa bonusima za performanse',
      icon: DollarSign,
      color: 'text-amber-400'
    },
    {
      title: 'Tim Podrške',
      desc: 'Rad u dinamičnom okruženju sa podrškom iskusnih kolega',
      icon: Users,
      color: 'text-fuchsia-400'
    },
    {
      title: 'Obuka i Razvoj',
      desc: 'Kontinuirana edukacija i mogućnost napredovanja',
      icon: BookOpen,
      color: 'text-cyan-400'
    },
    {
      title: 'Sigurnost',
      desc: 'Stabilan posao u renomiranoj kompaniji',
      icon: Shield,
      color: 'text-emerald-400'
    },
    {
      title: 'Nagrade',
      desc: 'Sistemi nagrada za najbolje izvršnje',
      icon: Trophy,
      color: 'text-rose-400'
    },
    {
      title: 'Karijera',
      desc: 'Jasne putanje napredovanja i mogućnosti rasta',
      icon: Rocket,
      color: 'text-blue-400'
    }
  ];

  return (
    <section className="py-20 px-6 relative z-10 bg-gradient-to-b from-transparent via-fuchsia-600/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white uppercase text-center mb-16 italic">
          Šta <span className="text-fuchsia-500">Dobijate</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-[#0a0510] border border-white/10 rounded-[30px] hover:border-fuchsia-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <Icon size={80} />
                </div>

                <div className="relative z-10">
                  <div className={`mb-4 ${benefit.color}`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase italic">{benefit.title}</h3>
                  <p className="text-gray-400 font-light italic lowercase font-sans text-sm">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerBenefits;
