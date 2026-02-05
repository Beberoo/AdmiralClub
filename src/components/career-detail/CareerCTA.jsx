import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerCTA = ({ jobId }) => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="p-1 rounded-[40px] bg-gradient-to-r from-amber-500 via-fuchsia-600 to-cyan-500">
          <div className="bg-[#050208] rounded-[38px] p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 italic">
              Spreman Za <br />
              <span className="text-fuchsia-500">NOVI IZAZOV?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-light italic max-w-2xl mx-auto">
              Pridruži se Admiral timu i postani deo najeleg iskustva. Svaka prijava nas čini jačima!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
