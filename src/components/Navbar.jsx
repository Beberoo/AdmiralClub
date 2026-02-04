import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = [
    
    { name: 'KLUBOVI', path: '/locations' },
    { name: 'JACKPOTOVI', path: '/jackpotovi' },
    { name: 'APARATI', path: '/aparati' },
    { name: 'PROMOCIJE', path: '/promocije' },
    { name: 'KARIJERA', path: '/' }
  ];

  return (
    <nav className="w-full bg-[#0a0510]/80 backdrop-blur-xl fixed top-0 z-50 border-b border-white/5 shadow-lg shadow-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 text-white font-black text-2xl tracking-widest group cursor-pointer">
            <span className="group-hover:text-fuchsia-400 transition-colors duration-300">ADMIRAL</span>
            <span className="text-[10px] block font-medium tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors">- CLUB -</span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {menuItems.map((item) => (
                <Link key={item.name} to={item.path} className="relative group px-4 py-2 text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-fuchsia-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"></div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
             <div className="text-white font-bold text-xs border border-white/10 bg-white/5 px-3 py-1.5 rounded-md hover:border-fuchsia-500/50 transition-colors cursor-pointer">
              RS
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
