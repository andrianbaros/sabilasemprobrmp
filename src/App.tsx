import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Slide01Cover } from './slides/Slide01Cover';
import { Slide02Background1 } from './slides/Slide02Background1';
import { Slide03Background2 } from './slides/Slide03Background2';
import { Slide04Background3 } from './slides/Slide04Background3';
import { Slide05ProblemStatement } from './slides/Slide05ProblemStatement';
import { Slide06Objectives } from './slides/Slide06Objectives';
import { Slide07Benefits } from './slides/Slide07Benefits';
import { Slide08LiteratureReview } from './slides/Slide08LiteratureReview';
import { Slide09Location } from './slides/Slide09Location';
import { Slide10InstagramAnalysis } from './slides/Slide10InstagramAnalysis';
import { Slide11InstagramAnalysisDetails } from './slides/Slide11InstagramAnalysisDetails';
import { Slide12ContentPlanner } from './slides/Slide12ContentPlanner';
import { Slide13PeriodicContent } from './slides/Slide13PeriodicContent';
import { Slide14Schedule } from './slides/Slide14Schedule';
import { Slide15Closing } from './slides/Slide15Closing';

const slidesComponents = [
  Slide01Cover,
  Slide02Background1,
  Slide03Background2,
  Slide04Background3,
  Slide05ProblemStatement,
  Slide06Objectives,
  Slide07Benefits,
  Slide08LiteratureReview,
  Slide09Location,
  Slide10InstagramAnalysis,
  Slide11InstagramAnalysisDetails,
  Slide12ContentPlanner,
  Slide13PeriodicContent,
  Slide14Schedule,
  Slide15Closing,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const totalSlides = slidesComponents.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const goToHome = useCallback(() => setCurrentSlide(1), []);
  const goToEnd = useCallback(() => setCurrentSlide(totalSlides), [totalSlides]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToHome();
      } else if (e.key === 'End') {
        e.preventDefault();
        goToEnd();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToHome, goToEnd, isFullscreen]);

  // Touch Swipe navigation on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const CurrentSlideComponent = slidesComponents[currentSlide - 1];

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden bg-slate-950 select-none flex flex-col justify-between"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image of BRMP Building with Dark Navy Semi-Transparent Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-700 scale-105"
        style={{ backgroundImage: "url('/bangunanbrmp.png')" }}
      />
      
      {/* Dark Navy Overlay across slides matching PDF visual identity */}
      <div className="absolute inset-0 bg-[#020c1b]/88 backdrop-blur-[1px] z-0" />

      {/* Main Slide Content Area */}
      <main className="relative z-10 w-full h-full flex-1 flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full h-full flex-1"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Presentation Navigation Controls */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onHome={goToHome}
        onEnd={goToEnd}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}
