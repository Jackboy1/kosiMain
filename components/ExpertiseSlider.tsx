import React from "react";
import {
  Shield,
  GitBranch,
  Cloud,
  Network,
  Code2,
  AlertCircle,
  Zap,
} from "lucide-react";

const expertiseItems = [
  { label: "NFT & Web3", icon: Zap, color: "text-purple-500" },
  { label: "AI & ML", icon: Code2, color: "text-blue-500" },
  { label: "Cybersecurity", icon: Shield, color: "text-red-500" },
  { label: "DevSecOps", icon: GitBranch, color: "text-orange-500" },
  { label: "Azure SOC", icon: Cloud, color: "text-cyan-500" },
  { label: "CI/CD", icon: Network, color: "text-indigo-500" },
  {
    label: "Penetration Testing (Nmap, Trivy, Nikto, Nessus)",
    icon: AlertCircle,
    color: "text-pink-500",
  },
];

export const ExpertiseSlider: React.FC = () => {
  return (
    <div className="w-full py-16 overflow-hidden border-y border-zinc-900/50 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h4 className="text-[11px] tracking-[0.6em] text-zinc-600 uppercase font-black text-center md:text-left">
          Core Expertise & Specializations
        </h4>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {expertiseItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all cursor-default shrink-0"
              >
                <Icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-sm md:text-base font-black text-zinc-300 tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-8">
          {expertiseItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all cursor-default shrink-0"
              >
                <Icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-sm md:text-base font-black text-zinc-300 tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
