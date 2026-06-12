import { Clock, MapPin, ShieldCheck, DollarSign } from "lucide-react";

const points = [
  {
    icon: Clock,
    title: "Fast response across the region",
    desc: "Our vans are spread across the Midwest, so wherever you're based, we're rarely far away. Most jobs get a same-day visit.",
  },
  {
    icon: MapPin,
    title: "We know the local area",
    desc: "Older homes, common local pipe issues, regional building requirements — we've worked across this area long enough to know it well.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed for residential & commercial",
    desc: "Whether it's a house, apartment block, or commercial unit, we're licensed and insured to work on it across the entire region.",
  },
  {
    icon: DollarSign,
    title: "Same pricing, wherever you are",
    desc: "No surcharges for being further out. Our pricing is consistent across every area we cover.",
  },
];

export default function WhyChooseUsLocal() {
  return (
    <section className="font-jakarta bg-[#f8fafc] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
              alt="CityCare plumbing van on a local job"
              className="w-full h-[440px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: points */}
          <div className="order-1 lg:order-2">
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
              Why Choose Us Here
            </span>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
              Local plumbers,<br />not a national chain
            </h2>

            <div className="flex flex-col gap-6">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#1a2f4e] rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={19} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#0f172a] font-bold text-base mb-1">{title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}