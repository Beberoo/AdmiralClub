import React, { useState, useEffect } from 'react';
import { Gem, Disc, Club, Spade, Dices, Crown, Star, Instagram } from 'lucide-react';

const ContentGrid = () => {
  const games = [
    { name: 'SLOTS', icon: Gem, color: 'text-fuchsia-400', bg: 'from-fuchsia-600/30 to-purple-900/30', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400' },
    { name: 'ROULETTE', icon: Disc, color: 'text-cyan-400', bg: 'from-cyan-600/30 to-blue-900/30', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400' },
    { name: 'POKER', icon: Club, color: 'text-amber-400', bg: 'from-amber-600/30 to-orange-900/30', img: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=400' },
    { name: 'BLACKJACK', icon: Spade, color: 'text-rose-400', bg: 'from-rose-600/30 to-red-900/30', img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400' },
    { name: 'DICE', icon: Dices, color: 'text-purple-400', bg: 'from-purple-600/30 to-indigo-900/30', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400' },
    { name: 'BACCARAT', icon: Crown, color: 'text-yellow-400', bg: 'from-yellow-600/30 to-amber-900/30', img: 'https://images.unsplash.com/photo-1596742572435-081d21b023be?q=80&w=400' },
    { name: 'KENO', icon: Star, color: 'text-emerald-400', bg: 'from-emerald-600/30 to-green-900/30', img: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=400' },
    { name: 'WHEEL OF FORTUNE', icon: Disc, color: 'text-red-400', bg: 'from-red-600/30 to-rose-900/30', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400' },
    { name: 'SCRATCH', icon: Gem, color: 'text-pink-400', bg: 'from-pink-600/30 to-fuchsia-900/30', img: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=400' },
    { name: 'VIDEO POKER', icon: Spade, color: 'text-blue-400', bg: 'from-blue-600/30 to-cyan-900/30', img: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=400' },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prilagođeni parametri za mobile i desktop
  const RADIUS = isMobile ? 400 : 800;
  const VISIBLE_ANGLE = Math.PI / 4;
  const ITEM_SPACING = Math.PI / 10;
  const CENTER_Y_OFFSET = RADIUS + 40;
  const ORBIT_HEIGHT = isMobile ? 300 : 400;
  const CARD_WIDTH_CLASS = isMobile ? 'w-24' : 'md:w-40 w-32';
  
  // Početni offset je sredina liste - postavi gdje je srednja igrica vidljiva
  const INITIAL_OFFSET = -(games.length / 2) * ITEM_SPACING;
  const MAX_ROTATION = 0; // Gornja granica (ne može ići dalje desno)
  const MIN_ROTATION = -((games.length - 1) * ITEM_SPACING); // Donja granica (ne može ići dalje lijevo)
  
  const [rotationOffset, setRotationOffset] = useState(INITIAL_OFFSET);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0); 

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartRotation(rotationOffset);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartRotation(rotationOffset);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const deltaX = clientX - startX;
    const deltaRotation = (deltaX / RADIUS) * 1.5; 
    let newOffset = startRotation + deltaRotation;
    
    // Primjeni limite
    newOffset = Math.max(MIN_ROTATION, Math.min(MAX_ROTATION, newOffset));
    
    setRotationOffset(newOffset);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const getPosition = (index) => {
      const baseAngle = -Math.PI / 2;
      const angle = baseAngle + (index * ITEM_SPACING) + rotationOffset;
      const x = RADIUS * Math.cos(angle);
      const y = RADIUS * Math.sin(angle);
      const distanceFromTop = Math.abs(angle - baseAngle);
      const isVisible = angle > -Math.PI && angle < 0;
      return { x, y, angle, distanceFromTop, isVisible };
  };

  return (
    <div className="py-12 md:py-24 bg-[#050208] overflow-hidden relative" 
         onMouseUp={handleEnd} 
         onMouseLeave={handleEnd}
         onTouchEnd={handleEnd}
    >
      {/* Glowing Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute top-40 -right-32 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-fuchsia-600/25 rounded-full blur-[70px] md:blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 -left-20 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-pink-600/15 rounded-full blur-[60px] md:blur-[90px] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 -right-40 w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-cyan-500/20 rounded-full blur-[75px] md:blur-[110px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-[180px] md:w-[300px] h-[180px] md:h-[300px] bg-purple-500/18 rounded-full blur-[60px] md:blur-[80px] animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-[160px] md:w-[280px] h-[160px] md:h-[280px] bg-amber-500/15 rounded-full blur-[55px] md:blur-[85px] animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Headlines */}
        <div className="flex justify-between items-end mb-6 md:mb-8 border-b border-white/10 pb-3 md:pb-4">
          <h3 className="text-xl md:text-2xl text-white font-bold">Aktuelno</h3>
          <a href="#" className="text-fuchsia-500 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">Vidi sve</a>
        </div>

        {/* Promocije - Main Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-24">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video bg-[#11051c] border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden group hover:border-fuchsia-500/40 transition-all shadow-lg hover:shadow-fuchsia-900/20 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-50"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/10 to-transparent"></div>
              <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-300">
                 <div className="bg-fuchsia-600 w-8 md:w-12 h-1 mb-3 md:mb-4 mx-auto rounded-full"></div>
                 <span className="text-white font-bold text-lg md:text-xl tracking-wide">PROMOCIJA {i}</span>
                 <p className="text-gray-500 text-xs mt-2">Saznajte više &rarr;</p>
              </div>
            </div>
          ))}
        </div>

        {/* CASINO GAMES ORBITAL SLIDER */}
        <div className="relative pt-0 pb-5 md:pb-10 mb-16 md:mb-24 select-none">
             <div className="text-center mb-12 md:mb-20 relative z-10">
                <h3 className="text-white font-black text-2xl md:text-3xl tracking-widest uppercase mb-2">Popularne Igre</h3>
                <p className="text-gray-500 text-xs tracking-wider flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
                    Povuci da zavrtiš orbitu
                </p>
             </div>

             {/* Orbital Container */}
             <div 
                className={`relative w-full overflow-hidden cursor-grab active:cursor-grabbing`}
                style={{ height: `${ORBIT_HEIGHT}px` }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
             >
                {/* The Visible Orbit Line */}
                <div 
                    className="absolute border border-fuchsia-500/30 rounded-full shadow-[0_0_50px_rgba(217,70,239,0.1)] pointer-events-none"
                    style={{
                        width: `${RADIUS * 2}px`,
                        height: `${RADIUS * 2}px`,
                        left: '50%',
                        top: `${80}px`,
                        transform: 'translateX(-50%)'
                    }}
                >
                    {/* Glowing effect on the line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent blur-md"></div>
                </div>

                {/* Cards on Orbit */}
                {games.map((game, idx) => {
                    const pos = getPosition(idx);
                    const Icon = game.icon;

                    if (pos.angle > 0.5 || pos.angle < -Math.PI - 0.5) return null;

                    const normalizedDist = Math.min(pos.distanceFromTop, 1);
                    const scale = 1 - (normalizedDist * 0.3);
                    const opacity = 1 - (normalizedDist * 0.8);
                    const zIndex = Math.round((1 - normalizedDist) * 100);

                    return (
                        <div 
                            key={idx}
                            className={`absolute aspect-[3/4] group ${CARD_WIDTH_CLASS} overflow-hidden`}
                            style={{
                                left: '50%',
                                top: `${CENTER_Y_OFFSET + 80}px`,
                                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${pos.angle + Math.PI/2}rad) scale(${scale})`,
                                opacity: Math.max(0, opacity),
                                zIndex: zIndex,
                                transition: isDragging ? 'none' : 'transform 0.5s ease-out, opacity 0.5s ease-out',
                            }}
                        >
                             <div className="w-full h-full relative rounded-2xl overflow-hidden">
                                <img 
                                   src={game.img} 
                                   alt={game.name}
                                   className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${game.bg} border border-white/10 rounded-2xl shadow-2xl group-hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] group-hover:border-fuchsia-500/80 transition-all`}>
                                   <div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity"></div>
                                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagonal-lines.png')]"></div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl"></div>

                                <div className="relative h-full flex flex-col items-center justify-center p-2 md:p-4 text-center z-10">
                                    <div className={`w-14 md:w-20 h-14 md:h-20 rounded-full bg-gradient-to-br ${game.bg} flex items-center justify-center mb-3 md:mb-6 ${game.color} shadow-[0_0_30px_rgba(217,70,239,0.5)] border-2 border-white/40 group-hover:border-white/80 transition-all group-hover:scale-125 group-hover:shadow-[0_0_50px_rgba(217,70,239,0.8)]`}>
                                        <Icon size={isMobile ? 28 : 40} strokeWidth={1} />
                                    </div>
                                    <span className="text-white font-black text-[10px] md:text-xs tracking-widest uppercase group-hover:text-fuchsia-200 transition-colors drop-shadow-lg">{game.name}</span>
                                </div>
                             </div>
                        </div>
                    );
                })}
             </div>
        </div>

        {/* Instagram Feed */}
        <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 text-white font-bold text-base md:text-lg mb-6 md:mb-8">
               <Instagram className="text-fuchsia-500" size={isMobile ? 20 : 24} />
               <span>@admiralclub</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/5] bg-[#0a0510] border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-60"></div>
                   <div className="relative z-10 text-center p-4 md:p-6 border border-white/5 bg-white/5 backdrop-blur-sm rounded-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white font-bold block mb-1 text-sm">Instagram Post</span>
                      <span className="text-gray-400 text-xs">Pogledaj objavu</span>
                   </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;
