import React from "react";
import { services } from "./ServiceGrid";
import {
  ArrowLeft,
  CheckCircle2,
  Globe,
  Shield,
  Zap,
  GraduationCap,
} from "lucide-react";

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
  learnMoreUrl?: string;
}

const detailContent: Record<string, DetailRichContent> = {
  consulting: {
    about:
      "Our enterprise consulting practice delivers board-ready technology roadmaps and digitally transformational programs that align investments to measurable business outcomes, accelerate cloud modernization and migrations with secure, cost-efficient architectures, and implement compliance-first cybersecurity and risk frameworks that protect critical assets. We design and operationalize DevOps and CI/CD pipelines to improve release velocity and reliability, build data analytics and governance platforms that turn data into executive-grade insights, and lead ERP and CRM selection and optimization to streamline core operations. Our services include IT service management and process optimization to tighten SLAs and incident response, application modernization and re-architecture for scalable, maintainable systems, and vendor sourcing with commercial negotiation to secure optimal partnerships. We also deliver business continuity and disaster recovery planning, robotic process automation to reduce manual work, AI/ML prototyping and deployment for intelligent automation, and comprehensive change management, training, and adoption programs that ensure sustainable value, while continuously optimizing IT costs and infrastructure to maximize return on investment.",
    realWorldScenario: {
      title: "Legacy Banking Migration",
      description:
        "We helped a regional bank move from a 20-year-old monolithic core to a microservices architecture, reducing transaction latency by 40%.",
    },
    kosinkoImpact:
      "We act as your CTO-as-a-Service, ensuring your technology roadmap aligns perfectly with market demands and internal scaling capabilities.",
    trainingExpertise:
      'Our "Architecture Masterclass" trains your internal leads to maintain and evolve complex systems using industry-standard design patterns.',
    specs: [
      "Digital Maturity Audit",
      "Cloud Migration Roadmap",
      "Legacy System Modernization",
    ],
    modules: ["Enterprise Strategy", "Risk Assessment", "Executive Coaching"],
    learnMoreUrl: "https://share-eu1.hsforms.com/1T1gnhBEfQiyIHQxx8pzoUQ2fznzl",
  },
  "cyber-security": {
    about:
      "In a world of zero-day exploits, perimeter defense is dead, and we build resilient, self-healing security architectures based on the Principle of Least Privilege.\n\nWe provide SOC management as a managed security service (MSSP) that delivers 24/7 monitoring, threat detection, incident response, and proactive threat hunting to reduce attacker dwell time.\n\nOur technical security services cover network security, email security, endpoint protection, and cloud security, each implemented with defense-in-depth and continuous validation to prevent, detect, and contain threats.\n\nWe strengthen the human layer through security awareness programs, phishing simulations, role-based training, and real-world exercises to reduce social-engineering risk.\n\nOur Academy offers instructor-led and hands-on training for Purple Team exercises that combine SOC operations and penetration testing, plus certification pathways for SOC analysts, red-teamers, and blue-teamers.\n\nWe support ISO security compliance with assessments, gap analysis, policy and procedure development, and audit readiness for standards such as ISO 27001. ISO\n\nWe design tailored security programs that combine managed services, technical controls, training, and compliance to deliver measurable resilience and reduce business risk.\n\nWe carry out vulnerability testing on your organisation.",
    realWorldScenario: {
      title: "Global E-commerce Protection",
      description:
        "Implemented a Zero-Trust network for a retailer, stopping a massive SQL injection attempt within seconds of detection.",
    },
    kosinkoImpact:
      "We deploy multi-layered defense-in-depth, including automated threat hunting and AI-driven anomaly detection.",
    trainingExpertise:
      'Our "Red Team Simulation" practices give your staff real-world experience in defending against sophisticated phishing and ransomware attacks.',
    specs: [
      "Zero-Trust Architecture",
      "Real-time Threat Hunting",
      "Penetration Testing",
    ],
    modules: [
      "Network Hardening",
      "Identity Management",
      "Compliance (ISO/SOC2)",
    ],
    learnMoreUrl: "https://share-eu1.hsforms.com/1hkVon3SfS6eMCunuJpBlxA2fznzl",
  },
  ai: {
    about:
      "AI is the engine of the new economy. We move beyond simple chatbots to create cognitive automation that solves genuine bottlenecks.",
    realWorldScenario: {
      title: "Supply Chain Optimization",
      description:
        "Developed a predictive model for a logistics firm that reduced fuel costs by 12% through intelligent route and load management.",
    },
    kosinkoImpact:
      "We help you harness your own data to build proprietary models that give you an unassailable competitive advantage.",
    trainingExpertise:
      'We provide hands-on "Data Science Foundations" for your analysts, teaching them how to maintain and fine-tune models in production.',
    specs: [
      "Custom LLM Fine-tuning",
      "Predictive Analytics",
      "Computer Vision",
    ],
    modules: [
      "Data Engineering",
      "Neural Network Design",
      "Automated Insights",
    ],
  },
  nft: {
    about:
      "Non-Fungible Tokens are the blueprint for digital ownership, and we build the infrastructure for utility-driven assets that provide long-term value.\n\nOur collection is where creativity meets art, and ownership grants membership in a large, caring community that embodies love, peace, kindness, and family.\n\nCommunity management and engagement for existing holders, including Discord moderation, onboarding, and member events.\n\nSecondary-market monitoring and royalty enforcement to protect floor value and track trading on OpenSea.\n\nToken-gated utilities and access management for exclusive drops, events, and holder perks.\n\nHolder experiences and real-world activations such as meetups and merchandise drops.\n\nAnalytics and reporting on floor price, trade volume, and holder demographics.\n\nDAO and treasury advisory to support governance and sustainable community funding.\n\nLegal and IP support to protect the artwork and clarify reuse rights.",
    realWorldScenario: {
      title: "Real Estate Tokenization",
      description:
        "Created a fractional ownership platform for luxury properties in Lagos, allowing micro-investments through secure smart contracts.",
    },
    kosinkoImpact:
      "Our focus is on utility. We ensure your NFT project has robust metadata, secure minting logic, and seamless marketplace integration.",
    trainingExpertise:
      'Learn "Web3 Product Management" to understand how to build community-driven economies around digital assets.',
    specs: [
      "ERC-721/1155 Standards",
      "Minting Engine Development",
      "Marketplace Integration",
    ],
    modules: ["Dynamic Metadata", "Royalty Protocols", "Community Tooling"],
    learnMoreUrl: "https://opensea.io/Kosinko1?collectionSlugs=kosinko-punks",
  },
  crypto: {
    about:
      "Decentralized Finance is re-imagining how money moves. We build the secure bridges, protocols, and wallets that power this revolution.",
    realWorldScenario: {
      title: "Cross-Border Payment Protocol",
      description:
        "Built a stablecoin-based settlement system for a pan-African tech firm, reducing transfer fees from 7% to less than 0.5%.",
    },
    kosinkoImpact:
      "Security is paramount. We conduct rigorous audits of all smart contracts to protect user capital and maintain system integrity.",
    trainingExpertise:
      'Our "Solidity Deep-Dive" trains developers in high-security coding practices and EVM optimization.',
    specs: [
      "EVM Smart Contracts",
      "DeFi Protocol Audits",
      "MPC Wallet Security",
    ],
    modules: [
      "Liquidity Pools",
      "Staking Architectures",
      "Cross-chain Bridges",
    ],
  },
  automation: {
    about:
      "Efficiency is the difference between survival and dominance. We automate the repetitive so your team can focus on the creative.",
    realWorldScenario: {
      title: "Automated Compliance Reporting",
      description:
        "Reduced a fintech firm's monthly compliance reporting time from 5 days to 15 minutes using intelligent RPA and data piping.",
    },
    kosinkoImpact:
      "We identify manual bottlenecks and implement elegant code-based solutions that grow alongside your business.",
    trainingExpertise:
      'Our "Workflow Engineering" workshop empowers your operations team to create their own automated scripts and pipelines.',
    specs: [
      "Robotic Process Automation",
      "CI/CD Pipeline Optimization",
      "Custom Scripting",
    ],
    modules: ["Workflow Mapping", "Bespoke Tooling", "System Integration"],
  },
};

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  serviceId,
  onBack,
  onContact,
}) => {
  const service = services.find((s) => s.id === serviceId);
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
              <service.Icon
                className="w-14 h-14 text-blue-400"
                strokeWidth={1}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black metallic-text uppercase tracking-tight leading-[0.9]">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-zinc-200/95 font-normal leading-8 border border-blue-500/20 bg-zinc-900/30 rounded-2xl p-6 whitespace-pre-line">
              {content.about}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card p-8 rounded-2xl border-l-4 border-blue-500/40">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" /> Real-World Scenario
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light italic">
                <strong className="text-zinc-200 block mb-2">
                  {content.realWorldScenario.title}:
                </strong>
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
            <h4 className="text-sm tracking-[0.5em] uppercase text-blue-500 font-black mb-8 border-b border-zinc-800 pb-4">
              Training & Mastery
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <GraduationCap className="w-10 h-10 text-zinc-500 shrink-0" />
                <div className="space-y-2">
                  <h5 className="text-white font-bold uppercase text-xs tracking-widest">
                    Expert Integration Training
                  </h5>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {content.trainingExpertise}
                  </p>
                </div>
              </div>
              <button
                onClick={onContact}
                className="w-full py-4 border border-zinc-800 rounded-xl text-zinc-400 text-[10px] tracking-[0.3em] uppercase hover:bg-zinc-800 hover:text-white transition-all"
              >
                View Syllabus
              </button>
              {content.learnMoreUrl ? (
                <a
                  href={content.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 border border-blue-400 rounded-xl bg-blue-500/20 text-center text-blue-100 text-xs font-bold tracking-[0.25em] uppercase hover:bg-blue-500 hover:text-black hover:shadow-[0_0_24px_-6px_rgba(59,130,246,0.9)] transition-all"
                >
                  Learn More
                </a>
              ) : null}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.5em] uppercase text-zinc-600 font-black border-b border-zinc-900 pb-2">
              Technical Core
            </h4>
            <div className="space-y-3">
              {content.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group bg-black/20 p-4 rounded-xl border border-transparent hover:border-zinc-800 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500/40 group-hover:text-blue-400" />
                  <span className="text-zinc-400 text-xs uppercase tracking-wider font-bold">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
