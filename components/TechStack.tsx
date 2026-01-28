
import React from 'react';

const technologies = [
  { name: 'Rust', category: 'Backend Systems' },
  { name: 'Solidity', category: 'Smart Contracts' },
  { name: 'React/Next', category: 'Interfaces' },
  { name: 'Python', category: 'Neural Networks' },
  { name: 'PostgreSQL', category: 'Persistence' },
  { name: 'AWS/GCP', category: 'Infrastructure' },
  { name: 'TypeScript', category: 'Logic Layer' },
  { name: 'Docker', category: 'Orchestration' }
];

export const TechStack: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {technologies.map((tech, i) => (
          <div key={i} className="group border border-zinc-900 rounded-3xl p-8 hover:bg-zinc-900/30 transition-all duration-300 ring-1 ring-white/5 hover:ring-white/10">
            <h4 className="text-zinc-200 font-heading font-black tracking-widest text-lg mb-2 group-hover:text-blue-500 transition-colors uppercase">
              {tech.name}
            </h4>
            <p className="text-zinc-600 text-[11px] tracking-[0.4em] uppercase font-black">
              {tech.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
