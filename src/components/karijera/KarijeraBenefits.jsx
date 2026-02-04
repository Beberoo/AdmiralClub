import React from 'react';

const KarijeraBenefits = ({ benefits }) => {
  return (
    <section className="py-20 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white tracking-tighter mb-4 uppercase">
            ZAŠTO <span className="text-fuchsia-500">ADMIRAL?</span>
          </h2>
          <div className="h-1 w-20 bg-fuchsia-600 mx-auto rounded-full shadow-[0_0_10px_#d946ef]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const BenefitIcon = benefit.icon;
            return (
              <div
                key={i}
                className="group p-8 bg-[#0a0510] border border-white/5 rounded-[40px] hover:border-fuchsia-500/30 transition-all duration-500 shadow-2xl text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto text-fuchsia-500 group-hover:scale-110 transition-transform">
                  <BenefitIcon size={28} />
                </div>
                <h3 className="text-xl text-white mb-3 italic uppercase">{benefit.title}</h3>
                <p className="text-gray-500 text-[11px] font-light lowercase font-sans leading-relaxed px-2">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KarijeraBenefits;
