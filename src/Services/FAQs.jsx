import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can you get to me?",
    a: "In most cases we can be with you the same day. For emergencies we aim to be there within the hour. Call us and we'll give you an honest time window.",
  },
  {
    q: "Do you charge a call-out fee?",
    a: "No call-out fees. You pay for the work done, and we tell you the price before we start. No hidden charges.",
  },
  {
    q: "Can you give me a quote over the phone?",
    a: "For straightforward jobs we can give you a rough estimate over the phone. For anything more complex we'll need to see it first — but we'll always confirm the price before starting.",
  },
  {
    q: "What if it's a small job — is it worth calling?",
    a: "Yes. Small jobs are our bread and butter. A dripping tap or slow drain might seem minor but it's worth getting sorted properly.",
  },
  {
    q: "Do you work on commercial properties too?",
    a: "Yes, we handle both residential and commercial plumbing jobs across the Midwest.",
  },
  {
    q: "What brands of water heaters do you work on?",
    a: "We work on all major brands. If we can't fix it, we'll tell you honestly rather than waste your time.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="font-jakarta bg-[#f8fafc] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Header */}
          <div className="lg:sticky lg:top-24">
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl font-bold text-[#0f172a] mt-2 mb-4">
              Questions People Usually Ask
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed mb-6">
              Still not sure? Call us directly — we're happy to talk through
              what you need before booking anything.
            </p>
            <a
              href="tel:+15554821937"
              className="inline-flex items-center gap-2 bg-[#1a2f4e] hover:bg-[#111f33] text-white font-bold px-7 py-4 rounded-xl text-sm transition-all"
            >
              Call Us Now
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[#0f172a] font-semibold text-sm">{q}</span>
                  <ChevronDown
                    size={17}
                    className={`text-[#64748b] shrink-0 transition-transform duration-200 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#64748b] text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}