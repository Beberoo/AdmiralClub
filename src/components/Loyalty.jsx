import React, { useState, useEffect } from 'react';

const ChevronLine = ({ yOffset, goldGradient }) => (
  <path 
    d={`M20 ${30 + yOffset} L50 ${55 + yOffset} L80 ${30 + yOffset}`} 
    fill="none" 
    stroke={goldGradient} 
    strokeWidth="10" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  />
);

const RankIcon = ({ level, count }) => {
  const goldGradient = "url(#gold-premium)";
  const isAdmiral = level === 'Admiral';
  let spacing = 15;
  let startY = 0;
  if (isAdmiral) {
    const totalHeight = 55;
    spacing = count > 1 ? totalHeight / (count - 1) : 0;
    startY = -20;
  }
  const viewBox = "0 0 100 120";
  return (
    <svg viewBox={viewBox} className="w-full h-full drop-shadow-2xl">
      <defs>
        <linearGradient id="gold-premium" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>
      {[...Array(count)].map((_, i) => (
        <ChevronLine key={i} yOffset={(isAdmiral ? startY : 0) + i * spacing} goldGradient={goldGradient} />
      ))}
    </svg>
  );
};

const CornerDecor = ({ color }) => (
  <>
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-30 opacity-70" style={{ borderColor: color }}></div>
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-30 opacity-70" style={{ borderColor: color }}></div>
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-30 opacity-70" style={{ borderColor: color }}></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-30 opacity-70" style={{ borderColor: color }}></div>
  </>
);

