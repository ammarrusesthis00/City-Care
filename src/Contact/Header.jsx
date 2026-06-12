import { Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="font-jakarta bg-[#1a2f4e] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f4e]/95 via-[#1a2f4e]/85 to-[#1a2f4e]/60" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 sm:py-20">
        <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
          Contact Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4 max-w-xl">
          Get in Touch.<br />We'll Sort It Out.
        </h1>
        <p className="text-blue-200 text-base max-w-lg leading-relaxed mb-8">
          Call us, WhatsApp us, or fill in the form. We respond fast and can
          usually get someone to you same day across the Midwest.
        </p>
        <a
          href="tel:+15554821937"
          className="inline-flex items-center justify-center gap-2.5 bg-[#f97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-900/30"
        >
          <Phone size={15} />
          Call Now — +1 (555) 482-1937
        </a>
      </div>
    </section>
  );
}