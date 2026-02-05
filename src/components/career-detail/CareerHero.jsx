import React from 'react';

const CareerHero = ({ job }) => {
  const JobIcon = job.icon;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-600/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-500/30 rounded-full">
            <JobIcon size={64} className="text-fuchsia-500" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 italic leading-tight tracking-tighter uppercase">
          {job.title}
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="px-6 py-3 bg-fuchsia-600/20 border border-fuchsia-500/30 rounded-full">
            <p className="text-fuchsia-400 text-sm font-black uppercase tracking-widest">
              📍 {job.location}
            </p>
          </div>
          <div className="px-6 py-3 bg-amber-600/20 border border-amber-500/30 rounded-full">
            <p className="text-amber-400 text-sm font-black uppercase tracking-widest">
              ⏰ {job.type}
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-xl font-light italic max-w-2xl mx-auto lowercase font-sans">
          {job.highlight}
        </p>
      </div>
    </section>
  );
};

export default CareerHero;
