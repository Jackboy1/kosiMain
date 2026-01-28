
import React, { useState } from 'react';
import { ChevronRight, Info } from 'lucide-react';

const phases = [
  {
    step: '01',
    title: 'Discovery',
    short: 'Deep-dive analysis into infrastructure.',
    full: 'We conduct a comprehensive audit of your current tech debt, organizational workflows, and long-term scalability targets. This ensures our engineering efforts solve your most critical bottlenecks first.'
  },
  {
    step: '02',
    title: 'Prototyping',
    short: 'Rapid development of core modules.',
    full: 'Before a full-scale build, we deliver a functional proof-of-concept. This allows stakeholders to interact with the architecture early, minimizing risk and ensuring alignment with user needs.'
  },
  {
    step: '03',
    title: 'Security Audit',
    short: 'Exhaustive vulnerability testing.',
    full: 'Our security engineers perform deep-packet analysis, smart contract fuzzing, and penetration testing. We don\'t just build features; we build fortified digital strongholds.'
  },
  {
    step: '04',
    title: 'Scale & Deploy',
    short: 'Hardened production release.',
    full: 'Deployment is just the beginning. We provide 24/7 resilience monitoring and automated scaling triggers to ensure your platform remains stable regardless of traffic surges or external threats.'
  }
];

export const Methodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-20 py-24">
      <div className="text-center space-y-6">
        <h3 className="text-zinc-600 text-sm tracking-[0.6em] uppercase font-black">Operational Framework</h3>
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">How we lead you to the future.</h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
        {phases.map((phase, i) => (
          <div 
            key={i} 
            onClick={() => setActiveStep(activeStep === i ? null : i)}
            className={`group relative bg-zinc-900/30 border p-10 rounded-3xl cursor-pointer transition-all duration-500 ${activeStep === i ? 'border-blue-500/50 bg-zinc-900/60 ring-4 ring-blue-500/5' : 'border-zinc-800/50 hover:border-zinc-700'}`}
          >
            <span className={`text-5xl font-heading font-black absolute top-6 right-8 transition-colors ${activeStep === i ? 'text-blue-500/30' : 'text-zinc-800 group-hover:text-zinc-700'}`}>
              {phase.step}
            </span>
            
            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <h4 className={`font-black tracking-[0.2em] uppercase text-base transition-colors ${activeStep === i ? 'text-blue-400' : 'text-white'}`}>
                  {phase.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  {phase.short}
                </p>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ${activeStep === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-zinc-400 text-xs leading-relaxed pt-4 border-t border-zinc-800 italic">
                  {phase.full}
                </p>
              </div>

              <div className="pt-4 flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 group-hover:text-blue-500 transition-colors">
                {activeStep === i ? 'Close Protocol' : 'Expand Details'}
                <ChevronRight className={`w-3 h-3 ml-2 transition-transform ${activeStep === i ? 'rotate-90' : ''}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
