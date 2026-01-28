import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-4 group">
      {/* The metallic 'K' Icon */}
      {/* i need the image to be bigger */}
      <div className="relative w-24 h-24 md:w-50 md:h-50 flex items-center justify-center">
        <img
          src="/kosiImgd-removebg-preview.png"
          alt="Kosinko Logo"
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* The Text Logo */}
      <div className="flex flex-col items-start leading-none uppercase">
        <h1 className="text-2xl md:text-6xl font-heading font-extrabold tracking-[0.2em] metallic-text">
          Kosinko
        </h1>
        <p className="text-[8px] md:text-[11px] font-medium tracking-[0.6em] text-zinc-500 mt-1 pl-1">
          Technologies
        </p>
      </div>
    </div>
  );
};
