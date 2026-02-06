import React from "react";
import { TechStack } from "./TechStack";

const TechStackLabel = () => {
  return (
    <section id="tech-stack" className="w-full reveal bg-zinc-900/10 py-24">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center lg:text-left">
        <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black mb-4">
          The Infrastructure Stack
        </h3>
        <h2 className="text-4xl md:text-5xl font-heading font-black text-white">
          Engineered with Precision.
        </h2>
      </div>
      <TechStack />
    </section>
  );
};

export default TechStackLabel;
