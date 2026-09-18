import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Dr. Naikwade's hybrid approach to my aneurysm treatment was phenomenal. The minimally invasive procedure meant I was back on my feet in days instead of weeks. Truly a lifesaver.",
    author: "Rajesh Sharma",
    role: "Patient"
  },
  {
    id: 2,
    text: "Finding a surgeon who is both incredibly skilled and deeply compassionate is rare. Dr. Naikwade took the time to explain every detail of my spine surgery. I felt completely safe in his hands.",
    author: "Priya Patel",
    role: "Patient"
  },
  {
    id: 3,
    text: "After my severe head trauma, the emergency care provided by Dr. Naikwade and his team was nothing short of miraculous. His expertise in neuro-critical care gave me a second chance at life.",
    author: "Amit Desai",
    role: "Patient"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
              Patient Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif mb-3 sm:mb-4">
              Trusted by <span className="text-sky-700 italic">Patients</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              Read about the experiences and successful recoveries of our patients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 relative hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-sky-100 absolute top-5 right-5 sm:top-6 sm:right-6 pointer-events-none" />
              <div>
                <div className="flex space-x-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 sm:mb-8 relative z-10 italic text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 font-bold text-base sm:text-lg mr-3 sm:mr-4 flex-shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{testimonial.author}</h4>
                  <p className="text-xs sm:text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
