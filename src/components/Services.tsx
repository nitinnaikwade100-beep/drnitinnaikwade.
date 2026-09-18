import { motion } from 'motion/react';
import { Activity, Brain, Stethoscope, ShieldAlert } from 'lucide-react';

const services = [
  {
    title: 'Neuroendovascular Intervention',
    description: 'Minimally invasive techniques for complex vascular conditions of the brain and spine.',
    icon: Activity,
    image: '/tempImageH18NtD.png',
    color: 'bg-blue-50 text-blue-700',
    items: [
      'Diagnostic Angiography (DSA)',
      'Aneurysm Treatment (parent artery reconstruction)',
      'Stroke Management (cryptogenic strokes)',
      'Therapeutic Endovascular Procedures (flow diversion)',
    ],
  },
  {
    title: 'Advanced Brain & Spine Surgery',
    description: 'Comprehensive surgical care utilizing the latest microsurgical techniques.',
    icon: Brain,
    image: '/tempImage2o5twh.png',
    color: 'bg-emerald-50 text-emerald-700',
    items: [
      'Comprehensive Neurological Assessments',
      'Individualized Treatment Planning',
      'Elective Neurosurgery',
    ],
  },
  {
    title: 'Emergency Neuro-Trauma Care',
    description: 'Rapid, life-saving interventions for severe neurological emergencies.',
    icon: ShieldAlert,
    image: '/images/gallery/gallery-5.jpg',
    color: 'bg-rose-50 text-rose-700',
    items: [
      '24/7 Trauma Management',
      'Emergency Response for severe head trauma',
      'Emergency Response for severe spine trauma',
    ],
  },
  {
    title: 'Specialized Surgical Offerings',
    description: 'Cutting-edge procedures tailored for specific, complex conditions.',
    icon: Stethoscope,
    image: '/tempImage41Eoab.png',
    color: 'bg-purple-50 text-purple-700',
    items: [
      'Endoscopic pituitary tumor surgery',
      'Minimally Invasive Spine Surgery (Endoscopic/Robotic)',
      'Neuro-Critical Care',
      'Neuro-Rehabilitation',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
              Core Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif mb-4">
              Comprehensive <span className="text-sky-700 italic">Neurological Care</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Offering a full spectrum of advanced treatments, from minimally invasive endovascular procedures to complex open surgeries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-slate-50 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-150 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="h-44 sm:h-52 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 sm:mb-8 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className={`absolute bottom-3 left-6 sm:bottom-4 sm:left-8 inline-flex items-center justify-center p-2.5 sm:p-3 rounded-xl shadow-lg bg-white ${service.color.split(' ')[1]}`}>
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mb-2.5 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      </div>
                      <p className="ml-2.5 sm:ml-3 text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
