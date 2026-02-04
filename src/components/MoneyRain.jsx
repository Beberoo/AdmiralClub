import React, { useState, useEffect } from 'react';
import { Coins, DollarSign, Gem, Star } from 'lucide-react';

const MoneyRain = ({ yellowOnly = false }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const icons = yellowOnly ? [Coins, DollarSign, Gem, Star] : [Coins, DollarSign, Gem, Star];
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
      size: 10 + Math.random() * 20,
      Icon: icons[Math.floor(Math.random() * icons.length)],
    }));
    setParticles(newParticles);
  }, [yellowOnly]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute text-yellow-500/20 animate-fall"
          style={{
            left: `${p.left}%`,
            top: `-50px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <p.Icon size={p.size} />
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation-name: fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

export default MoneyRain;
