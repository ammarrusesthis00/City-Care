import { Wrench, AlertTriangle, Clock, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: AlertTriangle,
    title: "Small leaks turn into big damage",
    desc: "A dripping pipe behind a wall can rot wood, grow mold, and cost thousands if left too long. Getting it fixed early is always cheaper.",
  },
  {
    icon: Clock,
    title: "Blocked drains don't clear themselves",
    desc: "A slow drain usually means a partial blockage that's getting worse. By the time it fully blocks, it's a bigger job than it needed to be.",
  },
  {
    icon: Wrench,
    title: "DIY fixes often make it worse",
    desc: "We see it often — a quick fix with the wrong tape or fitting that fails in a week. A proper repair done once saves money and stress.",
  },
  {
    icon: DollarSign,
    title: "Waiting costs more than calling",
    desc: "Most plumbing problems get more expensive the longer they sit. A same-day call-out is almost always cheaper than emergency repairs later.",
  },
];

export default function WhyMatters() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Layout: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Good to Know</span>
            <h2 className="text-4xl font-bold text-[#0f172a] mt-2 mb-4">
              When Should You Call a Plumber?
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed mb-10">
              Most people wait too long. Here's why calling sooner usually saves you money and hassle.
            </p>

            <div className="flex flex-col gap-7">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f97316]/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#f97316]" />
                  </div>
                  <div>
                    <h3 className="text-[#0f172a] font-bold text-base mb-1">{title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stacked images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
                alt="Plumber working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-56 mt-8">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
                alt="Pipe repair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-56 col-span-2">
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
                alt="Plumbing service"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}