/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar, { HeaderSection } from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SecondOpinion from './components/SecondOpinion';
import Services from './components/Services';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Blogs from './components/Blogs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Accreditations from './components/Accreditations';
import Footer from './components/Footer';
import MorphBackground from './components/MorphBackground';
import SectionTransition from './components/SectionTransition';
import MobileBottomBar from './components/MobileBottomBar';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeHeaderSection, setActiveHeaderSection] = useState<HeaderSection>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#expertise') return 'expertise';
      if (hash === '#gallery') return 'gallery';
      if (hash === '#blogs') return 'blogs';
    }
    return null;
  });

  // Synchronize with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#expertise') {
        setActiveHeaderSection('expertise');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#gallery') {
        setActiveHeaderSection('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#blogs') {
        setActiveHeaderSection('blogs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '' || hash === '#about' || hash === '#services' || hash === '#second-opinion' || hash === '#contact') {
        setActiveHeaderSection(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCloseSection = () => {
    setActiveHeaderSection(null);
    window.history.replaceState(null, '', ' ');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectHeaderSection = (section: HeaderSection) => {
    setActiveHeaderSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent selection:bg-sky-200 selection:text-sky-900 relative">
      <MorphBackground />
      <Navbar 
        activeHeaderSection={activeHeaderSection} 
        onSelectHeaderSection={handleSelectHeaderSection} 
      />

      {/* Main Page Flow vs Dedicated Header Sections */}
      <div className="pt-14 sm:pt-20 md:pt-28">
        <AnimatePresence mode="wait">
          {activeHeaderSection === 'expertise' && (
            <motion.div
              key="expertise-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Skills onClose={handleCloseSection} isStandaloneModal={true} />
              <Footer />
            </motion.div>
          )}

          {activeHeaderSection === 'gallery' && (
            <motion.div
              key="gallery-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Gallery onClose={handleCloseSection} isStandaloneModal={true} />
              <Footer />
            </motion.div>
          )}

          {activeHeaderSection === 'blogs' && (
            <motion.div
              key="blogs-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Blogs onClose={handleCloseSection} isStandaloneModal={true} />
              <Footer />
            </motion.div>
          )}

          {activeHeaderSection === null && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <main>
                <Hero />
                <SectionTransition>
                  <About />
                </SectionTransition>
                <SectionTransition>
                  <SecondOpinion />
                </SectionTransition>
                <SectionTransition>
                  <Services />
                </SectionTransition>
                {/* Notice: Expertise (Skills), Gallery, and Blogs are removed from the main scroll flow and accessible via their dedicated header links */}
                <SectionTransition>
                  <Testimonials />
                </SectionTransition>
                <SectionTransition>
                  <FAQ />
                </SectionTransition>
                <SectionTransition>
                  <Accreditations />
                </SectionTransition>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Mobile Quick Actions Bar */}
      <MobileBottomBar onSelectHeaderSection={handleSelectHeaderSection} />
    </div>
  );
}
