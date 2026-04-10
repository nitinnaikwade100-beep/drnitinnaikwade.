import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneCall, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          <motion.div
            key="slide1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-slate-50 flex items-center"
          >
            {/* Background Image/Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/medical/1920/1080?blur=4')] bg-cover bg-center mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="max-w-2xl"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 text-sky-800 text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm border border-sky-200">
                    <span className="w-2 h-2 rounded-full bg-sky-600 mr-2 animate-pulse" />
                    Hybrid Neurosurgery
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 font-serif">
                    Bridging <span className="text-sky-700 italic">Precision</span> & Innovation
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                    Delivering tailored, patient-specific treatment plans for complex neurological conditions. Combining traditional open microsurgery with minimally invasive endovascular techniques for optimal outcomes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-sky-700 hover:bg-sky-800 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Book an Appointment
                      <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                    </a>
                    <a
                      href="tel:+919823012307"
                      className="inline-flex justify-center items-center px-8 py-4 border-2 border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                    >
                      <PhoneCall className="mr-2 -ml-1 h-5 w-5 text-red-600" aria-hidden="true" />
                      24/7 Emergency Care
                    </a>
                  </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="hidden lg:block relative"
                >
                  <div className="relative">
                    <motion.img
                      initial={{ y: 0 }}
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      src="https://lh3.googleusercontent.com/pw/AP1GczO9gbL23ihtSpVBF78NCS4EzjcOzyzpQIxFNRyPoKLps2E0C39vUtiNxYpUY0NJcp1KUH8elX0xkr4zTAORjbAgsvN8uj_4eSGfnfNf5oCJBWeIVJWC=w1280"
                      alt="Dr. Nitin Naikwade - Hybrid Neurosurgeon"
                      className="w-full h-auto object-cover mix-blend-multiply filter contrast-105"
                      style={{ 
                        maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', 
                        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' 
                      }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-8 left-6 right-6 z-10">
                      <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/60 text-center">
                        <h3 className="text-xl font-bold text-slate-900 font-serif mb-1">Dr. Nitin Naikwade</h3>
                        <p className="text-sky-700 font-medium text-xs uppercase tracking-wider">Hybrid (Brain, Spine & Endovascular) Neurosurgeon</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
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
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center bg-gradient-to-br from-[#0f1115] via-[#1a1c23] to-[#0f1115]"
          >
            {/* Soft Neon Backlighting */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
              <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Bold Minimalist Typography */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="max-w-2xl"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 border border-white/10 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    Specialized Care
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                    Advanced <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Neurointervention
                    </span> <br />
                    & Trauma Care
                  </h1>
                  <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-light">
                    When seconds count, expertise matters. Delivering life-saving endovascular treatments and rapid response trauma care with state-of-the-art precision.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a
                      href="#contact"
                      className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-1"
                    >
                      Book an Appointment
                      <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>

                {/* Right: Floating 3D Abstract Graphic with Glassmorphism */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="hidden lg:flex justify-center relative"
                >
                  <motion.div
                    animate={{ y: [-15, 15, -15], rotateX: [0, 5, 0], rotateY: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full max-w-lg aspect-square"
                  >
                    {/* Glassmorphism Container */}
                    <div className="absolute inset-0 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
                      
                      {/* 3D Abstract Image */}
                      <img 
                        src="https://lh3.googleusercontent.com/pw/AP1GczPPN5LZ2WVwoyFkxj16CR7vAPMpGmH0ss1bKfhsXPds6bi-ybO0UM_qi6TDvFR3wbSWHm4HUoPDL9kPfnIg-ruJYSqVOD5NT7ojKb7mOmp-vz8euod8=w1280" 
                        alt="Advanced Neurointervention"
                        className="w-[120%] h-[120%] object-cover opacity-80 mix-blend-screen"
                      />
                      
                      {/* Inner Glass Elements */}
                      <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-lg" />
                      <div className="absolute bottom-12 left-8 w-32 h-32 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-lg rotate-12" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex space-x-2">
          <button 
            onClick={() => setCurrentSlide(0)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === 0 ? 'bg-sky-500 w-8' : 'bg-white/30 hover:bg-white/50'}`}
            aria-label="Go to slide 1"
          />
          <button 
            onClick={() => setCurrentSlide(1)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === 1 ? 'bg-blue-500 w-8' : 'bg-white/30 hover:bg-white/50'}`}
            aria-label="Go to slide 2"
          />
        </div>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
