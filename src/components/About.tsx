import { motion } from 'motion/react';
import { Award, BookOpen, HeartPulse } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="mb-10 lg:mb-0 relative max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full object-cover h-[320px] sm:h-[460px] lg:h-[600px]"
                src="/images/about.jpg"
                alt="Dr. Nitin Naikwade in surgery"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-sky-700 text-white p-3.5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border-2 sm:border-4 border-white transform rotate-2 sm:rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-sky-200 shrink-0" />
                <div>
                  <p className="text-lg sm:text-2xl font-bold font-serif">Youngest</p>
                  <p className="text-[11px] sm:text-sm font-medium text-sky-100 uppercase tracking-wider">Hybrid Neurosurgeon in India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 lg:mt-0"
          >
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-serif mb-4 sm:mb-6 leading-tight">
              Pioneering the Future of <span className="text-sky-700 italic">Neurological Care</span>
            </h2>
            
            <div className="prose prose-slate text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              <p className="mb-4">
                Dr. Nitin Naikwade is distinguished as the youngest hybrid neurosurgeon in India, bringing a revolutionary dual-trained approach to complex neurological care. He completed his prestigious MCh in Neurosurgery from the renowned Lokmanya Tilak Municipal Medical College (LTMMC) in Sion, Mumbai.
              </p>
              <p>
                Driven by a relentless pursuit of excellence, he is currently advancing his expertise as a Fellow in Neuroendovascular Intervention (SNVI) under the esteemed mentorship of Dr. Nitin Dange.
              </p>
            </div>

            {/* Philosophy Box */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-8 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300 mb-6 sm:mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600 mr-2.5 sm:mr-3 shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">Treatment Philosophy</h3>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "My philosophy centers on the seamless integration of traditional open microsurgery with cutting-edge, minimally invasive endovascular techniques. This hybrid approach ensures that every patient receives the safest, most effective, and highly individualized intervention tailored to their unique neurological condition."
                </p>
              </div>
            </div>

            {/* Credentials List */}
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-sky-600" />
                </div>
                <p className="ml-3 text-sm sm:text-base text-slate-700">
                  <strong className="text-slate-900">MCh Neurosurgery</strong> - LTMMC, Sion, Mumbai
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-sky-600" />
                </div>
                <p className="ml-3 text-sm sm:text-base text-slate-700">
                  <strong className="text-slate-900">Fellow in Neuroendovascular Intervention (SNVI)</strong>
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
