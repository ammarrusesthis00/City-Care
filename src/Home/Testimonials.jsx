import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    location: "Chicago, IL",
    text: "Pipe burst at 11pm and they were at my door within the hour. Fixed it clean, told me the price upfront. Exactly what you want in an emergency.",
    rating: 5,
  },
  {
    name: "Sandra K.",
    location: "Indianapolis, IN",
    text: "I've had plumbers cancel on me twice before. These guys showed up on time, didn't overcharge, and actually explained what was wrong. Refreshing.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Columbus, OH",
    text: "Called about a slow drain that two other companies couldn't fully fix. CityCare sorted it properly first time. No issues since.",
    rating: 5,
  },
  {
    name: "Priya M.",
    location: "Detroit, MI",
    text: "Water heater stopped working on a Sunday. They came out same day, had the part, and got it running again. Reasonable price too.",
    rating: 5,
  },
  {
    name: "Tom B.",
    location: "Milwaukee, WI",
    text: "Honest guys. Told me one of the jobs I thought I needed wasn't actually necessary. Saved me money. That builds trust.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Reviews</span>
          <h2 className="text-4xl font-bold text-[#0f172a] mt-2 mb-3">
            What Customers Say
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl">
            Real reviews from real homeowners across the Midwest.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ name, location, text, rating }) => (
            <div
              key={name}
              className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#f97316] fill-[#f97316]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#0f172a] text-sm leading-relaxed flex-1">
                "{text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#e2e8f0]">
                <div className="w-9 h-9 bg-[#1a2f4e] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{name[0]}</span>
                </div>
                <div>
                  <p className="text-[#0f172a] text-sm font-bold">{name}</p>
                  <p className="text-[#64748b] text-xs">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}