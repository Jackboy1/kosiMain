import React, { useMemo, useState } from "react";
import {
  Zap,
  Cpu,
  Shield,
  GitBranch,
  Cloud,
  Box,
  Database,
  Terminal,
  Search,
  Code,
} from "lucide-react";

type TechItem = {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<any>;
  color?: string;
  description: string;
  tools?: string[];
  caseStudyUrl?: string;
};

const technologies: TechItem[] = [
  {
    id: "web3",
    name: "NFT / Web3",
    category: "Web3",
    icon: Zap,
    color: "text-purple-400",
    description:
      "Smart contract development, tokenization and dApps on Ethereum.",
    tools: ["Solidity", "Hardhat", "OpenZeppelin"],
    caseStudyUrl: "https://ethereum.org/en/developers/docs/smart-contracts/",
  },
  {
    id: "ai",
    name: "AI / ML",
    category: "AI",
    icon: Code,
    color: "text-blue-400",
    description: "Model development and MLOps for production ML workloads.",
    tools: ["PyTorch", "TensorFlow", "scikit-learn"],
    caseStudyUrl: "https://scikit-learn.org/stable/",
  },
  {
    id: "checkpoint",
    name: "Checkpoint",
    category: "Security",
    icon: Shield,
    color: "text-emerald-400",
    description: "Enterprise firewall & network security expertise.",
    tools: ["Checkpoint R80+", "SmartConsole"],
    caseStudyUrl: "https://www.checkpoint.com/",
  },
  {
    id: "cyber",
    name: "Cybersecurity (SOC)",
    category: "Security",
    icon: Cpu,
    color: "text-red-400",
    description: "Security operations, incident response and monitoring.",
    tools: ["SIEM", "Azure Sentinel", "Log Analytics"],
    caseStudyUrl: "https://learn.microsoft.com/azure/sentinel/",
  },
  {
    id: "devsecops",
    name: "DevSecOps",
    category: "DevSecOps",
    icon: GitBranch,
    color: "text-orange-400",
    description: "Integrating security into CI/CD pipelines and automation.",
    tools: ["Trivy", "Snyk", "GitHub Actions"],
    caseStudyUrl: "https://resources.github.com/devops/",
  },
  {
    id: "azure-soc",
    name: "Azure SOC",
    category: "Cloud",
    icon: Cloud,
    color: "text-cyan-400",
    description: "Cloud-native security and SOC on Azure.",
    tools: ["Azure Sentinel", "Azure Defender"],
    caseStudyUrl: "https://learn.microsoft.com/azure/defender-for-cloud/",
  },
  {
    id: "cicd",
    name: "CI/CD",
    category: "CI/CD",
    icon: Terminal,
    color: "text-indigo-400",
    description: "Reliable pipelines, deployment automation and delivery.",
    tools: ["GitHub Actions", "ArgoCD"],
    caseStudyUrl: "https://argo-cd.readthedocs.io/en/stable/",
  },
  {
    id: "pentest",
    name: "Penetration Testing",
    category: "Offensive",
    icon: Search,
    color: "text-pink-400",
    description: "Offensive assessments and tooling to harden infra.",
    tools: ["Nmap", "Trivy", "Nikto", "Nessus"],
    caseStudyUrl: "https://owasp.org/www-project-web-security-testing-guide/",
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "IaC",
    icon: Box,
    color: "text-amber-400",
    description: "Infrastructure as Code for reproducible environments.",
    tools: ["Terraform", "State management"],
    caseStudyUrl: "https://developer.hashicorp.com/terraform/docs",
  },
  {
    id: "k8s",
    name: "Kubernetes & Docker",
    category: "Orchestration",
    icon: Database,
    color: "text-sky-400",
    description: "Container orchestration and platform reliability.",
    tools: ["Kubernetes", "Docker", "Helm"],
    caseStudyUrl: "https://kubernetes.io/docs/home/",
  },
];

const ALL = "All";

const TabButton: React.FC<{
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`relative overflow-hidden px-3 py-2 text-xs uppercase tracking-widest font-black rounded-md transition-all duration-200 transform ${
      active
        ? "bg-zinc-800 text-white ring-1 ring-white/10 scale-105"
        : "text-zinc-400 hover:text-white hover:-translate-y-0.5 hover:scale-105"
    }`}
    aria-pressed={active}
  >
    <span className="relative z-10">{label}</span>
    <span
      className={`absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 origin-left transform transition-transform duration-200 ${
        active ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
      }`}
      aria-hidden
    />
  </button>
);

const TechCard: React.FC<{
  item: TechItem;
  expanded: boolean;
  onToggle: () => void;
}> = React.memo(({ item, expanded, onToggle }) => {
  const Icon = item.icon;
  return (
    <article
      onClick={onToggle}
      className="group cursor-pointer rounded-2xl border border-zinc-900 bg-zinc-900/5 p-6 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
      role="button"
      aria-expanded={expanded}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-zinc-900/40 ${item.color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-zinc-100 font-black tracking-widest uppercase text-sm">
            {item.name}
          </h4>
          <p className="text-zinc-500 text-[11px] tracking-[0.3em] uppercase mt-2">
            {item.category}
          </p>
        </div>
      </div>

      <div
        className={`mt-4 overflow-hidden transition-[max-height,opacity] duration-300 ${
          expanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-zinc-400 text-sm leading-relaxed">
          {item.description}
        </p>

        {item.tools && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tools.map((t) => (
              <span
                key={t}
                className="text-[11px] text-zinc-300 bg-zinc-900/20 px-3 py-1 rounded-full uppercase tracking-widest"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex gap-3">
          <a
            className="px-3 py-1 rounded-md text-xs text-blue-300 bg-blue-500/10 hover:bg-blue-500/25 hover:text-blue-100 uppercase font-bold tracking-widest transition-colors"
            href={item.caseStudyUrl || "#"}
            target={item.caseStudyUrl ? "_blank" : undefined}
            rel={item.caseStudyUrl ? "noreferrer" : undefined}
          >
            Learn
          </a>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard?.writeText(
                item.tools?.join(", ") || item.name,
              );
            }}
            className="px-3 py-1 rounded-md text-xs text-zinc-300 bg-zinc-800/60 hover:bg-zinc-700 hover:text-white uppercase font-bold tracking-widest transition-colors"
            title="Copy tools"
          >
            Copy
          </button>
        </div>
      </div>
    </article>
  );
});
TechCard.displayName = "TechCard";

export const TechStack: React.FC = () => {
  const [category, setCategory] = useState<string>(ALL);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>(technologies.map((t) => t.category));
    return [ALL, ...Array.from(set)];
  }, []);

  const filtered = useMemo(
    () =>
      category === ALL
        ? technologies
        : technologies.filter((t) => t.category === category),
    [category],
  );

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h3 className="text-zinc-500 text-sm tracking-widest uppercase font-black">
            The Infrastructure Stack
          </h3>
          <p className="text-zinc-400 text-xs mt-2 max-w-xl">
            Core platforms, security tooling and delivery pipelines used across
            projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <TabButton
              key={c}
              label={c}
              active={c === category}
              onClick={() => setCategory(c)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <TechCard
            key={item.id}
            item={item}
            expanded={expandedId === item.id}
            onToggle={() =>
              setExpandedId((prev) => (prev === item.id ? null : item.id))
            }
          />
        ))}
      </div>
    </div>
  );
};
