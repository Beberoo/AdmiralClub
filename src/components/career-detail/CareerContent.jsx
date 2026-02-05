import React from 'react';
import { CheckCircle, Users, Clock, Zap } from 'lucide-react';

const CareerContent = ({ job }) => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-[#0a0510] border border-white/10 rounded-[30px] hover:border-fuchsia-500/30 transition-colors">
            <h3 className="text-lg font-black text-white uppercase mb-6 italic">O Poziciji</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-6 italic lowercase font-sans">
              Tražimo energična i ambitiozan kandidate koji će se pridružiti našem dinamičnom timu na Admiral klubu. Ova pozicija nudi odličnu mogućnost za razvoj karijere u brzo rastućem sektoru zabave.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-light italic lowercase font-sans">
              Kao deo Admiral tima, bićeš deo velikog brzojnog iskustva koji svakodnevno služi hiljade zadovoljnih korisnika.
            </p>
          </div>

          {/* Key Info */}
          <div className="p-8 bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-500/30 rounded-[30px]">
            <h3 className="text-lg font-black text-white uppercase mb-6 italic">Ključne Informacije</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users size={20} className="text-fuchsia-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-black text-sm uppercase">Tip Pozicije</p>
                  <p className="text-gray-400 text-xs italic font-light">{job.type}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-black text-sm uppercase">Lokacija</p>
                  <p className="text-gray-400 text-xs italic font-light">{job.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-black text-sm uppercase">Nivo Iskustva</p>
                  <p className="text-gray-400 text-xs italic font-light">Početnik do naprednog</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="p-12 bg-[#0a0510] border border-white/10 rounded-[30px] mb-20">
          <h2 className="text-3xl font-black text-white uppercase mb-6 italic">Šta Ćeš Raditi</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-fuchsia-500 font-black text-lg">✓</span>
              <span className="text-gray-400 font-light italic lowercase font-sans">Direktna komunikacija sa korisnicima i obezbeđivanje kvalitetnog iskustva</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-fuchsia-500 font-black text-lg">✓</span>
              <span className="text-gray-400 font-light italic lowercase font-sans">Održavanje čistote i bezbednosti radnog okruženja</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-fuchsia-500 font-black text-lg">✓</span>
              <span className="text-gray-400 font-light italic lowercase font-sans">Compliance sa svim regulama i procedurama Admiral kluba</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-fuchsia-500 font-black text-lg">✓</span>
              <span className="text-gray-400 font-light italic lowercase font-sans">Rešavanje problema i odgovore na pitanja korisnika</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-fuchsia-500 font-black text-lg">✓</span>
              <span className="text-gray-400 font-light italic lowercase font-sans">Kontinuirani razvoj veština kroz obuke i mentorstvo</span>
            </li>
          </ul>
        </div>

        {/* Requirements */}
        <div className="p-12 bg-[#0a0510] border border-white/10 rounded-[30px]">
          <h2 className="text-3xl font-black text-white uppercase mb-6 italic">Zahtevani Uslovi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-black text-fuchsia-400 uppercase mb-4 italic">Obavezno</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-fuchsia-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm font-light italic lowercase font-sans">Najmanje 18 godina</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-fuchsia-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm font-light italic lowercase font-sans">Srpski jezik (pisano i usmeno)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-fuchsia-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm font-light italic lowercase font-sans">Čist kriminalni i beleški</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-fuchsia-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm font-light italic lowercase font-sans">Validna lična dokumenta</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-amber-400 uppercase mb-4 italic">Poželjno</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm font-light italic lowercase font-sans">Prethodno iskustvo u sličnoj ulozi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm font-light italic lowercase font-sans">Znanje engleskog jezika</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm font-light italic lowercase font-sans">Sertifikati za specifične veštine</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm font-light italic lowercase font-sans">Vozačka dozvola (B kategorija)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerContent;
