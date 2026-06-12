import { ShieldCheck, Clock, DollarSign, ThumbsUp, MapPin } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Every technician is fully licensed and insured. You're covered on every job, no exceptions.",
  },
  {
    icon: Clock,
    title: "We Actually Show Up",
    desc: "We give you a real time window and stick to it. No 6-hour waiting around wondering where we are.",
  },
  {
    icon: DollarSign,
    title: "Price Before We Start",
    desc: "You'll know exactly what it costs before any work begins. No surprise charges at the end.",
  },
  {
    icon: ThumbsUp,
    title: "We Fix It Properly",
    desc: "No quick patches that fail in a month. We diagnose the real problem and fix it the right way.",
  },
  {
    icon: MapPin,
    title: "Local to the Midwest",
    desc: "We're not a call center. We're a local team that knows the area and cares about our reputation here.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="font-jakarta bg-[#1a2f4e] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Why Us</span>
            <h2 className="text-4xl font-bold text-white mt-2 leading-tight">
              Why Homeowners<br className="hidden sm:block" /> Call Us First
            </h2>
          </div>
          <p className="text-blue-300 text-base max-w-xs sm:text-right leading-relaxed">
            We just show up, do good work, and treat people fairly.
          </p>
        </div>

        {/* Grid — 2 big + 3 small layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`rounded-2xl p-7 border transition-all duration-200 group
                ${i < 2
                  ? "bg-white/10 border-white/10 hover:bg-white/15"
                  : "bg-white/5 border-white/8 hover:bg-white/10"
                }
                ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
              `}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors
                ${i < 2
                  ? "bg-[#f97316]/20 group-hover:bg-[#f97316]/30"
                  : "bg-white/10 group-hover:bg-[#f97316]/20"
                }
              `}>
                <Icon size={20} className={i < 2 ? "text-[#f97316]" : "text-blue-300 group-hover:text-[#f97316] transition-colors"} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{title}</h3>
              <p className="text-blue-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}