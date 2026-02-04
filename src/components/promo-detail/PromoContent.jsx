import React from 'react';

const PromoContent = ({ promo }) => {
  return (
    <section className="py-10 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Terms */}
          <div className="p-8 bg-[#0a0510] border border-white/10 rounded-[30px] hover:border-fuchsia-500/30 transition-colors">
            <h3 className="text-lg font-black text-white uppercase mb-4 italic">Uslovi Promocije</h3>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-2">
                <span className="text-fuchsia-500 mt-1">•</span>
                <span>Validna samo za nove korisnike</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fuchsia-500 mt-1">•</span>
                <span>Minimalni depozit: 10€</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fuchsia-500 mt-1">•</span>
                <span>Bonus se deli na prva 3 depozita</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fuchsia-500 mt-1">•</span>
                <span>Vreme isteka: 30 dana</span>
              </li>
            </ul>
          </div>

          

          {/* Bonus Info */}
          <div className="p-8 bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-500/30 rounded-[30px]">
            <h3 className="text-lg font-black text-white uppercase mb-4 italic">Bonus</h3>
            <div className="mb-4">
              <p className="text-4xl font-black text-fuchsia-400 mb-2">100%</p>
              <p className="text-gray-400 text-sm font-light">Na prvi depozit</p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-2xl font-black text-amber-400">+50%</p>
              <p className="text-gray-400 text-sm font-light">Na drugi i treći depozit</p>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="p-12 bg-[#0a0510] border border-white/10 rounded-[30px]">
          <h2 className="text-3xl font-black text-white uppercase mb-6 italic">O Promociji</h2>
          <p className="text-gray-400 leading-relaxed font-light mb-4">
            Dobrodošli na Admiral! Prvo što trebate znati je da smo mi vodeća platforma za igre na sreću u Srbiji. 
            Naša promocija dobrodošlice je posebno dizajnirana da vam da maksimalni bonus na vašim prvim depozitima.
          </p>
          <p className="text-gray-400 leading-relaxed font-light mb-4">
            Svaki bonus može biti korišten na našoj kompletenoj kolekciji od preko 1000 igara. Bez ograničenja, bez skrivenih uslova. 
            Tek toliko trebate biti svestan da je to samo početak - imamo还有 još mnogo promocija koje čekaju za vas svaki dan.
          </p>
          <p className="text-gray-400 leading-relaxed font-light">
            Međutim, prvo trebate da se prijavite. Ostatak je historija. Veliki bonusi, velike pobede, i veći smehovi su vas čekali. 
            Zašto čekati? Pridruži se tisuće zadovoljnih igrača koji su već počeli sa Admiral klubom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoContent;
