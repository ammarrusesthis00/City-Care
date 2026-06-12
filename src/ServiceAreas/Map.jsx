import { MapPin, Navigation } from "lucide-react";

export default function Map() {
  return (
    <section className="font-jakarta bg-[#f8fafc] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="mb-10">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Coverage Map</span>
          <h2 className="text-4xl font-bold text-[#0f172a] mt-2 leading-tight">
            Our Service Area
          </h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-[#e2e8f0] h-[420px]">
          <iframe
            title="CityCare Plumbing coverage map"
            src="https://www.google.com/maps?q=Springfield,Illinois&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating info card */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white rounded-2xl shadow-xl border border-[#e2e8f0] p-5 flex items-center gap-4 max-w-sm">
            <div className="w-12 h-12 bg-[#1a2f4e] rounded-xl flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#f97316]" />
            </div>
            <div className="flex-1">
              <p className="text-[#0f172a] font-bold text-sm">CityCare Plumbing</p>
              <p className="text-[#64748b] text-xs mt-0.5">Covering 20+ towns across the Midwest</p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Springfield,Illinois"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#e2e8f0] text-[#1a2f4e] font-bold text-xs px-3.5 py-2.5 rounded-lg transition-colors shrink-0"
            >
              <Navigation size={12} />
              Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}