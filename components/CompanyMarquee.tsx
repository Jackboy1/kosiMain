
import React from 'react';

const companies = [
  'FLUTTERWAVE', 'INTERSWITCH', 'GTBANK', 'ANDELA', 'MTN NIGERIA',
  'GOOGLE', 'AMAZON Web Services', 'ETHEREUM Foundation', 'STRIPE', 'PAYSACK', 'OPAY', 'REDBULL'
];

export const CompanyMarquee: React.FC = () => {
  return (
    <div className="w-full py-16 overflow-hidden border-y border-zinc-900/50 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h4 className="text-[11px] tracking-[0.6em] text-zinc-600 uppercase font-black text-center md:text-left">Trusted globally and across the African Tech Ecosystem</h4>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-24">
          {companies.map((company, i) => (
            <span key={i} className="text-2xl md:text-4xl font-heading font-black text-zinc-800 hover:text-zinc-500 transition-colors cursor-default tracking-tighter">
              {company}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-24">
          {companies.map((company, i) => (
            <span key={i} className="text-2xl md:text-4xl font-heading font-black text-zinc-800 hover:text-zinc-500 transition-colors cursor-default tracking-tighter">
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
