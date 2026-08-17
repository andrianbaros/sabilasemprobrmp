import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Home, CornerDownLeft } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onHome: () => void;
  onEnd: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onHome,
  onEnd,
  isFullscreen,
  onToggleFullscreen
}) => {
  const formattedCurrent = String(currentSlide).padStart(2, '0');
  const formattedTotal = String(totalSlides).padStart(2, '0');
  const progressPercent = (currentSlide / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-t border-white/10 px-4 py-2 sm:py-3 transition-all duration-300">
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800">
        <div 
          className="h-full bg-amber-400 transition-all duration-300 ease-out" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Quick Jump Controls */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={onHome}
            title="First Slide (Home)"
            aria-label="First Slide"
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={onEnd}
            title="Last Slide (End)"
            aria-label="Last Slide"
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <CornerDownLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Slide Numbers & Prev/Next */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onPrev}
            disabled={currentSlide === 1}
            aria-label="Previous slide"
            className={`p-2 rounded-xl border transition-all ${
              currentSlide === 1
                ? 'opacity-30 border-white/10 text-slate-500 cursor-not-allowed'
                : 'border-white/20 text-white hover:bg-amber-500/20 hover:border-amber-400/50 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex items-center px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs sm:text-sm font-mono tracking-widest text-slate-200">
            <span className="font-bold text-amber-400">{formattedCurrent}</span>
            <span className="mx-1.5 opacity-40">/</span>
            <span className="opacity-70">{formattedTotal}</span>
          </div>

          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            aria-label="Next slide"
            className={`p-2 rounded-xl border transition-all ${
              currentSlide === totalSlides
                ? 'opacity-30 border-white/10 text-slate-500 cursor-not-allowed'
                : 'border-amber-400/40 text-amber-400 bg-amber-400/10 hover:bg-amber-400/20 active:scale-95'
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Presentation Fullscreen Mode */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? "Exit Presentation Mode (Esc)" : "Presentation Mode"}
            aria-label="Toggle Fullscreen"
            className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all text-xs font-medium"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Exit Fullscreen</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Presentation Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
