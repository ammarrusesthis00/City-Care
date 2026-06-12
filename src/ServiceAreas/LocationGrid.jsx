import { MapPin, Phone } from "lucide-react";

const areas = [
  "Springfield", "Decatur", "Bloomington", "Champaign",
  "Peoria", "Normal", "Pekin", "Lincoln",
  "Danville", "Mattoon", "Charleston", "Effingham",
  "Taylorville", "Jacksonville", "Galesburg", "Canton",
  "Rantoul", "Mahomet", "Monticello", "Clinton",
];

export default function AreasList() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Coverage</span>
            <h2 className="text-4xl font-bold text-[#0f172a] mt-2 leading-tight">
              Areas We Cover
            </h2>
          </div>
          <p className="text-[#64748b] text-base max-w-xs sm:text-right leading-relaxed">
            Don't see your town? Call us — we cover more areas than listed here.
          </p>
        </div>

        {/* Areas grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3.5 hover:bg-white hover:border-[#cbd5e1] hover:shadow-sm transition-all duration-200 group"
            >
              <MapPin size={15} className="text-[#f97316] shrink-0" />
              <span className="text-[#0f172a] text-sm font-semibold">{area}</span>
            </div>
          ))}
        </div>

        {/* Not listed? */}
        <div className="bg-[#1a2f4e] rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
            <span className="text-white font-bold">Not on the list?</span>{" "}
            We still might cover your area — give us a quick call to check.
          </p>
          <a
            href="tel:+15554821937"
            className="inline-flex items-center justify-center gap-2.5 bg-[#f97316] hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
          >
            <Phone size={15} />
            Call & Check
          </a>
        </div>

      </div>
    </section>
  );
}