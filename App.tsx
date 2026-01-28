import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { ServiceGrid } from "./components/ServiceGrid";
import { Logo } from "./components/Logo";
import { ServiceDetail } from "./components/ServiceDetail";
import { Methodology } from "./components/Methodology";
import { TechStack } from "./components/TechStack";
import { Telemetry } from "./components/Telemetry";
import { CompanyMarquee } from "./components/CompanyMarquee";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { LogoImage } from "./components/LogoImage";

export type View = "home" | "service-detail";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedServiceId]);

  const handleServiceSelect = (id: string) => {
    setSelectedServiceId(id);
    setCurrentView("service-detail");
  };

  const goHome = () => {
    setCurrentView("home");
    setSelectedServiceId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  const scrollToSection = (id: string) => {
    if (currentView !== "home") {
      goHome();
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-12 space-y-24 max-w-7xl mx-auto">
      <Telemetry />

      {/* Header / Navigation */}
      <header className="flex flex-col items-center w-full px-6 sticky top-0 z-50 bg-black/50 backdrop-blur-xl py-6 transition-all border-b border-white/5">
        <div
          onClick={goHome}
          className="cursor-pointer transform transition-transform hover:scale-[1.01] flex items-center gap-2"
        >
          <Logo />
        </div>
        <nav className="mt-10 flex flex-wrap justify-center gap-10 text-sm tracking-[0.4em] uppercase text-zinc-500 font-black">
          <button
            onClick={goHome}
            className={`${currentView === "home" ? "text-blue-500 underline underline-offset-8" : "hover:text-white"} transition-all`}
          >
            Matrix
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-white transition-all"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("methodology")}
            className="hover:text-white transition-all"
          >
            Framework
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-white transition-all"
          >
            Connect
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="w-full">
        {currentView === "home" ? (
          <div className="space-y-40">
            <section id="hero" className="text-center scroll-mt-32 reveal">
              <Hero />
            </section>

            <section id="partners" className="reveal">
              <CompanyMarquee />
            </section>

            <section
              id="services"
              className="w-full space-y-20 scroll-mt-32 reveal"
            >
              <div className="text-center space-y-6">
                <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
                  Specialized Disciplines
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
              </div>
              <ServiceGrid onSelectService={handleServiceSelect} />
            </section>

            <section
              id="tech-stack"
              className="w-full reveal bg-zinc-900/10 py-24"
            >
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

            <section id="methodology" className="w-full scroll-mt-32 reveal">
              <Methodology />
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="w-full max-w-4xl mx-auto space-y-20 pb-24 px-6 scroll-mt-32 reveal"
            >
              <div className="text-center space-y-6">
                <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
                  Secure Transmission
                </h3>
                <h2 className="text-4xl md:text-6xl font-heading font-black text-white">
                  Ready to initiate?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
              </div>

              <div className="service-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden ring-1 ring-white/10">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
                {formStatus === "sent" ? (
                  <div className="text-center space-y-8 py-12 animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto text-blue-400 text-4xl shadow-[0_0_50px_-10px_rgba(59,130,246,0.6)]">
                      ✓
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-3xl font-heading font-black text-white uppercase tracking-widest">
                        Handshake Complete
                      </h4>
                      <p className="text-zinc-500 font-light italic text-lg max-w-md mx-auto">
                        Signal locked and encrypted. Our primary engineers will
                        make contact on this frequency.
                      </p>
                    </div>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-10 px-10 py-4 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-zinc-600 text-xs font-black uppercase tracking-[0.5em] transition-all bg-zinc-900/50"
                    >
                      Reset Terminal
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                          Identity / Entity
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-zinc-800 text-base"
                          placeholder="Name or Organization"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                          Secure Channel
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-zinc-800 text-base"
                          placeholder="Email@Protocol.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                        Mission Parameters
                      </label>
                      <textarea
                        required
                        rows={6}
                        className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder-zinc-800 text-base"
                        placeholder="Brief us on your requirements..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full custom-btn py-6 rounded-2xl text-white font-black tracking-[0.4em] text-sm uppercase shadow-3xl transition-all active:scale-[0.99] hover:shadow-blue-500/10"
                    >
                      {formStatus === "sending"
                        ? "Broadcasting Signal..."
                        : "Initiate Secure Handshake"}
                    </button>
                  </form>
                )}
              </div>
            </section>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700">
            <ServiceDetail
              serviceId={selectedServiceId!}
              onBack={goHome}
              onContact={() => scrollToSection("contact")}
            />
          </div>
        )}
      </main>

      {/* Refactored Footer */}
      <footer className="w-full border-t border-zinc-900/50 pt-24 pb-16 px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <LogoImage />
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-medium">
              Architecting the resilient future of technology through
              specialized engineering and strategic innovation.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-blue-500 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-blue-500 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-blue-500 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.4em] text-xs">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-bold uppercase tracking-widest">
              <li>
                <button
                  onClick={goHome}
                  className="hover:text-blue-500 transition-colors"
                >
                  Home Base
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-blue-500 transition-colors"
                >
                  Core Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("methodology")}
                  className="hover:text-blue-500 transition-colors"
                >
                  Framework
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-500 transition-colors"
                >
                  Transmission
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.4em] text-xs">
              Ecosystem
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-bold uppercase tracking-widest">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Architecture Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security Protocols
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Public Repos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.4em] text-xs">
              Reach
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-zinc-500 items-start">
                <MapPin className="w-5 h-5 shrink-0 text-blue-500" />
                <span className="text-xs uppercase tracking-widest font-bold leading-relaxed">
                  VI, Lagos, Nigeria
                  <br />
                  Remote Hub: Global
                </span>
              </li>
              <li className="flex gap-4 text-zinc-500 items-center">
                <Mail className="w-5 h-5 shrink-0 text-blue-500" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  engineering@kosinko.tech
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-700 text-[10px] tracking-[0.6em] uppercase font-black flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> SYSTEM
            NOMINAL // v3.1.2.4
          </div>
          <p className="text-zinc-600 text-[10px] tracking-[0.5em] uppercase font-black text-center">
            © {new Date().getFullYear()} KOSINKO TECHNOLOGIES. ALL RESILIENCE
            RESERVED.
          </p>
          <div className="flex gap-8 text-zinc-700 text-[10px] tracking-[0.4em] uppercase font-black">
            <a href="#" className="hover:text-zinc-300">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-300">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
