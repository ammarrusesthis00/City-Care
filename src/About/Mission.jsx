import { Phone, Wrench, DollarSign, ThumbsUp } from "lucide-react";

const pillars = [
  {
    icon: <Phone size={24} />,
    title: "You Reach Real People",
    desc: "When you call, you speak to someone on the actual team — not a call centre. We find out what's wrong and give you an honest answer on the spot.",
  },
  {
    icon: <DollarSign size={24} />,
    title: "Price Before We Start",
    desc: "We assess the job and tell you what it costs before any work begins. You decide. No pressure, no surprises on the invoice.",
  },
  {
    icon: <Wrench size={24} />,
    title: "We Fix It Properly",
    desc: "No temporary patches that fail in a month. We find the actual cause and fix it right — using quality materials every time.",
  },
  {
    icon: <ThumbsUp size={24} />,
    title: "We Leave It Clean",
    desc: "When the job's done, we clean up after ourselves. Your home should look the same as when we arrived — just with the problem fixed.",
  },
];

export default function HowWeWork() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1a2f4e]/8 border border-[#1a2f4e]/15 text-[#1a2f4e] text-[0.7rem] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-4">
            Our Approach
          </div>
          <h2 className="font-extrabold text-[#0f172a] text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
            How We Work on Every Job
          </h2>
          <p className="text-[#64748b] text-[0.95rem] leading-relaxed max-w-xl">
            Show up on time, explain what we're doing, fix it properly, and leave the place tidy.
            That's the standard we hold every job to.
          </p>
        </div>

        {/* Two column — image left, pillars right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
              alt="CityCare plumber working on pipes"
              className="w-full h-[480px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-5 pb-6 border-b border-[#f1f5f9] last:border-0 last:pb-0"
              >
                <div className="w-12 h-12 bg-[#1a2f4e] rounded-xl flex items-center justify-center text-white shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] text-[1.05rem] mb-1.5">{p.title}</h3>
                  <p className="text-[#64748b] text-[0.88rem] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}