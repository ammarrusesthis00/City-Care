import { Phone, MessageCircle, ShieldCheck, Award, Users } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="font-jakarta bg-[#1a2f4e] relative overflow-hidden">
      {/* Background image — directional fade like Services */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f4e]/95 via-[#1a2f4e]/85 to-[#1a2f4e]/60" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 sm:py-20">

        <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
          About Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4 max-w-xl">
          Real Plumbers.<br />No Runaround.
        </h1>
        <p className="text-blue-200 text-base max-w-lg leading-relaxed mb-8">
          Local team, honest pricing, and work we stand behind. We've been
          serving the Midwest for over 15 years — no subcontractors, no surprises.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a
            href="tel:+15554821937"
            className="inline-flex items-center justify-center gap-2.5 bg-[#f97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-900/30"
          >
            <Phone size={15} />
            Call Now — +1 (555) 482-1937
          </a>
          <a
            href="https://wa.me/15554821937"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all border border-white/20 hover:-translate-y-0.5"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>

        {/* Stat pills */}
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Award,       text: "15+ Years Experience" },
            { icon: Users,       text: "500+ Jobs Completed" },
            { icon: ShieldCheck, text: "Licensed & Insured" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full">
              <Icon size={13} className="text-amber-400 shrink-0" />
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}