import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  MapPin, 
  Video, 
  Phone, 
  MessageSquare, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Brain, 
  Activity, 
  FileText, 
  Send,
  CalendarCheck
} from 'lucide-react';

export default function SecondOpinion() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consultationMode: 'Video Consultation',
    condition: 'Brain Aneurysms & AVMs',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Dr. Nitin Naikwade,%0A%0AI would like to schedule an Expert Second Opinion Consultation.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Consultation Mode:* ${encodeURIComponent(formData.consultationMode)}%0A*Condition/Scans:* ${encodeURIComponent(formData.condition)}%0A*Case Summary:* ${encodeURIComponent(formData.message || 'Have recent MRI/CT scan reports ready for review.')}`;
    window.open(`https://wa.me/919823012307?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Second Opinion Consultation Request - ${formData.name || 'Patient'}`);
    const body = encodeURIComponent(`Dear Dr. Nitin Naikwade,

I would like to request an Expert Second Opinion in Neurosurgery with you.

Patient Details:
- Name: ${formData.name}
- Phone / WhatsApp: ${formData.phone}
- Email: ${formData.email}
- Preferred Mode: ${formData.consultationMode}
- Clinical Area: ${formData.condition}

Case Summary / Diagnostic Reports:
${formData.message || 'I have attached/prepared my MRI/CT scan reports for your review.'}

Thank you,
${formData.name}`);
    window.location.href = `mailto:nitinnaikwade100@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="second-opinion" className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-sky-50/40 to-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4 border border-sky-200/80 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-sky-700" />
            EXPERT SECOND OPINION IN NEUROSURGERY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-3 sm:mb-4"
          >
            A Second Opinion, <span className="text-sky-700 italic">Before You Decide.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center justify-center space-y-1 mb-5 sm:mb-6"
          >
            <span className="text-base sm:text-xl font-bold text-slate-800 tracking-wide font-serif">
              DR. NITIN NAIKWADE
            </span>
            <span className="text-xs sm:text-sm font-semibold text-sky-700 tracking-wider uppercase">
              Hybrid Neurosurgeon
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium italic">
              Bridging Open Microsurgery &amp; Minimally Invasive Interventions
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-sky-100 shadow-sm"
          >
            If surgery has been advised for a brain aneurysm, an AVM, a stroke‑related blockage, or a spine condition, it helps to be sure before you commit. A second opinion means a fresh, independent look at your scans and reports — the diagnosis, the options, and whether surgery is really the next step.
          </motion.p>
        </div>

        {/* Why Get a Second Opinion Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Why Get a Second Opinion?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Empowering patients and families with clarity, safety, and unbiased surgical counsel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                Diagnostic Confirmation
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Confirm your primary diagnosis with comprehensive expert neurovascular and neuroimaging evaluation before committing to invasive treatment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                Minimally Invasive Options
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Explore catheter-based endovascular coiling/stenting or keyhole endoscopic spine procedures designed for shorter recovery times and minimal tissue trauma.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                Unbiased Advice
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Receive honest, evidence-based recommendations on whether surgery is truly necessary, or if conservative medical management and surveillance are safest.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Areas of Clinical Expertise */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Areas of Clinical Expertise
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Dual-specialized in both endovascular neurointervention and open microneurosurgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-700 text-white flex items-center justify-center shadow-md shadow-sky-700/20">
                  <Activity className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">Specialized Focus</span>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                    Cerebrovascular &amp; Endovascular Care
                  </h4>
                </div>
              </div>

              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Brain Aneurysms &amp; AVMs</strong>
                    <span className="text-sm text-slate-600">Precision assessment for endovascular coiling, flow-diverting stents, or microsurgical clipping.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Carotid Stenting &amp; Acute Stroke Intervention</strong>
                    <span className="text-sm text-slate-600">Emergency mechanical thrombectomy, carotid artery stenting, and stroke risk prevention.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Vascular Malformations</strong>
                    <span className="text-sm text-slate-600">Dural arteriovenous fistulas (dAVF), cavernomas, and complex spinal vascular malformations.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-indigo-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-900 text-white flex items-center justify-center shadow-md shadow-indigo-900/20">
                  <Brain className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block">Comprehensive Care</span>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                    Brain &amp; Spine Surgery
                  </h4>
                </div>
              </div>

              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Complex Brain &amp; Pituitary Tumors</strong>
                    <span className="text-sm text-slate-600">Skull base microsurgery and endoscopic transnasal excision of pituitary adenomas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Endoscopic &amp; Minimally Invasive Spine Surgery</strong>
                    <span className="text-sm text-slate-600">Tubular microdiscectomy and endoscopic spinal decompression preserving back muscles.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Cervical / Lumbar Spondylosis &amp; Disc Herniation</strong>
                    <span className="text-sm text-slate-600">Advanced treatment for sciatica, myelopathy, radiculopathy, and spinal stabilization.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Convenient Consultation Modes */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Convenient Consultation Modes
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Flexible options designed for patients across Mumbai, throughout India, and internationally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border-2 border-sky-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-serif mb-1">
                  In-Person Appointments
                </h4>
                <p className="text-sky-700 font-semibold text-sm mb-1">
                  Mumbai Clinics &amp; Hospitals
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Comprehensive in-clinic clinical examination, neurological assessment, and face-to-face disc/scan review.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center flex-shrink-0">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-serif mb-1">
                  Video Consultations
                </h4>
                <p className="text-indigo-700 font-semibold text-sm mb-1">
                  Pan-India &amp; International Patients
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Secure tele-consultation from the comfort of your home. Share your MRI/CT digital DICOM files directly for comprehensive review.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule & Contact Box */}
        <div className="bg-slate-900 text-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left: Contact Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold tracking-wider uppercase border border-sky-500/30">
                <CalendarCheck className="w-3.5 h-3.5" />
                GET IN TOUCH TO SCHEDULE
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Schedule Your Expert Second Opinion
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Have your MRI, CT, or angiogram reports ready. Connect directly with Dr. Nitin Naikwade&apos;s team via phone, WhatsApp, or email for priority scheduling.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="tel:+919823012307"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Phone Call</span>
                    <span className="text-base font-bold text-white">+91 9823012307</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919823012307?text=Hello%20Dr.%20Nitin%20Naikwade,%20I%20would%20like%20to%20schedule%20an%20expert%20second%20opinion%20in%20neurosurgery."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">WhatsApp Priority Booking</span>
                    <span className="text-base font-bold text-white">+91-9823012307</span>
                  </div>
                </a>

                <a
                  href="mailto:nitinnaikwade100@gmail.com?subject=Expert%20Second%20Opinion%20Consultation"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Email</span>
                    <span className="text-base font-bold text-white">nitinnaikwade100@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://drnitinnaikwade.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Official Portal</span>
                    <span className="text-base font-bold text-white">drnitinnaikwade.netlify.app</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Quick Request Form */}
            <div className="lg:col-span-6 bg-slate-800/90 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-slate-700 shadow-xl">
              <h4 className="text-xl font-bold text-white font-serif mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-400" />
                Request Scan Review
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mb-5">
                Fill in your details below to instantly dispatch your second opinion inquiry to Dr. Naikwade.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-base sm:text-sm min-h-[44px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9823012307"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-base sm:text-sm min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-base sm:text-sm min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Consultation Mode
                    </label>
                    <select
                      value={formData.consultationMode}
                      onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500 text-base sm:text-sm min-h-[44px]"
                    >
                      <option value="Video Consultation">Video Consultation (Pan-India/Global)</option>
                      <option value="In-Person Mumbai">In-Person Appointment (Mumbai)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Clinical Condition
                    </label>
                    <select
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500 text-base sm:text-sm min-h-[44px]"
                    >
                      <option value="Brain Aneurysms & AVMs">Brain Aneurysms &amp; AVMs</option>
                      <option value="Carotid Stenting & Acute Stroke">Carotid Stenting &amp; Stroke</option>
                      <option value="Complex Brain & Pituitary Tumors">Brain &amp; Pituitary Tumors</option>
                      <option value="Endoscopic Spine Surgery & Disc">Spine &amp; Disc Herniation</option>
                      <option value="Other Neurosurgical Condition">Other Neurological Condition</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Current Diagnosis / Scan Summary (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe symptoms, previous doctor recommendation, or scan findings..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-base sm:text-sm min-h-[44px]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-600/30 gap-2 min-h-[46px] active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book via WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-sky-600/30 gap-2 min-h-[46px] active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    Send via Email
                  </button>
                </div>

                {submitted && (
                  <p className="text-xs text-emerald-400 text-center font-medium mt-2">
                    Opening WhatsApp to complete your consultation request with Dr. Nitin Naikwade.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
