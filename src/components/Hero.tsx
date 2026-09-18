import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneCall, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[auto] lg:min-h-[92vh] flex items-center pt-4 pb-20 sm:pt-8 sm:pb-24 lg:pt-12 lg:pb-16 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" initial={false}>
        {currentSlide === 0 ? (
          <motion.div
            key="slide1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="w-full flex items-center z-10 bg-slate-50/80 py-4 sm:py-8 lg:py-12"
          >
            {/* Background Image/Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/medical/1920/1080?blur=4')] bg-cover bg-center mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                >
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6 shadow-sm border border-sky-200">
                    <span className="w-2 h-2 rounded-full bg-sky-600 mr-2 animate-pulse" />
                    Hybrid Neurosurgery
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.15] mb-4 sm:mb-6 font-serif">
                    Bridging <span className="text-sky-700 italic">Precision</span> &amp; Innovation
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Delivering tailored, patient-specific treatment plans for complex neurological conditions. Combining traditional open microsurgery with minimally invasive endovascular techniques for optimal outcomes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <a
                      href="#contact"
                      className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-lg text-white bg-sky-700 hover:bg-sky-800 transition-all duration-300 transform active:scale-95 sm:hover:-translate-y-0.5 min-h-[48px]"
                    >
                      Book an Appointment
                      <ArrowRight className="ml-2 -mr-1 h-4 sm:h-5 w-4 sm:w-5" aria-hidden="true" />
                    </a>
                    <a
                      href="tel:+919823012307"
                      className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-slate-200 text-sm sm:text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 active:scale-95 min-h-[48px]"
                    >
                      <PhoneCall className="mr-2 -ml-1 h-4 sm:h-5 w-4 sm:w-5 text-red-600" aria-hidden="true" />
                      24/7 Emergency Care
                    </a>
                  </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative flex justify-center lg:justify-end pb-8 sm:pb-10 lg:pb-0 px-2 sm:px-0"
                >
                  <div className="relative max-w-[290px] sm:max-w-sm lg:max-w-md w-full">
                    <motion.img
                      initial={{ y: 0 }}
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      src="/hero-image.jpg"
                      onError={(e) => { e.currentTarget.src = '/images/hero1.jpg'; }}
                      alt="Dr. Nitin Naikwade - Hybrid Neurosurgeon"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-[360px] sm:max-h-[440px] lg:max-h-[520px] aspect-[4/5] object-cover rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white filter contrast-105"
                    />
                    <div className="absolute -bottom-5 sm:-bottom-6 left-2 right-2 sm:left-4 sm:right-4 z-10">
                      <div className="bg-white/95 backdrop-blur-md p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-center">
                        <h3 className="text-base sm:text-xl font-bold text-slate-900 font-serif mb-0.5">Dr. Nitin Naikwade</h3>
                        <p className="text-sky-700 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Hybrid (Brain, Spine &amp; Endovascular) Neurosurgeon</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob pointer-events-none" />
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-28 h-28 sm:w-40 sm:h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="slide2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="w-full flex items-center z-10 bg-gradient-to-br from-[#0b101b] via-[#111927] to-[#070b12] py-4 sm:py-8 lg:py-12"
          >
            {/* Soft Ambient Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-sky-600/15 rounded-full blur-[90px] sm:blur-[130px] mix-blend-screen" />
              <div className="absolute bottom-1/4 right-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-600/15 rounded-full blur-[80px] sm:blur-[110px] mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Left: Bold Minimalist Typography */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                >
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 text-sky-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 border border-white/15 backdrop-blur-sm shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-sky-400 mr-2 sm:mr-3 animate-pulse shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                    Specialized Care &amp; Clinical Excellence
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.15] mb-4 sm:mb-6 tracking-tight font-serif">
                    Advanced <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
                      Neurointervention
                    </span> <br className="hidden sm:inline" />
                    &amp; Microsurgery
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                    When seconds count, expertise matters. Delivering life-saving endovascular treatments, aneurysm interventions, and rapid response trauma care with state-of-the-art precision.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <a
                      href="#contact"
                      className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold rounded-full text-white bg-sky-600 hover:bg-sky-500 transition-all duration-300 shadow-[0_0_25px_rgba(2,132,199,0.45)] hover:shadow-[0_0_35px_rgba(2,132,199,0.65)] transform active:scale-95 sm:hover:-translate-y-0.5 min-h-[48px]"
                    >
                      Book an Appointment
                      <ArrowRight className="ml-2 -mr-1 h-4 sm:h-5 w-4 sm:w-5" aria-hidden="true" />
                    </a>
                    <a
                      href="tel:+919823012307"
                      className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 text-sm sm:text-base font-medium rounded-full text-slate-200 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 active:scale-95 min-h-[48px]"
                    >
                      <PhoneCall className="mr-2 -ml-1 h-4 sm:h-5 w-4 sm:w-5 text-red-400" aria-hidden="true" />
                      24/7 Emergency Helpline
                    </a>
                  </div>
                </motion.div>

                {/* Right: Doctor Photograph with Glassmorphism Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative flex justify-center lg:justify-end pb-8 sm:pb-10 lg:pb-0 px-2 sm:px-0"
                >
                  <div className="relative max-w-[290px] sm:max-w-sm lg:max-w-md w-full">
                    <motion.img
                      initial={{ y: 0 }}
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      src="/tempImageptnxQD.png"
                      onError={(e) => { e.currentTarget.src = '/images/hero2.jpg'; }}
                      alt="Dr. Nitin Naikwade - Consultant Hybrid Neurosurgeon"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-[360px] sm:max-h-[440px] lg:max-h-[520px] aspect-[4/5] object-cover rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-slate-700/60 filter contrast-105"
                    />
                    <div className="absolute -bottom-5 sm:-bottom-6 left-2 right-2 sm:left-4 sm:right-4 z-10">
                      <div className="bg-slate-900/95 backdrop-blur-md p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-700/80 text-center">
                        <h3 className="text-base sm:text-xl font-bold text-white font-serif mb-0.5">Dr. Nitin Naikwade</h3>
                        <p className="text-sky-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Consultant Neurosurgeon &amp; Endovascular Specialist</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-36 sm:h-36 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-28 h-28 sm:w-44 sm:h-44 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Unified Carousel Controls */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 z-30 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border border-white/15 shadow-xl">
        <button 
          onClick={prevSlide}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 active:scale-90"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
        <div className="flex items-center space-x-2 px-1 sm:px-2">
          <button 
            onClick={() => setCurrentSlide(0)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-sky-400 w-6 sm:w-8 shadow-[0_0_10px_rgba(56,189,248,0.6)]' : 'bg-white/30 hover:bg-white/50 w-2 sm:w-2.5'}`}
            aria-label="Go to slide 1"
          />
          <button 
            onClick={() => setCurrentSlide(1)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-sky-400 w-6 sm:w-8 shadow-[0_0_10px_rgba(56,189,248,0.6)]' : 'bg-white/30 hover:bg-white/50 w-2 sm:w-2.5'}`}
            aria-label="Go to slide 2"
          />
        </div>
        <button 
          onClick={nextSlide}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 active:scale-90"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </section>
  );
}
