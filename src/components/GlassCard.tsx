import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'dark'
}) => {
  let baseStyles = 'rounded-2xl p-4 sm:p-6 backdrop-blur-md border transition-all duration-300 ';
  
  if (variant === 'dark') {
    baseStyles += 'bg-[#0a192f]/85 border-white/15 text-slate-100 shadow-2xl shadow-black/60';
  } else if (variant === 'light') {
    baseStyles += 'bg-white/95 border-slate-200 text-slate-900 shadow-xl';
  } else if (variant === 'gold') {
    baseStyles += 'bg-[#0a192f]/90 border-amber-400/40 text-slate-100 shadow-xl shadow-amber-500/10';
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
};
