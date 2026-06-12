import { Phone, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="font-jakarta bg-[#0f172a] py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f97316]/8 via-transparent to-blue-900/10" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl px-8 sm:px-14 py-14 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="max-w-lg">
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] mb-5">
              Book a plumber<br />today
            </h2>
            <p className="text-blue-300 text-base leading-relaxed mb-0">
              Same-day visits available. Tell us what's wrong and we'll
              get it sorted — no forms, no waiting around.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto shrink-0">
            <a
              href="tel:+15554821937"
              className="inline-flex items-center justify-center gap-2.5 bg-[#f97316] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-900/30 whitespace-nowrap"
            >
              <Phone size={16} />
              Call Now — +1 (555) 482-1937
            </a>
            <a
              href="https://wa.me/15554821937"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all border border-white/15 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
            <p className="text-blue-500 text-xs text-center mt-1">
              Available 24/7 · No call-out fee
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}