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
    baseStyles += 'bg-slate-950/75 border-white/10 text-slate-100 shadow-xl shadow-black/40';
  } else if (variant === 'light') {
    baseStyles += 'bg-white/95 border-slate-200 text-slate-900 shadow-xl';
  } else if (variant === 'gold') {
    baseStyles += 'bg-slate-900/80 border-amber-400/30 text-slate-100 shadow-lg shadow-amber-500/5';
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
};
