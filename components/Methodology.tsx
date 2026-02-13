import React, { useState } from "react";
import { ChevronRight, Info } from "lucide-react";

const phases = [
  {
    step: "01",
    title: "Business & Tech Discovery",
    short: "Align outcomes, risk and architecture from day one.",
    full: "We map your business goals to technology priorities, audit legacy systems, and define a practical roadmap for consulting, cybersecurity, AI and Web3 adoption that is measurable and board-ready.",
  },
  {
    step: "02",
    title: "Solution Architecture",
    short: "Design secure, scalable and cost-efficient platforms.",
    full: "We design cloud-native architectures, security controls, data flows and delivery pipelines tailored to your environment, ensuring performance, compliance and maintainability before full implementation.",
  },
  {
    step: "03",
    title: "Build, Secure & Integrate",
    short: "Implement with DevSecOps and continuous validation.",
    full: "Our engineers build and integrate your solution with CI/CD, proactive security testing, and operational controls so every release is faster, safer and production-ready.",
  },
  {
    step: "04",
    title: "Operate, Train & Optimize",
    short: "Sustain value with monitoring, training and growth.",
    full: "After launch, we support operations with monitoring, incident response and team enablement while continuously optimizing performance, security posture and IT costs for long-term ROI.",
  },
];

export const Methodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-20 py-24">
      <div className="text-center space-y-6">
        <h3 className="text-zinc-600 text-sm tracking-[0.6em] uppercase font-black">
          Delivery Framework
        </h3>
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
          How Kosinko turns strategy into secure outcomes.
        </h2>
        <div className="w-24 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
        {phases.map((phase, i) => (
          <div
            key={i}
            onClick={() => setActiveStep(activeStep === i ? null : i)}
            className={`group relative bg-zinc-900/30 border p-10 rounded-3xl cursor-pointer transition-all duration-500 ${activeStep === i ? "border-blue-500/50 bg-zinc-900/60 ring-4 ring-blue-500/5" : "border-zinc-800/50 hover:border-zinc-700"}`}
          >
            <span
              className={`text-5xl font-heading font-black absolute top-6 right-8 transition-colors ${activeStep === i ? "text-blue-500/30" : "text-zinc-800 group-hover:text-zinc-700"}`}
            >
              {phase.step}
            </span>

            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <h4
                  className={`font-black tracking-[0.2em] uppercase text-base transition-colors ${activeStep === i ? "text-blue-400" : "text-white"}`}
                >
                  {phase.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  {phase.short}
                </p>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${activeStep === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-zinc-400 text-xs leading-relaxed pt-4 border-t border-zinc-800 italic">
                  {phase.full}
                </p>
              </div>

              <div className="pt-4 flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 group-hover:text-blue-500 transition-colors">
                {activeStep === i ? "Close Protocol" : "Expand Details"}
                <ChevronRight
                  className={`w-3 h-3 ml-2 transition-transform ${activeStep === i ? "rotate-90" : ""}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
