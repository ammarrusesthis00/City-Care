import { ShieldCheck, Users, Award, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Honest Work",
    desc: "We tell you what's wrong and what it'll cost before we start. No padding the bill, no unnecessary upsells.",
  },
  {
    icon: <Users size={20} />,
    title: "Local & Accountable",
    desc: "We're based in the Midwest and focused on this region. When you call, you reach the people doing the actual work.",
  },
  {
    icon: <Award size={20} />,
    title: "Licensed & Insured",
    desc: "Every technician is fully licensed. Every job is covered. You're protected on every visit, no exceptions.",
  },
  {
    icon: <ThumbsUp size={20} />,
    title: "No Pressure",
    desc: "If a small repair solves your problem, we'll tell you that. We're not here to sell you a full refit you don't need.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image with floating badges */}
          <div className="relative pt-6 pb-8 px-4">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                alt="CityCare plumber at work"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Bottom-right floating card */}
            <div className="absolute bottom-0 right-0 bg-[#1a2f4e] text-white rounded-2xl px-6 py-5 shadow-2xl">
              <p className="font-black text-[2rem] leading-none text-amber-400">
                Midwest's Own
              </p>
              <p className="text-white/70 text-[0.75rem] font-semibold uppercase tracking-widest mt-1">
                Local Plumbing Team
              </p>
            </div>

            {/* Top-left floating badge */}
            <div className="absolute top-0 left-0 bg-[#f97316] text-white rounded-2xl px-5 py-3 shadow-xl">
              <p className="font-bold text-[0.85rem]">Residential & Commercial</p>
              <p className="text-white/75 text-[0.68rem]">Full-Service Plumbing</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">

            <div className="inline-flex items-center gap-2 bg-[#1a2f4e]/8 border border-[#1a2f4e]/15 text-[#1a2f4e] text-[0.7rem] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5 w-fit">
              Who We Are
            </div>

            <h2 className="font-extrabold text-[#0f172a] text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-5">
              A Plumbing Team<br />
              <span className="text-[#1a2f4e]">the Midwest Relies On.</span>
            </h2>

            <p className="text-[#64748b] text-[0.95rem] leading-relaxed mb-4">
              CityCare Plumbing is a locally operated team serving residential and
              commercial clients throughout the Midwest. We handle everything from
              emergency call-outs to full pipe replacements — every job gets the
              same level of attention regardless of size.
            </p>

            <p className="text-[#64748b] text-[0.95rem] leading-relaxed mb-10">
              Our team is made up of experienced, licensed plumbers who take their
              work seriously. We show up when we say we will, communicate clearly
              throughout the job, and stand behind everything we do.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#f97316]/10 border border-[#f97316]/20 rounded-lg flex items-center justify-center text-[#f97316] shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#0f172a] text-[0.95rem] mb-0.5">{v.title}</p>
                    <p className="text-[#64748b] text-[0.8rem] leading-relaxed">{v.desc}</p>
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