/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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

export default function App() {
  return (
    <div className="min-h-screen bg-transparent selection:bg-sky-200 selection:text-sky-900 relative">
      <MorphBackground />
      <Navbar />
      <main>
        <Hero />
        <SectionTransition>
          <About />
        </SectionTransition>
        <SectionTransition>
          <Services />
        </SectionTransition>
        <SectionTransition>
          <Skills />
        </SectionTransition>
        <SectionTransition>
          <Gallery />
        </SectionTransition>
        <SectionTransition>
          <Blogs />
        </SectionTransition>
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
    </div>
  );
}
