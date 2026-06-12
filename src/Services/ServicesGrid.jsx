import { Droplets, Waves, Wrench, Thermometer, Bath, Zap, Pipette, ShowerHead } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Leak Repair",
    desc: "Dripping taps, pipe leaks, hidden water damage — we find it and fix it before it gets worse.",
    from: "from $85",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Waves,
    title: "Drain Cleaning",
    desc: "Slow or blocked drains in your sink, shower, or toilet. We clear it properly, not just temporarily.",
    from: "from $95",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Pipette,
    title: "Pipe Installation",
    desc: "New pipes, replacements, or repairs. Quality materials, done right the first time.",
    from: "from $150",
    img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Bath,
    title: "Bathroom Fittings",
    desc: "Installing or replacing toilets, sinks, showers, or taps. Clean work, no mess left behind.",
    from: "from $120",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Thermometer,
    title: "Water Heater Repair",
    desc: "No hot water? We diagnose and repair water heaters same day. Replacements available too.",
    from: "from $110",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Zap,
    title: "Emergency Plumbing",
    desc: "Burst pipe at 2am? We're available 24/7 for urgent plumbing problems across the Midwest.",
    from: "from $120",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Wrench,
    title: "General Repairs",
    desc: "Loose fittings, running toilets, worn valves — small jobs matter too and we handle them all.",
    from: "from $75",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: ShowerHead,
    title: "Fixture Upgrades",
    desc: "Upgrading your bathroom or kitchen? We handle the install so everything works perfectly.",
    from: "from $100",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ServicesGrid() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Services</span>
          <h2 className="text-4xl font-bold text-[#0f172a] mt-2 mb-3">
            Everything We Fix
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl">
            All plumbing jobs, big or small. Same-day visits available across the Midwest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, from, img }) => (
            <div
              key={title}
              className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0f172a]/20" />
                <div className="absolute top-3 left-3 w-9 h-9 bg-[#f97316] rounded-lg flex items-center justify-center">
                  <Icon size={16} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[#0f172a] font-bold text-base mb-1.5">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4">{desc}</p>
                <span className="text-[#1a2f4e] text-xs font-bold bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1 rounded-full">
                  {from}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}