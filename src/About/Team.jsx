import { Wrench, ShieldCheck, Clock } from "lucide-react";

const team = [
  {
    name: "Marcus Webb",
    role: "Founder & Lead Plumber",
    years: "15 yrs",
    bio: "Started CityCare after a decade working for larger firms. Wanted to do the job right without the corporate nonsense.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    badge: "Licensed Master Plumber",
  },
  {
    name: "Derek Holloway",
    role: "Senior Plumber",
    years: "10 yrs",
    bio: "Specialist in pipe diagnostics and emergency call-outs. If it's leaking at 2am, Derek's probably already on his way.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    badge: "Emergency Specialist",
  },
  {
    name: "Jonah Price",
    role: "Plumber & Fittings Expert",
    years: "7 yrs",
    bio: "Handles most of our bathroom and kitchen fitting jobs. Clean, precise work — customers always comment on how tidy he leaves the site.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    badge: "Bathroom & Kitchen",
  },
  {
    name: "Ray Callum",
    role: "Apprentice Plumber",
    years: "2 yrs",
    bio: "Two years in and already handling jobs independently. Works alongside Marcus on larger residential projects.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    badge: "Residential",
  },
];

export default function Team() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">The Team</span>
            <h2 className="text-4xl font-bold text-[#0f172a] mt-2 leading-tight">
              The people who<br />show up for you
            </h2>
          </div>
          <p className="text-[#64748b] text-base max-w-xs sm:text-right leading-relaxed">
            No subcontractors. Everyone here is part of the CityCare team.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map(({ name, role, years, bio, img, badge }, i) => (
            <div
              key={name}
              className={`rounded-2xl overflow-hidden border group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                ${i === 0 ? "border-[#1a2f4e]/20" : "border-[#e2e8f0]"}
              `}
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />

                {/* Years badge */}
                <div className="absolute top-3 right-3 bg-[#f97316] text-white text-[11px] font-black px-2.5 py-1 rounded-lg">
                  {years}
                </div>

                {/* Name over image bottom */}
                <div className="absolute bottom-3 left-4">
                  <p className="text-white font-bold text-base leading-tight">{name}</p>
                  <p className="text-amber-400 text-xs font-semibold mt-0.5">{role}</p>
                </div>
              </div>

              {/* Content */}
              <div className={`p-5 ${i === 0 ? "bg-[#1a2f4e]" : "bg-white"}`}>
                <p className={`text-sm leading-relaxed mb-4 ${i === 0 ? "text-blue-200" : "text-[#64748b]"}`}>
                  {bio}
                </p>
                <div className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full
                  ${i === 0
                    ? "bg-[#f97316]/15 text-[#f97316]"
                    : "bg-[#1a2f4e]/5 text-[#1a2f4e]"
                  }
                `}>
                  <ShieldCheck size={11} />
                  {badge}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}