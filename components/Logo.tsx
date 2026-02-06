import React from "react";

type LogoProps = {
  compact?: boolean;
};

export const Logo: React.FC<LogoProps> = ({ compact = false }) => {
  const imgSizeClass = compact
    ? "w-10 h-10 md:w-12 md:h-12"
    : "w-24 h-24 md:w-50 md:h-50";
  const titleClass = compact
    ? "text-lg md:text-xl font-heading font-extrabold tracking-[0.12em]"
    : "text-2xl md:text-6xl font-heading font-extrabold tracking-[0.2em]";
  const sub1Class = compact
    ? "text-[9px] md:text-[11px] font-medium tracking-[0.3em] text-zinc-500 mt-0 pl-0 text-center"
    : "text-[8px] md:text-[13px] font-medium tracking-[0.6em] text-zinc-500 mt-1 pl-1";
  const containerClass = compact
    ? "flex flex-row items-center gap-3"
    : "flex flex-row items-center gap-4 group";
  const textAlignClass = compact
    ? "items-center justify-center text-center"
    : "items-start";

  return (
    <div className={containerClass}>
      {/* Logo image */}
      <div
        className={`relative ${imgSizeClass} flex items-center justify-center`}
      >
        <img
          src="https://i.ibb.co/fz0BVHCQ/Logo-1-1-removebg-preview.png"
          alt="Kosinko Logo"
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text */}
      <div className={`flex flex-col ${textAlignClass} leading-none uppercase`}>
        <h1 className={`${titleClass} metallic-text`}>Kosinko</h1>

        <p className={sub1Class}>Technologies Global LTD</p>

        {/* Hidden when compact */}
        {!compact && (
          <p className="text-[6px] md:text-[15px] mt-4 md:mt-6 font-medium tracking-[0.4em] text-zinc-400 pl-1">
            Built on security, doubled for prosperity
          </p>
        )}
      </div>
    </div>
  );
};
