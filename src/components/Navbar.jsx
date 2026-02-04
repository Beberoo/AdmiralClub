import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'KLUBOVI', path: '/locations' },
    { name: 'JACKPOTOVI', path: '/jackpotovi' },
    { name: 'APARATI', path: '/aparati' },
    { name: 'PROMOCIJE', path: '/promocije' },
    { name: 'KARIJERA', path: '/karijera' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-[#0a0510]/80 backdrop-blur-xl fixed top-0 z-50 border-b border-white/5 shadow-lg shadow-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" onClick={closeMenu} className="flex-shrink-0 text-white font-black text-2xl tracking-widest group cursor-pointer">
            <span className="group-hover:text-fuchsia-400 transition-colors duration-300">ADMIRAL</span>
            <span className="text-[10px] block font-medium tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors">- CLUB -</span>
          </Link>

          {/* Desktop Menu */}
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

          {/* Right Side - Language & Hamburger */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              <div className="text-white font-bold text-xs border border-white/10 bg-white/5 px-3 py-1.5 rounded-md hover:border-fuchsia-500/50 transition-colors cursor-pointer">
                RS
              </div>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:border-fuchsia-500/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-[#0a0510]/95 backdrop-blur-xl border-t border-white/5">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className="block px-4 py-3 text-sm font-bold tracking-widest text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-fuchsia-500/30"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
              }}
            >
              <span className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-fuchsia-500"></span>
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
