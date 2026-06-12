import { Phone, MessageCircle, AlertTriangle } from "lucide-react";

export default function EmergencyBlock() {
  return (
    <section className="font-jakarta bg-[#f8fafc] border-y border-[#e2e8f0] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#1a2f4e] rounded-2xl overflow-hidden relative">

          {/* Background image subtle */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-10">
            {/* Left */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center shrink-0">
                <AlertTriangle size={22} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Need urgent plumbing help?
                </h2>
                <p className="text-blue-200 text-sm max-w-md leading-relaxed">
                  Burst pipes, major leaks, no water — don't wait. We're available
                  around the clock, including weekends and holidays.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+15554821937"
                className="inline-flex items-center justify-center gap-2.5 bg-[#f97316] hover:bg-orange-600 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="https://wa.me/15554821937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all border border-white/20 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}