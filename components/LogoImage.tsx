export const LogoImage: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-4 group">
      {/* The metallic 'K' Icon */}
      <div className="relative w-24 h-24 md:w-50 md:h-50">
        <img
          src="https://i.ibb.co/fz0BVHCQ/Logo-1-1-removebg-preview.png"
          alt="Kosinko Logo"
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
