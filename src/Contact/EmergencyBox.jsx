import { Phone, MessageCircle } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="font-jakarta bg-[#f97316] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-20 translate-y-20" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">

        <div>
          <p className="text-orange-100 text-xs font-bold uppercase tracking-widest mb-3">Can't Wait?</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
            Skip the form — call us directly.
          </h2>
          <p className="text-orange-100 text-base max-w-md leading-relaxed">
            For burst pipes, major leaks, or anything urgent, calling gets you
            help fastest. We're on 24/7, every day of the year.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
          <a
            href="tel:+15554821937"
            className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-orange-50 text-[#f97316] font-bold px-7 py-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-900/20"
          >
            <Phone size={17} />
            Call Now — +1 (555) 482-1937
          </a>
          <a
            href="https://wa.me/15554821937"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all border border-white/30 hover:-translate-y-0.5"
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>
        </div>

      </div>
    </section>
  );
}