import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you offer same-day plumbing service?",
    a: "Yes, in most cases we can get a plumber to you the same day. Call us early and we'll do our best to fit you in. For emergencies we're available 24/7.",
  },
  {
    q: "How much does a plumber cost?",
    a: "It depends on the job. We always give you a price before we start work so there are no surprises. No call-out fees either.",
  },
  {
    q: "What areas do you cover?",
    a: "We serve cities and towns across the Midwest including Chicago, Indianapolis, Columbus, Detroit, Milwaukee and more. Call us if you're not sure we cover your area.",
  },
  {
    q: "Do you work on weekends and holidays?",
    a: "Yes. We're available 7 days a week including public holidays. Emergency plumbing doesn't wait for Monday.",
  },
  {
    q: "Are your plumbers licensed and insured?",
    a: "Every plumber on our team is fully licensed and insured. You're protected on every job.",
  },
  {
    q: "What if the problem comes back after you fix it?",
    a: "We stand behind our work. If something we fixed fails shortly after, call us and we'll come back and sort it out.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="font-jakarta bg-[#f8fafc] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl font-bold text-[#0f172a] mt-2 mb-3">
            Common Questions
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl">
            Quick answers to things people usually ask before calling.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-[#0f172a] font-semibold text-base">{q}</span>
                <ChevronDown
                  size={18}
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
    </section>
  );
}