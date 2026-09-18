import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Grid, Layers, X, ZoomIn } from 'lucide-react';

export const galleryImages = [
  {
    id: 1,
    url: "/images/gallery/gallery-1.jpg",
    alt: "Dr. Nitin Naikwade - Hybrid Neurosurgeon in Surgical Attire",
    caption: "Dr. Nitin Naikwade prepared for complex neurovascular and cranial procedures."
  },
  {
    id: 2,
    url: "/tempImageeNJAWE.png",
    alt: "Dr. Nitin Naikwade Performing Microsurgery under Operating Microscope",
    caption: "Performing intricate neurosurgical dissection under high-magnification surgical microscope."
  },
  {
    id: 3,
    url: "/images/gallery/gallery-3.jpg",
    alt: "Dr Nitin Giving talk in NSICON 2025",
    caption: "Dr Nitin Giving talk in NSICON 2025"
  },
  {
    id: 4,
    url: "/images/gallery/gallery-4.jpg",
    alt: "Attending hands-on workshop with Dr. Nitin Dange",
    caption: "attending hands-on work shop with Dr. Nitin Dange"
  },
  {
    id: 5,
    url: "/images/gallery/gallery-5.jpg",
    alt: "Neurosurgical Team in Operating Theatre",
    caption: "Collaborative multidisciplinary surgical care for optimal patient outcomes."
  },
  {
    id: 6,
    url: "/images/gallery/gallery-6.jpg",
    alt: "Dr. Nitin Naikwade - Consultant Neurosurgeon",
    caption: "Consultant Hybrid Neurosurgeon specializing in brain, spine, and endovascular surgery."
  },
  {
    id: 7,
    url: "/images/gallery/gallery-7.jpg",
    alt: "Advanced Medical and Surgical Facilities - Cath Lab Suite",
    caption: "High-resolution biplane fluoroscopy suite for endovascular interventions."
  },
  {
    id: 8,
    url: "/images/gallery/gallery-8.jpg",
    alt: "Minimally Invasive Neuroendovascular Procedures",
    caption: "State-of-the-art diagnostic and therapeutic neuro-interventions."
  },
  {
    id: 9,
    url: "/images/gallery/gallery-9.jpg",
    alt: "Clinical Consultation and Patient Care",
    caption: "Comprehensive patient evaluations and personalized neurological treatment planning."
  },
  {
    id: 10,
    url: "/images/gallery/gallery-10.jpg",
    alt: "Cutting-Edge Neurointervention Cath Lab Suite",
    caption: "Equipped with advanced C-arm imaging for immediate catheter-based stroke and aneurysm therapies."
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 600 : -600,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 600 : -600,
    opacity: 0
  })
};

interface GalleryProps {
  onClose?: () => void;
  isStandaloneModal?: boolean;
}

