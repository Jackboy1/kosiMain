
import React from 'react';
import { services } from './ServiceGrid';
import { ArrowLeft, CheckCircle2, Globe, Shield, Zap, GraduationCap } from 'lucide-react';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  onContact: () => void;
}

interface DetailRichContent {
  about: string;
  realWorldScenario: { title: string; description: string };
  kosinkoImpact: string;
  trainingExpertise: string;
  specs: string[];
  modules: string[];
}

const detailContent: Record<string, DetailRichContent> = {
  'consulting': {
    about: 'Strategic digital transformation is not just about adopting new tools; it is about re-architecting your business logic for a cloud-native, AI-integrated future.',
    realWorldScenario: {
      title: 'Legacy Banking Migration',
      description: 'We helped a regional bank move from a 20-year-old monolithic core to a microservices architecture, reducing transaction latency by 40%.'
    },
    kosinkoImpact: 'We act as your CTO-as-a-Service, ensuring your technology roadmap aligns perfectly with market demands and internal scaling capabilities.',
    trainingExpertise: 'Our "Architecture Masterclass" trains your internal leads to maintain and evolve complex systems using industry-standard design patterns.',
    specs: ['Digital Maturity Audit', 'Cloud Migration Roadmap', 'Legacy System Modernization'],
    modules: ['Enterprise Strategy', 'Risk Assessment', 'Executive Coaching']
  },
  'cyber-security': {
    about: 'In a world of zero-day exploits, perimeter defense is dead. We build resilient, self-healing security architectures based on the Principle of Least Privilege.',
    realWorldScenario: {
      title: 'Global E-commerce Protection',
      description: 'Implemented a Zero-Trust network for a retailer, stopping a massive SQL injection attempt within seconds of detection.'
    },
    kosinkoImpact: 'We deploy multi-layered defense-in-depth, including automated threat hunting and AI-driven anomaly detection.',
    trainingExpertise: 'Our "Red Team Simulation" practices give your staff real-world experience in defending against sophisticated phishing and ransomware attacks.',
    specs: ['Zero-Trust Architecture', 'Real-time Threat Hunting', 'Penetration Testing'],
    modules: ['Network Hardening', 'Identity Management', 'Compliance (ISO/SOC2)']
  },
  'ai': {
    about: 'AI is the engine of the new economy. We move beyond simple chatbots to create cognitive automation that solves genuine bottlenecks.',
    realWorldScenario: {
      title: 'Supply Chain Optimization',
      description: 'Developed a predictive model for a logistics firm that reduced fuel costs by 12% through intelligent route and load management.'
    },
    kosinkoImpact: 'We help you harness your own data to build proprietary models that give you an unassailable competitive advantage.',
    trainingExpertise: 'We provide hands-on "Data Science Foundations" for your analysts, teaching them how to maintain and fine-tune models in production.',
    specs: ['Custom LLM Fine-tuning', 'Predictive Analytics', 'Computer Vision'],
    modules: ['Data Engineering', 'Neural Network Design', 'Automated Insights']
  },
  'nft': {
    about: 'Non-Fungible Tokens are the blueprint for digital ownership. We build the infrastructure for utility-driven assets that provide long-term value.',
    realWorldScenario: {
      title: 'Real Estate Tokenization',
      description: 'Created a fractional ownership platform for luxury properties in Lagos, allowing micro-investments through secure smart contracts.'
    },
    kosinkoImpact: 'Our focus is on utility. We ensure your NFT project has robust metadata, secure minting logic, and seamless marketplace integration.',
    trainingExpertise: 'Learn "Web3 Product Management" to understand how to build community-driven economies around digital assets.',
    specs: ['ERC-721/1155 Standards', 'Minting Engine Development', 'Marketplace Integration'],
    modules: ['Dynamic Metadata', 'Royalty Protocols', 'Community Tooling']
  },
  'crypto': {
    about: 'Decentralized Finance is re-imagining how money moves. We build the secure bridges, protocols, and wallets that power this revolution.',
    realWorldScenario: {
      title: 'Cross-Border Payment Protocol',
      description: 'Built a stablecoin-based settlement system for a pan-African tech firm, reducing transfer fees from 7% to less than 0.5%.'
    },
    kosinkoImpact: 'Security is paramount. We conduct rigorous audits of all smart contracts to protect user capital and maintain system integrity.',
    trainingExpertise: 'Our "Solidity Deep-Dive" trains developers in high-security coding practices and EVM optimization.',
    specs: ['EVM Smart Contracts', 'DeFi Protocol Audits', 'MPC Wallet Security'],
    modules: ['Liquidity Pools', 'Staking Architectures', 'Cross-chain Bridges']
  },
  'automation': {
    about: 'Efficiency is the difference between survival and dominance. We automate the repetitive so your team can focus on the creative.',
    realWorldScenario: {
      title: 'Automated Compliance Reporting',
      description: 'Reduced a fintech firm\'s monthly compliance reporting time from 5 days to 15 minutes using intelligent RPA and data piping.'
    },
    kosinkoImpact: 'We identify manual bottlenecks and implement elegant code-based solutions that grow alongside your business.',
    trainingExpertise: 'Our "Workflow Engineering" workshop empowers your operations team to create their own automated scripts and pipelines.',
    specs: ['Robotic Process Automation', 'CI/CD Pipeline Optimization', 'Custom Scripting'],
    modules: ['Workflow Mapping', 'Bespoke Tooling', 'System Integration']
  }
};

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack, onContact }) => {
  const service = services.find(s => s.id === serviceId);
  const content = detailContent[serviceId];

  if (!service || !content) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-20 pb-20">
      <button 
        onClick={onBack}
        className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors uppercase text-sm tracking-[0.4em] font-bold"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Matrix
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Hero Info */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <div className="inline-block p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
              <service.Icon className="w-14 h-14 text-blue-400" strokeWidth={1} />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black metallic-text uppercase tracking-tight leading-[0.9]">
              {service.title}
            </h1>
            <p className="text-2xl text-zinc-300 font-light leading-relaxed border-l-2 border-blue-500/30 pl-8">
              {content.about}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card p-8 rounded-2xl border-l-4 border-blue-500/40">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" /> Real-World Scenario
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light italic">
                <strong className="text-zinc-200 block mb-2">{content.realWorldScenario.title}:</strong>
                "{content.realWorldScenario.description}"
              </p>
            </div>
            <div className="service-card p-8 rounded-2xl border-l-4 border-emerald-500/40">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" /> The Kosinko Impact
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light italic">
                {content.kosinkoImpact}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Technical & Training */}
        <div className="lg:col-span-5 space-y-12">
          <div className="service-card p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
            <h4 className="text-sm tracking-[0.5em] uppercase text-blue-500 font-black mb-8 border-b border-zinc-800 pb-4">Training & Mastery</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <GraduationCap className="w-10 h-10 text-zinc-500 shrink-0" />
                <div className="space-y-2">
                  <h5 className="text-white font-bold uppercase text-xs tracking-widest">Expert Integration Training</h5>
                  <p className="text-zinc-500 text-xs leading-relaxed">{content.trainingExpertise}</p>
                </div>
              </div>
              <button onClick={onContact} className="w-full py-4 border border-zinc-800 rounded-xl text-zinc-400 text-[10px] tracking-[0.3em] uppercase hover:bg-zinc-800 hover:text-white transition-all">
                View Syllabus
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.5em] uppercase text-zinc-600 font-black border-b border-zinc-900 pb-2">Technical Core</h4>
            <div className="space-y-3">
              {content.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-4 group bg-black/20 p-4 rounded-xl border border-transparent hover:border-zinc-800 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-blue-500/40 group-hover:text-blue-400" />
                  <span className="text-zinc-400 text-xs uppercase tracking-wider font-bold">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
