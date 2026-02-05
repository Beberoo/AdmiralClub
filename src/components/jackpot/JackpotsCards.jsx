import React from 'react';

// Slot Number Component - pojedinačni valjak za slot mašinu
const SlotNumber = ({ number }) => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(parseInt(number) * 10);
    }, 100);
    return () => clearTimeout(timer);
  }, [number]);

  return (
    <div className="relative h-12 md:h-16 w-6 md:w-8 overflow-hidden bg-black/40 rounded-md border border-white/10 inline-block mx-0.5 shadow-inner shadow-black">
      <div 
        className="absolute w-full transition-transform duration-[2000ms] ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center"
        style={{ transform: `translateY(-${offset}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div key={n} className="h-12 md:h-16 flex items-center justify-center font-mono font-black text-3xl md:text-5xl text-white">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

// Slot Counter Component - slot machine-like animacija sa valjcima
const SlotCounter = ({ value, colorClass }) => {
  const chars = value.split('');

  return (
    <div className="flex items-center justify-center lg:justify-start py-4">
      {chars.map((char, index) => (
        isNaN(parseInt(char)) ? (
          <span key={index} className="text-3xl md:text-5xl font-mono font-black text-white/30 px-0.5 self-end mb-1">
            {char}
          </span>
        ) : (
          <SlotNumber key={index} number={char} />
        )
      ))}
      <span className={`text-lg font-black ml-3 self-end mb-1 uppercase ${colorClass}`}>RSD</span>
    </div>
  );
};

const JackpotsCards = ({ jackpotLevels }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 mb-32">
      {jackpotLevels.map((jack) => {
        const Icon = jack.icon;
        return (
          <div key={jack.id} className={`group relative bg-[#0a0510]/80 backdrop-blur-xl border-2 ${jack.borderColor} rounded-[40px] p-10 overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl ${jack.glow}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${jack.bg} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className={`p-8 rounded-[30px] bg-black/50 border border-white/10 ${jack.color} shadow-2xl`}>
                <Icon size={56} strokeWidth={1} />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <span className={`text-xs font-black tracking-[0.5em] ${jack.color} uppercase`}>{jack.id} MEGA LEVEL</span>
                </div>
                
                <h3 className="text-white text-5xl font-black tracking-tighter mb-6 italic uppercase group-hover:tracking-widest transition-all duration-500">
                  {jack.title}
                </h3>
                
                <div className="transform group-hover:scale-105 transition-transform duration-500">
                  <SlotCounter value={jack.amount} colorClass={jack.color} />
                </div>
                
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Aktivno na 350+ aparata</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className={`absolute -top-20 -right-20 w-40 h-40 ${jack.color.replace('text', 'bg')}/10 blur-[60px]`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default JackpotsCards;
