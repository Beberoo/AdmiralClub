import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const Locator = () => (
  <div className="py-24 bg-[#08030c] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
      
      <div className="w-full lg:w-1/2">
         <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Lokacije</h3>
         <h2 className="text-4xl font-black text-white mb-8 tracking-tight">PRONAĐITE NAS</h2>
         <p className="text-gray-400 mb-10 font-light leading-relaxed">
             Sa 63 kluba širom zemlje, Admiral Club je uvek u vašoj blizini. 
             Elegancija, komfor i najnoviji aparati čekaju na vas.
         </p>
         
         <div className="space-y-4">
             {/* List Item 1 - Active */}
             <div className="group flex items-center gap-4 p-4 border border-fuchsia-900/50 bg-fuchsia-900/10 rounded cursor-pointer">
                 <div className="bg-fuchsia-600 p-2 rounded-full text-white"><MapPin size={16} /></div>
                 <div>
                     <h4 className="text-white font-bold text-sm tracking-wide">Beograd - Centar</h4>
                     <p className="text-gray-400 text-xs">Žorža Klemansoa 12</p>
                 </div>
                 <div className="ml-auto text-fuchsia-400"><ChevronRight size={16} /></div>
             </div>
             
             {/* List Item 2 - Inactive */}
             <div className="group flex items-center gap-4 p-4 border border-white/5 hover:border-white/10 rounded cursor-pointer transition-colors">
                 <div className="bg-white/5 p-2 rounded-full text-gray-500"><MapPin size={16} /></div>
                 <div>
                     <h4 className="text-gray-300 font-bold text-sm tracking-wide">Novi Beograd</h4>
                     <p className="text-gray-500 text-xs">Bulevar Umetnosti 4</p>
                 </div>
             </div>
             
             <a href="#" className="inline-block mt-4 text-xs text-gray-500 hover:text-white tracking-widest uppercase border-b border-gray-700 pb-1 pt-4">Vidi sve lokacije</a>
         </div>
      </div>

      <div className="w-full lg:w-1/2 h-[400px] bg-[#11081a] rounded relative overflow-hidden flex items-center justify-center border border-white/5">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         {/* Simplified Abstract Map */}
         <div className="relative z-10 text-center">
             <div className="w-4 h-4 bg-fuchsia-500 rounded-full animate-ping absolute top-0 left-1/2 -translate-x-1/2"></div>
             <div className="w-4 h-4 bg-fuchsia-500 rounded-full relative z-10 border-4 border-[#11081a]"></div>
             <div className="mt-4 bg-black/60 backdrop-blur px-4 py-2 rounded text-xs text-white border border-white/10">
                 Beograd, Centar
             </div>
         </div>
      </div>

    </div>
  </div>
);

export default Locator;
