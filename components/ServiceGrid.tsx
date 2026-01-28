
import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  BrainCircuit, 
  Binary, 
  Coins, 
  Settings 
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

export const services: Service[] = [
  { 
    id: 'consulting', 
    title: 'Consulting', 
    description: 'Strategic guidance for navigating complex digital transformations.',
    Icon: Users 
  },
  { 
    id: 'cyber-security', 
    title: 'Cyber Security', 
    description: 'Advanced multi-layered defense architectures for enterprise assets.',
    Icon: ShieldCheck 
  },
  { 
    id: 'ai', 
    title: 'AI', 
    description: 'Custom machine learning models and cognitive automation systems.',
    Icon: BrainCircuit 
  },
  { 
    id: 'nft', 
    title: 'NFT', 
    description: 'Blockchain-driven digital ownership and asset tokenization.',
    Icon: Binary 
  },
  { 
    id: 'crypto', 
    title: 'Crypto', 
    description: 'Secure DeFi infrastructure and cryptographic wallet protocols.',
    Icon: Coins 
  },
  { 
    id: 'automation', 
    title: 'Automation', 
    description: 'Intelligent workflow optimization and industrial-grade software robotics.',
    Icon: Settings 
  },
];

interface ServiceGridProps {
  onSelectService: (id: string) => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ onSelectService }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {services.map((service) => (
        <div 
          key={service.id} 
          onClick={() => onSelectService(service.id)}
          className="service-card glow-border rounded-2xl p-8 flex flex-col items-start text-left group cursor-pointer transition-all duration-500 hover:-translate-y-1"
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <service.Icon 
              className="w-12 h-12 text-zinc-500 group-hover:text-blue-400 transition-all duration-500 transform group-hover:scale-110" 
              strokeWidth={1}
            />
          </div>
          <h3 className="text-xl font-heading font-semibold text-zinc-200 group-hover:text-white tracking-wide uppercase mb-3">
            {service.title}
          </h3>
          <p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed font-light">
            {service.description}
          </p>
          <div className="mt-6 w-8 h-1 bg-zinc-800 group-hover:w-full group-hover:bg-blue-600/50 transition-all duration-700"></div>
        </div>
      ))}
    </div>
  );
};
