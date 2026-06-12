import { Phone, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call or Message Us",
    desc: "Give us a call or send a WhatsApp. Tell us what's wrong and where you are. No forms, no waiting.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wrench,
    number: "02",
    title: "We Come to You",
    desc: "A local plumber heads your way — same day in most cases. We'll give you a real time window.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Problem Fixed",
    desc: "We diagnose, explain the fix, and get it done. You'll know the price before any work starts.",
    img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section className="font-jakarta bg-[#f8fafc] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Simple Process</span>
            <h2 className="text-4xl font-bold text-[#0f172a] mt-2 leading-tight">
              How It Works
            </h2>
          </div>
          <p className="text-[#64748b] text-base max-w-xs sm:text-right leading-relaxed">
            No complicated booking. Just call, we come, we fix it.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, number, title, desc, img }, i) => (
            <div key={title} className="group relative">

              {/* Connector line between cards (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[88px] left-[calc(100%+0px)] w-6 h-px bg-[#e2e8f0] z-10" />
              )}

              {/* Image */}
              <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
                {/* Big number watermark */}
                <div className="absolute bottom-3 right-4 text-white/20 font-black text-6xl leading-none select-none">
                  {number}
                </div>
                {/* Step badge */}
                <div className="absolute top-3 left-3 bg-[#f97316] text-white text-[11px] font-black px-2.5 py-1 rounded-lg">
                  Step {number}
                </div>
              </div>

              {/* Content */}
              <div className="px-1">
                <div className="w-10 h-10 bg-[#1a2f4e] rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-[#0f172a] font-bold text-lg mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}