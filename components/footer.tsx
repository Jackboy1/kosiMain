import { Twitter, Linkedin, Mail, MapPin, Instagram } from "lucide-react";
import { LogoImage } from "./LogoImage";

const Footer = ({
  goHome,
  scrollToSection,
}: {
  goHome: () => void;
  scrollToSection: (id: string) => void;
}) => {
  return (
    <footer className="w-full border-t border-zinc-900/50 pt-24 pb-16 px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <LogoImage />
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-medium">
            Architecting the resilient future of technology through specialized
            engineering and strategic innovation.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/kosinkotechnologies?igsh=MTBnbDA0aGZ2YWN6bA=="
              className="p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-blue-500 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/KosinkoTechn"
              className="p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-blue-500 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kosiso-umeaka-a07698342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
              <a
                href="mailto:kosinkotechnologies@gmail.com"
                className="text-xs uppercase tracking-widest font-bold"
              >
                kosinkotechnologies@gmail.com
              </a>
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
  );
};

export default Footer;
