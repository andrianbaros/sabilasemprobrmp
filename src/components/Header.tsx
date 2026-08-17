import React from 'react';

interface HeaderProps {
  showLogos?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showLogos = true }) => {
  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-8 pt-4 pb-2 z-20">
      <div className="flex items-center space-x-3">
        {showLogos && (
          <>
            <img src="/logo unikom.png" alt="Logo UNIKOM" className="h-9 sm:h-11 w-auto object-contain drop-shadow-md" />
            <div className="h-6 w-px bg-white/20"></div>
            <img src="/logobrmp.png" alt="Logo BRMP Sayuran" className="h-9 sm:h-11 w-auto object-contain drop-shadow-md" />
          </>
        )}
      </div>
      <div className="text-right">
        <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-amber-400 uppercase bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
          SEMINAR PROPOSAL MAGANG 2026
        </span>
      </div>
    </div>
  );
};
