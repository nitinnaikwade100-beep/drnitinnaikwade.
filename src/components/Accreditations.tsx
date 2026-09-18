import { motion } from 'motion/react';
import { Award, ShieldCheck, GraduationCap, Globe } from 'lucide-react';

const accreditations = [
  {
    id: 1,
    title: "Neurological Society of India",
    abbr: "NSI",
    description: "Life member of the apex body representing neuroscientists in India.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "World Federation of Neurosurgical Societies",
    abbr: "WFNS",
    description: "Recognized member contributing to global neurosurgical advancements.",
    icon: Globe,
  },
  {
    id: 3,
    title: "Medical Council of India",
    abbr: "MCI",
    description: "Fully registered and accredited medical practitioner.",
    icon: Award,
  },
  {
    id: 4,
    title: "Society of Neurovascular Interventions",
    abbr: "SNVI",
    description: "Certified specialist in advanced endovascular neurosurgery.",
    icon: GraduationCap,
  }
];

export default function Accreditations() {
  return (
    <section className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
              Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-3 sm:mb-4">
              Professional <span className="text-sky-700 italic">Accreditations</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              Recognized and endorsed by leading medical institutions and professional bodies globally.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {accreditations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-sky-50 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 border-2 sm:border-4 border-white shadow-inner flex-shrink-0">
                <item.icon className="w-7 h-7 sm:w-10 sm:h-10 text-sky-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 font-serif">
                {item.title}
              </h3>
              <div className="text-[11px] sm:text-xs font-bold text-sky-600 mb-3 tracking-widest uppercase">
                {item.abbr}
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
