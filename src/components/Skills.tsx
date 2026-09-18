import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Microscope, Activity, Crosshair } from 'lucide-react';

const skills = [
  'Brain and Spine Surgery',
  'Endovascular Neurosurgery',
  'Diagnostic Interpretation',
  'Neurological Assessments',
  'Treatment Planning',
  'Emergency Response',
  'Patient Communication',
];

const specializedExpertise = [
  {
    title: 'Microsurgery',
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85',
    description: 'Utilizing state-of-the-art operating microscopes and precision instruments, Dr. Naikwade performs intricate procedures on the brain and spinal cord. This approach minimizes damage to surrounding healthy tissue, ensuring safer tumor resections, vascular repairs, and nerve decompressions with enhanced visual clarity.',
    bullets: [
      'Complex brain tumor resection',
      'Microvascular decompression',
      'Aneurysm clipping'
    ]
  },
  {
    title: 'Neuroendovascular',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=85',
    description: 'As a dual-trained hybrid neurosurgeon, Dr. Naikwade excels in diagnosing and treating vascular diseases of the central nervous system from inside the blood vessels. Using advanced catheter-based technology and real-time imaging, he navigates the vascular system to treat life-threatening conditions without open surgery.',
    bullets: [
      'Diagnostic Cerebral Angiography (DSA)',
      'Mechanical thrombectomy for acute stroke',
      'Endovascular coiling and flow diversion'
    ]
  },
  {
    title: 'Minimally Invasive',
    icon: Crosshair,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=85',
    description: 'Dedicated to faster recovery and reduced postoperative pain, Dr. Naikwade employs endoscopic and tubular retractor systems for both cranial and spinal surgeries. These advanced techniques require only small incisions, leading to less blood loss, shorter hospital stays, and quicker return to normal daily activities.',
    bullets: [
      'Endoscopic pituitary surgery',
      'Minimally invasive spine fusion',
      'Endoscopic third ventriculostomy (ETV)'
    ]
  }
];

interface SkillsProps {
  onClose?: () => void;
  isStandaloneModal?: boolean;
}

export default function Skills({ onClose, isStandaloneModal = false }: SkillsProps) {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <section id="expertise" className={`py-12 sm:py-20 bg-white relative overflow-hidden ${isStandaloneModal ? 'min-h-screen' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modal Header Bar when opened from navigation */}
        {onClose && (
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 border-b border-slate-100">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 bg-sky-100 text-sky-800 rounded-full">
                Specialized Care
              </span>
              <span className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:inline">Clinical Expertise &amp; Surgical Triad</span>
            </div>
            <button
              onClick={onClose}
              className="flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        )}

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-16 sm:mb-24">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 lg:mb-0"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">
              Clinical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif mb-4 sm:mb-6 leading-tight">
              Mastery in <span className="text-sky-700 italic">Complex Interventions</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Dr. Naikwade's extensive training and experience encompass a broad range of highly specialized skills, ensuring comprehensive care from diagnosis through recovery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600 mr-2.5 sm:mr-3 flex-shrink-0" />
                  <span className="font-medium text-xs sm:text-sm text-slate-800">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
              <img
                className="w-full h-auto object-cover aspect-[4/5]"
                src="/hero-image.jpg"
                alt="Dr. Nitin Naikwade - Clinical Expertise"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />
          </motion.div>

        </div>

        {/* Interactive Diagram Subsection */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mb-3 sm:mb-4">
              The Hybrid <span className="text-sky-700 italic">Neurosurgeon Triad</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              Click on each area to explore how these three distinct disciplines interconnect to provide comprehensive, minimally invasive care.
            </p>
          </motion.div>

          <div className="mt-8 sm:mt-16 lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            {/* Diagram */}
            <div className="lg:col-span-5 relative max-w-[270px] sm:max-w-sm mx-auto w-full aspect-square mb-10 lg:mb-0">
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line x1="50%" y1="16%" x2="16%" y2="84%" stroke="#f1f5f9" strokeWidth="5" strokeLinecap="round" />
                <line x1="50%" y1="16%" x2="84%" y2="84%" stroke="#f1f5f9" strokeWidth="5" strokeLinecap="round" />
                <line x1="16%" y1="84%" x2="84%" y2="84%" stroke="#f1f5f9" strokeWidth="5" strokeLinecap="round" />
                
                {/* Active Lines */}
                <line x1="50%" y1="16%" x2="16%" y2="84%" stroke={activeNode === 0 || activeNode === 1 ? "#0ea5e9" : "transparent"} strokeWidth="5" strokeLinecap="round" className="transition-all duration-500" />
                <line x1="50%" y1="16%" x2="84%" y2="84%" stroke={activeNode === 0 || activeNode === 2 ? "#0ea5e9" : "transparent"} strokeWidth="5" strokeLinecap="round" className="transition-all duration-500" />
                <line x1="16%" y1="84%" x2="84%" y2="84%" stroke={activeNode === 1 || activeNode === 2 ? "#0ea5e9" : "transparent"} strokeWidth="5" strokeLinecap="round" className="transition-all duration-500" />
              </svg>

              {/* Nodes */}
              {specializedExpertise.map((item, index) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2", // Top
                  "bottom-0 left-0", // Bottom Left
                  "bottom-0 right-0" // Bottom Right
                ];
                const isActive = activeNode === index;
                
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveNode(index)}
                    className={`absolute ${positions[index]} flex flex-col items-center justify-center w-22 h-22 sm:w-32 sm:h-32 rounded-full bg-white shadow-lg border-2 sm:border-4 transition-all duration-300 z-10 p-1 ${
                      isActive ? 'border-sky-500 scale-105 sm:scale-110 shadow-sky-200' : 'border-slate-100 hover:border-sky-300'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 sm:w-8 sm:h-8 mb-1 sm:mb-2 transition-colors duration-300 ${isActive ? 'text-sky-600' : 'text-slate-400'}`} />
                    <span className={`text-[10px] sm:text-xs font-bold text-center px-1 leading-tight ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
              
              {/* Center Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10 bg-white/80 backdrop-blur-sm rounded-full p-0.5 sm:p-1">
                <div className="bg-sky-50 text-sky-800 text-[9px] sm:text-xs font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-sky-200 shadow-sm">
                  Hybrid Care
                </div>
              </div>
            </div>

            {/* Details Panel */}
            <div className="lg:col-span-7 h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm border border-slate-100 w-full"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white text-sky-600 shadow-sm border border-slate-100 mb-4 sm:mb-6">
                    {(() => {
                      const Icon = specializedExpertise[activeNode].icon;
                      return <Icon className="w-6 h-6 sm:w-8 sm:h-8" />;
                    })()}
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-serif mb-3 sm:mb-4">
                    {specializedExpertise[activeNode].title}
                  </h4>
                  <div className="mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-md h-44 sm:h-64">
                    <img 
                      src={specializedExpertise[activeNode].image} 
                      alt={specializedExpertise[activeNode].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                    {specializedExpertise[activeNode].description}
                  </p>
                  <div className="border-t border-slate-200 pt-5 sm:pt-6">
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 sm:mb-4">Key Procedures</h5>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {specializedExpertise[activeNode].bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                          </div>
                          <p className="ml-2.5 sm:ml-3 text-xs sm:text-sm md:text-base font-medium text-slate-700">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
