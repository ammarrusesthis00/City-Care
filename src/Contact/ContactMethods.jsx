import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";

const info = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 482-1937",
    sub: "Call us any time — 24/7",
    href: "tel:+15554821937",
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10 border-[#f97316]/20",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message Us",
    sub: "Quick replies, even evenings",
    href: "https://wa.me/15554821937",
    color: "text-green-500",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@citycareplumbing.com",
    sub: "We reply within a few hours",
    href: "mailto:hello@citycareplumbing.com",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "24/7 including weekends",
    sub: "Holidays too — we don't close",
    href: null,
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Midwest Region, US",
    sub: "20+ areas covered",
    href: null,
    color: "text-[#1a2f4e]",
    bg: "bg-[#1a2f4e]/8 border-[#1a2f4e]/15",
  },
];

export default function ContactInfo() {
  return (
    <section className="font-jakarta bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="mb-14">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Reach Us</span>
          <h2 className="text-4xl font-bold text-[#0f172a] mt-2 leading-tight">
            Every way to contact us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {info.map(({ icon: Icon, label, value, sub, href, color, bg }) => {
            const Wrapper = href ? "a" : "div";
            const props = href
              ? { href, ...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
              : {};

            return (
              <Wrapper
                key={label}
                {...props}
                className={`group flex items-start gap-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 transition-all duration-200 ${href ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer" : ""}`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${bg}`}>
                  <Icon size={20} className={color} />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wide mb-1">{label}</p>
                  <p className={`font-bold text-base ${href ? `${color} group-hover:underline underline-offset-2` : "text-[#0f172a]"}`}>
                    {value}
                  </p>
                  <p className="text-[#64748b] text-xs mt-1">{sub}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}