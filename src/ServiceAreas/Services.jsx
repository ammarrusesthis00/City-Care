import { Droplets, Waves, Pipette, Zap, Bath, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Droplets, title: "Leak Repair", to: "/services/leak-repair" },
  { icon: Waves, title: "Drain Cleaning", to: "/services/drain-cleaning" },
  { icon: Pipette, title: "Pipe Installation", to: "/services/pipe-installation" },
  { icon: Zap, title: "Emergency Plumbing", to: "/services/emergency-plumbing" },
  { icon: Bath, title: "Bathroom Plumbing", to: "/services/bathroom-plumbing" },
];

export default function ServicesLinks() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">What We Do Here</span>
            <h2 className="text-4xl font-bold text-[#0f172a] mt-2 leading-tight">
              Services Available<br />in Your Area
            </h2>
          </div>
          <p className="text-[#64748b] text-base max-w-xs sm:text-right leading-relaxed">
            Every service below is available across all areas we cover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map(({ icon: Icon, title, to }) => (
            <Link
              key={title}
              to={to}
              className="flex flex-col gap-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 hover:bg-white hover:shadow-md hover:border-[#cbd5e1] hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-11 h-11 bg-white border border-[#e2e8f0] rounded-xl flex items-center justify-center group-hover:border-[#f97316]/30 group-hover:bg-[#f97316]/5 transition-colors shadow-sm">
                <Icon size={20} className="text-[#1a2f4e] group-hover:text-[#f97316] transition-colors" />
              </div>
              <div>
                <h3 className="text-[#0f172a] font-bold text-sm mb-2">{title}</h3>
                <span className="inline-flex items-center gap-1.5 text-[#1a2f4e] group-hover:text-[#f97316] text-xs font-bold transition-colors">
                  Learn more
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}