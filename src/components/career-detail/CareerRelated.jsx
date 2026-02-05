import React from 'react';
import { Link, ArrowUpRight } from 'lucide-react';

const CareerRelated = ({ jobs, currentJobId }) => {
  const relatedJobs = jobs.filter(job => job.id !== currentJobId).slice(0, 3);

  return (
    <section className="py-20 px-6 relative z-10 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white uppercase text-center mb-16 italic">
          Ostale <span className="text-fuchsia-500">Pozicije</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedJobs.map((job) => {
            const JobIcon = job.icon;
            return (
              <div
                key={job.id}
                className="group relative h-[300px] rounded-[30px] overflow-hidden border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300 bg-[#0a0510] p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    <JobIcon size={40} className={`${job.color}`} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 italic uppercase line-clamp-2 group-hover:text-fuchsia-400 transition-colors">
                    {job.title}
                  </h3>
                  <p className={`text-[9px] tracking-widest mb-3 ${job.color}`}>
                    {job.location}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <a
                    href={`/career/${job.id}`}
                    className="flex items-center gap-1 text-[9px] font-black text-white hover:text-fuchsia-500 transition-colors uppercase whitespace-nowrap"
                  >
                    DETALJNI INFO{' '}
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerRelated;
