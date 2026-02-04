import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="relative bg-[#020103] pt-20 pb-10 border-t border-white/5 overflow-hidden">
    {/* Top Gradient Line */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-600 to-transparent opacity-50"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-fuchsia-900/10 blur-3xl pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 flex flex-col items-center relative z-10">
      
      <div className="mb-10 text-center">
        <h4 className="text-white font-black text-3xl tracking-[0.3em] mb-2">ADMIRAL</h4>
        <span className="text-fuchsia-500 text-xs font-bold tracking-[0.5em] uppercase opacity-70">Club Elite</span>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mb-12">
        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 shadow-lg">
           <Instagram size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 shadow-lg">
           <Facebook size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 shadow-lg">
           <Linkedin size={18} />
        </a>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 text-xs font-bold uppercase tracking-widest mb-12">
        {['Klubovi', 'Aparati i igre', 'Džekpotovi', 'Novosti', 'Zaposlenje'].map((link) => (
             <a key={link} href="#" className="hover:text-fuchsia-400 transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
             </a>
        ))}
      </div>

      {/* Legal */}
      <div className="flex flex-wrap justify-center gap-4 text-[10px] text-gray-600 uppercase tracking-wider font-medium">
        <a href="#" className="hover:text-gray-400 transition-colors">terms of service</a>
        <span className="text-gray-800">/</span>
        <a href="#" className="hover:text-gray-400 transition-colors">privacy policy</a>
        <span className="text-gray-800">/</span>
        <a href="#" className="hover:text-gray-400 transition-colors">cookie policy</a>
        <span className="text-gray-800">/</span>
        <a href="#" className="hover:text-gray-400 transition-colors">disclaimer</a>
      </div>
      
      <p className="mt-8 text-[10px] text-gray-700 font-mono">© 2024 ADMIRAL CLUB. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);

export default Footer;
