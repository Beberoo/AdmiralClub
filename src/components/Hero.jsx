import React from 'react';
import { MapPin, Zap, Trophy, Crown, Sparkles } from 'lucide-react';

const Hero = () => (
  <div className="relative pt-20 pb-10 overflow-hidden min-h-[900px] flex items-center justify-center">
    {/* Animated Neon Grid Background */}
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(0deg,transparent_24%,rgba(255,0,255,0.05)_25%,rgba(255,0,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,0,255,0.05)_75%,rgba(255,0,255,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,0,255,0.05)_25%,rgba(255,0,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,0,255,0.05)_75%,rgba(255,0,255,0.05)_76%,transparent_77%,transparent)]" style={{ backgroundSize: '60px 60px' }}></div>

    {/* Radial Glows */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-fuchsia-500/30 via-pink-600/20 to-transparent rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-purple-600/20 to-transparent rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Main Content */}
        <div className="flex flex-col justify-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-fuchsia-500/20 to-pink-600/20 border border-fuchsia-500/50 px-6 py-3 rounded-full mb-8 w-fit backdrop-blur-md shadow-[0_0_30px_rgba(217,70,239,0.3)]">
            <Zap size={18} className="text-fuchsia-400 animate-bounce" />
            <span className="text-fuchsia-300 font-black text-sm tracking-[0.3em] uppercase">Dobrodošli u Admiral Club</span>
            <div className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.9] drop-shadow-[0_0_60px_rgba(217,70,239,0.4)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-pink-400 to-purple-400 animate-pulse">OSVOJI</span>
            <br />
            <span className="text-white">MILIONE</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-fuchsia-100 font-black tracking-wide mb-8 uppercase">
            Admiral daje više!
          </p>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed max-w-xl">
            Nad 63 kluba sa najvećim jackpotima u regionu. Isplate do 3.9 miliona RSD! Bez poreza. Odmah.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-gradient-to-br from-fuchsia-600/30 to-purple-900/20 border border-fuchsia-500/40 rounded-2xl p-4 text-center backdrop-blur-sm">
              <div className="text-3xl font-black text-fuchsia-300 mb-1">63</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Lokacija</div>
            </div>
            <div className="bg-gradient-to-br from-pink-600/30 to-rose-900/20 border border-pink-500/40 rounded-2xl p-4 text-center backdrop-blur-sm">
              <div className="text-3xl font-black text-pink-300 mb-1">3.9M</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Maksi Dobit</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-900/20 border border-cyan-500/40 rounded-2xl p-4 text-center backdrop-blur-sm">
              <div className="text-3xl font-black text-cyan-300 mb-1">24/7</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Otvoreno</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-5 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-black text-sm tracking-[0.3em] overflow-hidden hover:scale-110 transition-all duration-500 shadow-[0_0_50px_rgba(217,70,239,0.6)] hover:shadow-[0_0_80px_rgba(236,72,153,0.8)]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
              <span className="relative z-10 flex items-center justify-center gap-2 uppercase">
                <Trophy size={18} />
                Nađi Klub Sada
              </span>
            </button>
            <button className="group relative px-8 py-5 rounded-full border-2 border-cyan-500 text-white font-black text-sm tracking-[0.3em] overflow-hidden hover:scale-105 transition-all duration-500 bg-black/40 backdrop-blur-sm hover:bg-cyan-600/20">
              <span className="relative z-10 flex items-center justify-center gap-2 uppercase">
                <Crown size={18} />
                Loyalty Program
              </span>
            </button>
          </div>
        </div>

        {/* Right Column - Visual Element - Animated Slot Machine */}
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
            {/* Glowing Orb Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-pink-500/10 to-purple-900/20 rounded-full blur-[80px] animate-pulse"></div>

            {/* Main Jackpot Display - Slot Machine Style */}
            <div className="relative z-10">
              {/* Neon Frame */}
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 rounded-3xl opacity-75 blur-xl animate-pulse"></div>
                
                {/* Main Container */}
                <div className="relative bg-gradient-to-b from-[#0a0510] to-[#050208] border-4 border-fuchsia-500/60 rounded-3xl p-8 shadow-2xl">
                  {/* Reel Display */}
                  <div className="flex gap-4 justify-center mb-6">
                    {[7, 7, 7].map((num, idx) => (
                      <div 
                        key={idx}
                        className="relative w-24 h-32 bg-black/60 border-2 border-fuchsia-400/80 rounded-xl flex items-center justify-center overflow-hidden"
                        style={{
                          animation: `spin 3s ease-in-out ${idx * 0.2}s infinite`,
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        <div className="text-6xl font-black text-fuchsia-400 drop-shadow-[0_0_20px_rgba(217,70,239,0.8)]">
                          {num}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent mb-6"></div>

                  {/* Jackpot Amount */}
                  <div className="text-center mb-6">
                    <div className="text-xs text-fuchsia-400 font-black tracking-[0.2em] uppercase mb-2">ADMIRAL JACKPOT</div>
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(217,70,239,0.6)]">
                      3.923.434 RSD
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent mb-4"></div>

                  {/* Status Badge */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-600/30 to-pink-600/30 border border-fuchsia-500/50 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-fuchsia-300 font-bold tracking-widest uppercase">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
          </div>

          <style>{`
            @keyframes spin {
              0%, 100% { transform: rotateX(0deg); }
              50% { transform: rotateX(360deg); }
            }
          `}</style>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
