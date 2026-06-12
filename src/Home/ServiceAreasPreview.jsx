import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  "Chicago, IL",
  "Indianapolis, IN",
  "Columbus, OH",
  "Detroit, MI",
  "Milwaukee, WI",
  "Cincinnati, OH",
  "Minneapolis, MN",
  "Kansas City, MO",
  "St. Louis, MO",
  "Cleveland, OH",
  "Louisville, KY",
  "Omaha, NE",
];

export default function ServiceAreasPreview() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Coverage</span>
          <h2 className="text-4xl font-bold text-[#0f172a] mt-2 mb-3">
            Areas We Serve
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl">
            We cover cities and towns across the Midwest. Not sure if we reach you? Just call.
          </p>
        </div>

        {/* Map + Areas side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm h-[420px]">
            <iframe
              title="CityCare Plumbing Service Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380817.1385931463!2d-87.9073!3d41.8336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Areas list */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 hover:border-[#f97316]/40 hover:bg-[#fff7f0] transition-colors"
                >
                  <MapPin size={14} className="text-[#f97316] shrink-0" />
                  <span className="text-[#0f172a] text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>

            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 bg-[#1a2f4e] hover:bg-[#111f33] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors"
            >
              View All Service Areas
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}