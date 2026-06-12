import { useState } from "react";
import { Send, Phone, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", location: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="font-jakarta bg-[#f8fafc] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: form */}
          <div>
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4 block">
              Send a Message
            </span>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-3 leading-tight">
              Tell us what's going on
            </h2>
            <p className="text-[#64748b] text-base mb-10 leading-relaxed">
              Fill in the form and we'll get back to you shortly. For anything
              urgent, just call or WhatsApp directly.
            </p>

            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-green-600" />
                </div>
                <h3 className="text-[#0f172a] font-bold text-lg mb-2">Message sent</h3>
                <p className="text-[#64748b] text-sm">We'll be in touch shortly. For urgent issues, call us directly.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#0f172a] text-sm font-semibold mb-2 block">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      required
                      placeholder="John Smith"
                      className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1a2f4e] focus:ring-1 focus:ring-[#1a2f4e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#0f172a] text-sm font-semibold mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handle}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1a2f4e] focus:ring-1 focus:ring-[#1a2f4e] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#0f172a] text-sm font-semibold mb-2 block">Your Location</label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handle}
                    placeholder="e.g. Chicago, IL"
                    className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1a2f4e] focus:ring-1 focus:ring-[#1a2f4e] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[#0f172a] text-sm font-semibold mb-2 block">What's the issue?</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    required
                    rows={5}
                    placeholder="Describe what's happening — the more detail the better..."
                    className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1a2f4e] focus:ring-1 focus:ring-[#1a2f4e] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1a2f4e] hover:bg-[#111f33] text-white font-bold px-8 py-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 mt-2"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: sticky contact nudge */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-4">
            <div className="bg-[#1a2f4e] rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-2">Need it sorted today?</h3>
              <p className="text-blue-300 text-sm leading-relaxed mb-6">
                The form is great for non-urgent stuff. For anything that needs
                sorting quickly — just call or message us directly.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+15554821937"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#f97316] hover:bg-orange-500 text-white font-bold px-6 py-4 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                >
                  <Phone size={15} />
                  Call Now — +1 (555) 482-1937
                </a>
                <a
                  href="https://wa.me/15554821937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl text-sm transition-all border border-white/20 hover:-translate-y-0.5"
                >
                  <MessageCircle size={15} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
              <h4 className="text-[#0f172a] font-bold text-sm mb-3">Business Hours</h4>
              {[
                { day: "Monday – Friday", hours: "7:00 AM – 8:00 PM" },
                { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
                { day: "Sunday", hours: "9:00 AM – 4:00 PM" },
                { day: "Emergency Line", hours: "24/7 always open" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center py-2.5 border-b border-[#f1f5f9] last:border-0">
                  <span className="text-[#64748b] text-sm">{day}</span>
                  <span className={`text-sm font-semibold ${day === "Emergency Line" ? "text-[#f97316]" : "text-[#0f172a]"}`}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}