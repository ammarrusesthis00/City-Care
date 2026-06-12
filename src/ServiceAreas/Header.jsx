import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function ServiceAreaHero() {
  return (
    <section className="font-jakarta bg-[#1a2f4e] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f4e]/95 via-[#1a2f4e]/85 to-[#1a2f4e]/60" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 sm:py-24">

        <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
          Service Areas
        </span>
        <h1 className="text-5xl sm:text-[60px] font-extrabold text-white leading-[1.05] tracking-tight mb-5 max-w-2xl">
          Plumbing Services<br />Across the Midwest
        </h1>
        <p className="text-blue-200 text-lg max-w-lg leading-relaxed mb-8">
          Local plumbers covering 20+ towns and cities across the Midwest region.
          Same-day visits, 24/7 emergency callouts, and upfront pricing wherever you are.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a
            href="tel:+15554821937"
            className="inline-flex items-center justify-center gap-2.5 bg-[#f97316] hover:bg-orange-500 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-900/30"
          >
            <Phone size={16} />
            Call Now — +1 (555) 482-1937
          </a>
          <a
            href="https://wa.me/15554821937"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all border border-white/20 hover:-translate-y-0.5"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            { icon: MapPin, text: "20+ Areas Covered" },
            { icon: Clock, text: "Same-Day Available" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full">
              <Icon size={13} className="text-amber-400" />
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}