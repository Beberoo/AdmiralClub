import React from 'react';
import { Briefcase, MapPin, ArrowUpRight } from 'lucide-react';

const KarijeraJobs = ({ jobs }) => {
  return (
    <section className="py-20 relative z-10 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center lg:justify-start">
          <Briefcase className="text-fuchsia-500" size={32} />
          <h2 className="text-4xl text-white tracking-tighter uppercase">
            OTVORENE <span className="text-fuchsia-500">POZICIJE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job) => {
            const JobIcon = job.icon;
            return (
              <div
                key={job.id}
                className="group relative bg-[#0a0510] border border-white/5 rounded-[45px] p-10 overflow-hidden hover:border-white/20 transition-all duration-500 shadow-3xl"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
                  <JobIcon size={120} />
                </div>

                <div className="relative z-10">
                  <div className={`mb-6 flex flex-wrap items-center gap-3 ${job.color}`}>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} />
                      <span className="text-[9px] tracking-widest">{job.location}</span>
                    </div>
                    <span className="text-gray-800 hidden sm:inline">/</span>
                    <div className="flex items-center gap-2">
                      <Briefcase size={12} />
                      <span className="text-[9px] tracking-widest text-gray-500">{job.type}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl text-white mb-5 italic leading-tight group-hover:text-fuchsia-400 transition-colors uppercase">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base font-light italic mb-8 lowercase font-sans max-w-md leading-relaxed">
                    {job.highlight}
                  </p>

                  <button className="w-full sm:w-max px-10 py-4 bg-fuchsia-500/90 text-white rounded-3xl text-[10px] tracking-widest hover:bg-fuchsia-400 transition-all shadow-[0_0_24px_rgba(217,70,239,0.35)] flex items-center justify-center gap-2 uppercase font-black">
                    PRIJAVI SE ODMAH <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KarijeraJobs;
