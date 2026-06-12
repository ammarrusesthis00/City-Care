import { Droplets, Waves, Wrench, Thermometer, Bath, Zap, Pipette, ShowerHead, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplets,
    title: "Leak Repair",
    desc: "Dripping faucets, pipe leaks, hidden water damage — we find it and fix it fast before it gets worse.",
  },
  {
    icon: Waves,
    title: "Drain Cleaning",
    desc: "Slow or blocked drains in your sink, shower, or toilet. We clear it properly, not just temporarily.",
  },
  {
    icon: Pipette,
    title: "Pipe Installation",
    desc: "New pipes, replacements, or repairs. We use quality materials and do the job right the first time.",
  },
  {
    icon: Bath,
    title: "Bathroom Fittings",
    desc: "Installing or replacing toilets, sinks, showers, or taps. Clean work, no mess left behind.",
  },
  {
    icon: Thermometer,
    title: "Water Heater Repair",
    desc: "No hot water? We diagnose and repair water heaters same day. Replacements available too.",
  },
  {
    icon: Zap,
    title: "Emergency Plumbing",
    desc: "Burst pipe at 2am? We're available 24/7 for urgent plumbing problems across the Midwest.",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "General Repairs",
    desc: "Loose fittings, running toilets, worn valves — small jobs matter too and we handle them all.",
  },
  {
    icon: ShowerHead,
    title: "Fixture Upgrades",
    desc: "Upgrading your bathroom or kitchen fixtures? We handle the install so everything works perfectly.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl font-bold text-[#0f172a] mt-2 leading-tight">
              Plumbing Services<br className="hidden sm:block" /> We Offer
            </h2>
          </div>
          <p className="text-[#64748b] text-base max-w-xs leading-relaxed sm:text-right">
            From small leaks to full pipe replacements — same-day visits available.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, desc, highlight }) => (
            highlight ? (
              <div
                key={title}
                className="bg-[#1a2f4e] rounded-2xl p-6 flex flex-col group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/10 rounded-full -translate-y-10 translate-x-10" />
                <div className="w-11 h-11 bg-[#f97316]/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#f97316]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed flex-1">{desc}</p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wide">Available 24/7</span>
                </div>
              </div>
            ) : (
              <div
                key={title}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 hover:bg-white hover:shadow-md hover:border-[#cbd5e1] hover:-translate-y-0.5 transition-all duration-200 group flex flex-col"
              >
                <div className="w-11 h-11 bg-white border border-[#e2e8f0] rounded-xl flex items-center justify-center mb-4 group-hover:border-[#f97316]/30 group-hover:bg-[#f97316]/5 transition-colors shadow-sm">
                  <Icon size={20} className="text-[#1a2f4e] group-hover:text-[#f97316] transition-colors" />
                </div>
                <h3 className="text-[#0f172a] font-bold text-base mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed flex-1">{desc}</p>
              </div>
            )
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#1a2f4e] font-bold text-sm border-b-2 border-[#f97316] pb-0.5 hover:text-[#f97316] transition-colors"
          >
            See all services
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}