const Loyalty = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const levels = [
    { 
      id: 'Officer', 
      name: 'OFFICER', 
      lines: 1, 
      height: 'h-[300px]', 
      mobileWidth: 'w-[75%]',
      color: 'from-[#1a0b2e] to-black', 
      border: 'border-white/5' 
    },
    { 
      id: 'Captain', 
      name: 'CAPTAIN', 
      lines: 2, 
      height: 'h-[340px]', 
      mobileWidth: 'w-[80%]',
      color: 'from-[#240e3f] to-black', 
      border: 'border-blue-900/20' 
    },
    { 
      id: 'Major', 
      name: 'MAJOR', 
      lines: 3, 
      height: 'h-[380px]', 
      mobileWidth: 'w-[85%]',
      color: 'from-[#2e1250] to-black', 
      border: 'border-zinc-800/20' 
    },
    { 
      id: 'General', 
      name: 'GENERAL', 
      lines: 4, 
      height: 'h-[420px]', 
      mobileWidth: 'w-[90%]',
      color: 'from-[#381661] to-black', 
      border: 'border-amber-900/20' 
    },
    { 
      id: 'Admiral', 
      name: 'ADMIRAL', 
      lines: 5, 
      height: 'h-[470px]', 
      mobileWidth: 'w-full',
      color: 'from-[#4c1d95] via-[#240e3f] to-black', 
      border: 'border-yellow-500/30', 
      isElite: true 
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#05020a] flex flex-col items-center justify-center p-4 overflow-hidden font-sans">
      {/* Blend Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#050208]/50 to-transparent z-20 pointer-events-none"></div>
      
      {/* Background image below glowing orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/pozadina2.jpg"
          alt="pozadina"
          className="w-full h-full object-cover opacity-10 select-none"
          style={{position: 'absolute', inset: 0, zIndex: 0}}
          draggable={false}
        />
      </div>
      {/* Glowing Orbs Background (Instagram section style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Large Purple Orb - Top Left */}
        <div className={`absolute top-20 -left-40 rounded-full blur-[120px] animate-pulse ${isMobile ? 'w-[250px] h-[250px]' : 'w-[500px] h-[500px]'}`} style={{backgroundColor: 'rgba(147, 51, 234, 0.2)'}}></div>
        {/* Fuchsia Orb - Top Right */}
        <div className={`absolute top-0 -right-2 rounded-full blur-[100px] animate-pulse ${isMobile ? 'w-[150px] h-[150px]' : 'w-[300px] h-[300px]'}`} style={{backgroundColor: 'rgba(217, 70, 239, 0.25)', animationDelay: '1s'}}></div>
        {/* Pink Orb - Middle Left */}
        <div className={`absolute top-1/2 -left-20 rounded-full blur-[90px] animate-pulse ${isMobile ? 'w-[120px] h-[120px]' : 'w-[250px] h-[250px]'}`} style={{backgroundColor: 'rgba(219, 39, 119, 0.15)', animationDelay: '2s'}}></div>
        {/* Cyan Orb - Bottom Right */}
        <div className={`absolute bottom-40 -right-40 rounded-full blur-[110px] animate-pulse ${isMobile ? 'w-[200px] h-[200px]' : 'w-[450px] h-[450px]'}`} style={{backgroundColor: 'rgba(6, 182, 212, 0.2)', animationDelay: '1.5s'}}></div>
        {/* Purple Orb - Bottom Center */}
        <div className={`absolute bottom-20 left-1/3 rounded-full blur-[80px] animate-pulse ${isMobile ? 'w-[140px] h-[140px]' : 'w-[300px] h-[300px]'}`} style={{backgroundColor: 'rgba(168, 85, 247, 0.18)', animationDelay: '0.5s'}}></div>
        {/* Amber Orb - Middle Right */}
        <div className={`absolute top-2/3 right-1/4 rounded-full blur-[85px] animate-pulse ${isMobile ? 'w-[130px] h-[130px]' : 'w-[280px] h-[280px]'}`} style={{backgroundColor: 'rgba(59, 130, 246, 0.15)', animationDelay: '2.5s'}}></div>
      </div>

      {/* Naslov Admiral Loyalty */}
      <div className="relative z-10 text-center mb-4 md:mb-6 px-4">
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-xl">
          <span className="text-white">ADMIRAL</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-500">LOYALTY</span>
        </h2>
      </div>
      {/* Podnaslov */}
      <div className="relative z-10 flex justify-center mb-8 md:mb-14 px-4">
        <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl px-4 md:px-6 py-3 md:py-4 w-full max-w-2xl shadow-lg shadow-black/10">
          <p className="text-center text-white/70 text-sm md:text-2xl italic font-light tracking-wide leading-relaxed drop-shadow-sm">
            <span className="block">
              Uvodi Vas u svet prestiža<br className="hidden md:inline" />
              <span className="text-white/80 font-medium">rezervisan samo za naše najvernije članove</span>
            </span>
          </p>
        </div>
      </div>

      {/* Container - items-end osigurava da visinska progresija kreće sa dna */}
      <div className={`flex ${isMobile ? 'flex-col w-full px-4 max-w-md gap-3' : 'flex-row items-end justify-center gap-2 md:gap-4 w-full max-w-[1400px]'} pb-12 relative z-10`}>
        {levels.map((level,i) => (
          <div
            key={level.id}
            className={`
              group relative ${isMobile ? `${level.mobileWidth} h-32 flex items-center` : `flex-1 min-w-[120px] md:min-w-[200px] ${level.height}`}
              cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
              ${isMobile ? '' : 'hover:-translate-y-6'}
            `}
          >
            {/* Telo kartice */}
            <div className={`
              relative ${isMobile ? 'w-full h-full flex items-center' : 'h-full w-full'} rounded-xl border-t-2 border-x
              bg-gradient-to-b ${level.color} ${level.border}
              bg-opacity-80
              shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]
              ${level.isElite ? 'shadow-yellow-500/10 border-yellow-500/40' : 'border-purple-500/20'}
            `}
          
            >
              {/* svg trougao koji ce biti kao border u coskovima kartice u obliku zlatnog trougla */}
              {/* gornji lijevi trougao */}
              <svg className={`absolute top-0 left-0 z-30 scale-120 ${isMobile ? 'w-3 h-3' : 'w-6 h-6'}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,0 100,0 0,100" fill="#fbbf24" />
              </svg>
              {/* gornji desni trougao */}
              <svg className={`absolute top-0 right-0 z-30 scale-120 ${isMobile ? 'w-3 h-3' : 'w-6 h-6'}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,0 100,100 0,0" fill="#fbbf24" />
              </svg>
              
              {/* Faded rank number na mobilnoj verziji - desni ugao */}
              {isMobile && (
                <div className="absolute top-2 right-3 text-white/40 font-black text-sm tracking-wider z-20 select-none border border-white/20 rounded-lg px-2 py-0.5">
                  LVL {level.lines}
                </div>
              )}
              {/* Ljubičasti gradient na dnu kartice */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-fuchsia-900/70 via-purple-900/40 to-transparent opacity-80 pointer-events-none z-10"></div>
              
              {/* Dekorativni uglovi */}
              <CornerDecor color={level.isElite ? "#fbbf24" : "#fbbf2444"} />

              {/* Glare/Odsjaj - Vidljiv samo na hover */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-full top-0 h-[200%] w-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] transition-all duration-[1500ms] group-hover:translate-x-[250%]"></div>
              </div>

              {/* Suptilna karbon tekstura */}
              <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
              
              {/* Rank Container */}
              <div className={`${isMobile ? 'absolute left-4 w-16 h-16' : 'absolute top-[20%] left-1/2 -translate-x-1/2 w-[65%] aspect-square'} flex items-center justify-center`}>
                <div className={`
                  w-full h-full transition-all duration-700
                  ${level.isElite ? 'drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]' : 'group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]'}
                `}>
                  <RankIcon level={level.id} count={level.lines} />
                </div>
              </div>

              {/* Text Area - Zlatni fontovi */}
              <div className={`${isMobile ? 'absolute left-28 right-4 h-full flex flex-col justify-center' : 'absolute bottom-10 left-0 w-full px-2'} text-center ${isMobile ? 'text-left' : ''}`}>
                <h3 className={`
                  ${isMobile ? 'text-lg' : 'text-xs md:text-2xl'} font-black italic tracking-[0.2em] md:tracking-[0.4em] transition-all duration-500
                  text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-400 to-yellow-600
                  ${level.isElite ? 'drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]' : 'opacity-80 group-hover:opacity-100'}
                `}>
                  {level.name}
                </h3>
                <div className={`
                  ${isMobile ? 'mt-2 h-[1px]' : 'mx-auto mt-4 h-[2px]'} transition-all duration-700
                  ${level.isElite ? 'bg-yellow-500 w-16 shadow-[0_0_12px_#eab308]' : 'bg-yellow-700/30 w-8 group-hover:bg-yellow-500 group-hover:w-16'}
                `}></div>
              </div>

              {/* Glass Reflection na vrhu */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Podni odsjaj */}
            <div className={`
              absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-4 blur-xl transition-opacity duration-700
              ${level.isElite ? 'bg-yellow-500/15 opacity-100' : 'bg-purple-600/5 opacity-0 group-hover:opacity-100'}
            `}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loyalty;
