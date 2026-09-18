import { Phone, MessageCircle, CalendarCheck, ShieldCheck } from 'lucide-react';

interface MobileBottomBarProps {
  onSelectHeaderSection?: (section: null) => void;
}

export default function MobileBottomBar({ onSelectHeaderSection }: MobileBottomBarProps) {
  const handleScrollTo = (id: string) => {
    if (onSelectHeaderSection) {
      onSelectHeaderSection(null);
    }
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside aria-label="Quick Mobile Actions" className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2 px-3">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        <a
          href="tel:+919823012307"
          className="flex-1 flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 transition-colors active:scale-95 text-center min-h-[44px]"
          aria-label="Call Emergency Number"
        >
          <Phone className="w-4 h-4 mb-0.5 text-red-600" />
          <span className="text-[11px] font-bold tracking-tight leading-none">Emergency</span>
        </a>

        <a
          href="https://wa.me/919823012307?text=Hello%20Dr.%20Nitin%20Naikwade,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors active:scale-95 text-center min-h-[44px]"
          aria-label="WhatsApp Dr. Nitin Naikwade"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-emerald-600" />
          <span className="text-[11px] font-bold tracking-tight leading-none">WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => handleScrollTo('#second-opinion')}
          className="flex-1 flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-sky-50 text-sky-800 hover:bg-sky-100 transition-colors active:scale-95 text-center min-h-[44px]"
          aria-label="Request Second Opinion"
        >
          <ShieldCheck className="w-4 h-4 mb-0.5 text-sky-700" />
          <span className="text-[11px] font-bold tracking-tight leading-none">2nd Opinion</span>
        </button>

        <button
          type="button"
          onClick={() => handleScrollTo('#contact')}
          className="flex-1 flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-sky-700 text-white hover:bg-sky-800 shadow-sm transition-colors active:scale-95 text-center min-h-[44px]"
          aria-label="Book an Appointment"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight leading-none">Book Visit</span>
        </button>
      </div>
    </aside>
  );
}
