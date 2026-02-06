import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { ServiceGrid } from "./components/ServiceGrid";
import { ServiceDetail } from "./components/ServiceDetail";
import { Methodology } from "./components/Methodology";
import { Telemetry } from "./components/Telemetry";
import { ExpertiseSlider } from "./components/ExpertiseSlider";
import Header from "./components/Header";
import Disciplines from "./components/Disciplines";
import TechStackLabel from "./components/TechStackLabel";
import Contact from "./components/Contact";
import Footer from "./components/footer";

export type View = "home" | "service-detail";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
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
      {/* <Telemetry /> */}

      {/* Header / Navigation */}
      <Header
        scrollToSection={scrollToSection}
        goHome={goHome}
        currentView={currentView}
      />
      {/* sentinel used by Header to detect scroll position */}
      <div id="header-sentinel" className="w-full h-px" />

      {/* Main Content Area */}
      <main className="w-full">
        {currentView === "home" ? (
          <div className="space-y-40">
            <section id="hero" className="text-center scroll-mt-32 reveal">
              <Hero />
            </section>

            <section id="partners" className="reveal">
              <ExpertiseSlider />
            </section>

            <section
              id="services"
              className="w-full space-y-20 scroll-mt-32 reveal"
            >
              <Disciplines />
              <ServiceGrid onSelectService={handleServiceSelect} />
            </section>

            <TechStackLabel />

            <section id="methodology" className="w-full scroll-mt-32 reveal">
              <Methodology />
            </section>

            {/* Contact Section */}
            <Contact />
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
      <Footer goHome={goHome} scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
