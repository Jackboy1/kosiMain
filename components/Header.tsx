import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";

const Header: React.FC<any> = ({ scrollToSection, goHome, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Use sentinel element to detect when main content scrolls past header.
  useEffect(() => {
    const sentinel = document.getElementById("header-sentinel");
    if (!sentinel) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // When sentinel is not intersecting the root viewport, we've scrolled past it.
        setIsScrolled(!e.isIntersecting);
      },
      { threshold: 0, root: null },
    );

    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = hamburgerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hamburgerOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && hamburgerOpen) setHamburgerOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [hamburgerOpen]);

  const navButtonClass =
    "transition-colors duration-200 ease-in-out hover:text-white";

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all duration-400 ease-in-out ${
        isScrolled ? "py-0 h-14" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex w-full transition-all duration-400 ease-in-out items-center justify-between">
        <div
          onClick={() => {
            setHamburgerOpen(false);
            goHome();
          }}
          className={`cursor-pointer transform transition-transform duration-400 ${
            isScrolled ? "scale-75" : "scale-100 flex items-center gap-2"
          }`}
        >
          <Logo compact={isScrolled} />
        </div>

        <nav
          className={`hidden md:flex items-center transition-all duration-400 ease-in-out text-zinc-500 uppercase font-black ${
            isScrolled
              ? "gap-4 text-[12px] tracking-[0.12em]"
              : "gap-10 text-sm tracking-[0.4em]"
          }`}
        >
          <button
            onClick={goHome}
            className={`${navButtonClass} ${currentView === "home" ? "text-blue-500 underline underline-offset-2" : ""}`}
          >
            Matrix
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={navButtonClass}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("methodology")}
            className={navButtonClass}
          >
            Framework
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={navButtonClass}
          >
            Connect
          </button>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            aria-label={hamburgerOpen ? "Close menu" : "Open menu"}
            onClick={() => setHamburgerOpen((v) => !v)}
            className="p-2 rounded-md text-zinc-400 hover:text-white focus:outline-none"
          >
            {hamburgerOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden mx-auto max-w-7xl px-4 transition-all duration-300 ease-in-out overflow-hidden ${hamburgerOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center py-4 space-y-4 text-zinc-400 uppercase font-black tracking-widest">
          <button
            onClick={() => {
              setHamburgerOpen(false);
              goHome();
            }}
            className={`${navButtonClass}`}
          >
            Matrix
          </button>
          <button
            onClick={() => {
              setHamburgerOpen(false);
              scrollToSection("services");
            }}
            className={`${navButtonClass}`}
          >
            Services
          </button>
          <button
            onClick={() => {
              setHamburgerOpen(false);
              scrollToSection("methodology");
            }}
            className={`${navButtonClass}`}
          >
            Framework
          </button>
          <button
            onClick={() => {
              setHamburgerOpen(false);
              scrollToSection("contact");
            }}
            className={`${navButtonClass}`}
          >
            Connect
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
