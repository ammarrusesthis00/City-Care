export default function CompanyStory() {
  return (
    <section className="font-jakarta bg-[#f8fafc] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1a2f4e]/8 border border-[#1a2f4e]/15 text-[#1a2f4e] text-[0.7rem] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-4">
            Our Story
          </div>
          <h2 className="font-bold text-[#0f172a] text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
            15 years in.<br />
            <span className="text-[#1a2f4e]">Still the first call people make.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: story */}
          <div className="flex flex-col gap-6">
            <p className="text-[#64748b] text-[0.95rem] leading-relaxed">
              CityCare has been handling plumbing across the Midwest since 2009.
              What started as a single van has grown into one of the most
              trusted plumbing operations in the region — built entirely on
              reputation, referrals, and repeat customers.
            </p>
            <p className="text-[#64748b] text-[0.95rem] leading-relaxed">
              Over 500 jobs completed. Hundreds of families and businesses
              across the Midwest who know they can call us and we'll show up,
              sort it out, and not leave them guessing on the price.
            </p>
            <p className="text-[#64748b] text-[0.95rem] leading-relaxed">
              We've handled everything from a dripping tap in a first-floor flat
              to full commercial pipe replacements across multi-storey buildings.
              The experience we've built up over 15 years means we've seen it
              all — and we know how to fix it.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 pt-2">
              {[
                { num: "2009", label: "Founded" },
                { num: "500+", label: "Jobs completed" },
                { num: "4.9★", label: "Customer rating" },
              ].map(({ num, label }) => (
                <div key={label} className="border-l-2 border-[#f97316] pl-4">
                  <p className="text-2xl font-black text-[#0f172a]">{num}</p>
                  <p className="text-[#64748b] text-xs font-semibold mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
                alt="CityCare plumber at work"
                className="w-full h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#f97316] text-white rounded-2xl px-6 py-4 shadow-xl hidden sm:block">
              <p className="text-2xl font-black leading-none">Midwest's Most</p>
              <p className="text-2xl font-black leading-none">Trusted Team</p>
              <p className="text-white/80 text-xs font-semibold mt-1.5">Since 2009</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}