export default function Gallery({ onClose, isStandaloneModal = false }: GalleryProps) {
  const [page, setPage] = useState([0, 0]);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageIndex, direction] = page;

  const paginate = (newDirection: number) => {
    let nextIndex = imageIndex + newDirection;
    if (nextIndex < 0) nextIndex = galleryImages.length - 1;
    if (nextIndex >= galleryImages.length) nextIndex = 0;
    setPage([nextIndex, newDirection]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') setLightboxIndex(null);
        if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev! + 1) % galleryImages.length);
        if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
      } else if (onClose && e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, onClose]);

  return (
    <section id="gallery" className={`py-12 sm:py-16 bg-slate-950 text-slate-100 relative overflow-hidden ${isStandaloneModal ? 'min-h-screen' : ''}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Bar / Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-bold tracking-widest uppercase mb-3">
              Clinical Gallery &amp; Facilities
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
              A Glimpse into <span className="text-sky-400 italic">Our Practice</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-400 mt-2 max-w-2xl">
              Authentic high-resolution photographs of Dr. Nitin Naikwade, the surgical theatre, neuroendovascular cath lab suites, and clinical operations shown in their full uncropped aspect ratios.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Slideshow View"
              >
                <Layers className="w-3.5 h-3.5 mr-1 sm:mr-1.5" />
                Featured
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="All Photos Grid"
              >
                <Grid className="w-3.5 h-3.5 mr-1 sm:mr-1.5" />
                All ({galleryImages.length})
              </button>
            </div>

            {/* Optional Close button when opened as modal view */}
            {onClose && (
              <button
                onClick={onClose}
                className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs sm:text-sm font-medium transition-colors min-h-[40px]"
              >
                <X className="w-4 h-4 mr-1 sm:mr-1.5" />
                Close
              </button>
            )}
          </div>
        </div>

        {/* Carousel View (Uncropped with object-contain) */}
        {viewMode === 'carousel' ? (
          <div className="space-y-4 sm:space-y-6">
            <div className="relative w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 shadow-2xl">
              
              {/* Uncropped Image Display Area */}
              <div className="relative w-full h-[320px] sm:h-[460px] md:h-[580px] flex items-center justify-center p-3 sm:p-6 bg-radial from-slate-900 via-slate-950 to-black">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={imageIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={galleryImages[imageIndex].url}
                      alt={galleryImages[imageIndex].alt}
                      className="max-w-full max-h-full object-contain rounded-lg sm:rounded-xl shadow-2xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] select-none cursor-pointer"
                      onClick={() => setLightboxIndex(imageIndex)}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Prev/Next Buttons */}
                <button
                  onClick={() => paginate(-1)}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-950/80 hover:bg-sky-600 text-white backdrop-blur-md border border-slate-700 flex items-center justify-center transition-all shadow-lg z-20 active:scale-95"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-950/80 hover:bg-sky-600 text-white backdrop-blur-md border border-slate-700 flex items-center justify-center transition-all shadow-lg z-20 active:scale-95"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Lightbox Trigger Button */}
                <button
                  onClick={() => setLightboxIndex(imageIndex)}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-[11px] sm:text-xs backdrop-blur-md border border-slate-700 transition-colors"
                  title="View Full Resolution"
                >
                  <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Full View</span>
                </button>

                {/* Index Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] sm:text-xs font-mono text-slate-300">
                  {imageIndex + 1} / {galleryImages.length}
                </div>
              </div>

              {/* Caption & Info Panel */}
              <div className="bg-slate-900/95 border-t border-slate-800 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-white font-medium text-base sm:text-lg">
                    {galleryImages[imageIndex].alt}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                    {galleryImages[imageIndex].caption}
                  </p>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-[11px] text-sky-400 uppercase tracking-wider font-semibold bg-sky-950/70 border border-sky-800/40 px-2.5 py-1 rounded-md">
                    Uncropped 100%
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="max-w-5xl mx-auto overflow-x-auto pb-2 pt-1">
              <div className="flex justify-start sm:justify-center gap-2.5 min-w-max px-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      const newDirection = idx > imageIndex ? 1 : -1;
                      setPage([idx, newDirection]);
                    }}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-900 border transition-all p-1 flex items-center justify-center flex-shrink-0 ${
                      idx === imageIndex
                        ? 'border-sky-500 ring-2 ring-sky-500/50 scale-105 shadow-md shadow-sky-900/20'
                        : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700'
                    }`}
                    aria-label={`Select photo ${idx + 1}`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Grid View - Show every photo uncropped at natural aspect ratio */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-sky-500/60 transition-all flex flex-col"
              >
                {/* Image Container with Natural Uncropped Fit */}
                <div
                  className="relative bg-slate-950 p-4 h-64 sm:h-72 flex items-center justify-center cursor-pointer overflow-hidden"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-sky-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3.5 py-1.5 rounded-full bg-sky-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <ZoomIn className="w-3.5 h-3.5" />
                      View Full Size
                    </span>
                  </div>
                </div>
                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between border-t border-slate-800/80 bg-slate-900/90">
                  <div>
                    <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider block mb-1">
                      Photo {idx + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-white leading-snug">
                      {img.alt}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Full-Screen Lightbox Modal for Uncropped Viewing */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Lightbox Bar */}
            <div className="flex items-center justify-between z-10 text-white">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-300">
                  {lightboxIndex + 1} of {galleryImages.length}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-200">
                  {galleryImages[lightboxIndex].alt}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-white transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Lightbox Image (Completely Uncropped) */}
            <div
              className="relative flex-1 flex items-center justify-center p-2 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].url}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl select-none"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next controls */}
              <button
                onClick={() => setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setLightboxIndex((prev) => (prev! + 1) % galleryImages.length)}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div
              className="text-center text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages[lightboxIndex].caption}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
