import { Phone, MessageCircle, ShieldCheck, Clock, Wrench, Star } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="font-jakarta bg-[#1e3a5f] overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6 min-h-[92vh] flex items-center">

          {/* Left: Text */}
          <div className="relative z-10 w-full md:w-[52%] py-28 md:py-36 pr-0 md:pr-20">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-white/20 tracking-wide uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available 24/7 · Midwest Region
            </div>

            {/* Headline */}
            <h1 className="text-[52px] sm:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Plumbing Done<br />
              Right.{" "}
              <span className="text-amber-400">Same Day.</span>
            </h1>

            {/* Sub */}
            <p className="text-blue-100 text-lg leading-[1.7] max-w-md mb-10">
              Leaks, clogs, broken pipes — we show up fast, fix it properly,
              and tell you the price before we start. No surprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+15554821937"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-blue-50 text-[#1e3a5f] font-bold px-8 py-4 rounded-xl text-[15px] transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone size={18} />
                Call Now — +1 (555) 482-1937
              </a>
              <a
                href="https://wa.me/15554821937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-[15px] transition-all border border-white/25 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {[
                { icon: ShieldCheck, text: "Licensed & Insured" },
                { icon: Clock, text: "Same-Day Service" },
                { icon: Wrench, text: "Upfront Pricing" },
                { icon: Star, text: "4.9★ Rated" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-blue-100 text-sm font-medium">
                  <Icon size={15} className="text-amber-400 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo with left fade */}
          <div className="hidden md:block absolute top-0 right-0 w-[52%] h-full">
            <div
              className="absolute inset-y-0 left-0 w-64 z-10"
              style={{ background: "linear-gradient(to right, #1e3a5f 0%, transparent 100%)" }}
            />
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80"
              alt="Plumber working on pipes"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

        {/* Stats bar */}
        <div className="border-t border-white/10 bg-[#162f4f]">
          <div className="max-w-[1200px] mx-auto px-6 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { num: "15+", label: "Years in business" },
              { num: "500+", label: "Jobs completed" },
              { num: "24/7", label: "Emergency service" },
              { num: "4.9★", label: "Customer rating" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-white">{s.num}</p>
                <p className="text-blue-300 text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile sticky buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-2xl">
        <a
          href="tel:+15554821937"
          className="flex-1 flex items-center justify-center gap-2 bg-[#2563eb] active:bg-blue-700 text-white font-bold py-4 text-sm"
        >
          <Phone size={16} />
          Call Now
        </a>
        <a
          href="https://wa.me/15554821937"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 active:bg-green-600 text-white font-bold py-4 text-sm"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </>
  );
}