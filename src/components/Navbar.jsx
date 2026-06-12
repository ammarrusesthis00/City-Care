import { useState } from "react";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Service Areas", to: "/service-areas" },
    { label: "Contact", to: "/contact" },
  ];

  const { pathname } = useLocation();

  return (
    <header className="font-jakarta sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0f1f35] text-blue-300 text-xs text-center py-2 px-4 font-medium tracking-wide">
        <span className="text-amber-400">⚡</span> 24/7 Emergency Plumbing Available —{" "}
        <a href="tel:+15554821937" className="underline underline-offset-2 hover:text-white transition-colors">
          Call Now
        </a>
      </div>

      {/* Main nav */}
      <div className="bg-[#1e3a5f] border-b border-white/8">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-[#f97316] rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-orange-900/30">
              <span className="text-white font-black text-sm">Individual service and areas pages</span>
            </div>
            <div className="leading-tight">
              <p className="font-black text-white text-sm tracking-tight">CityCare</p>
              <p className="text-amber-400 text-[11px] font-semibold -mt-0.5">Plumbing Services</p>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                  pathname === l.to
                    ? "text-amber-400 bg-white/8"
                    : "text-blue-100 hover:text-white hover:bg-white/8"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:+15554821937"
            className="hidden md:flex items-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 shrink-0 shadow-lg shadow-orange-900/20"
          >
            <Phone size={14} />
            +1 (555) 482-1937
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#1a2f4e] border-b border-white/10 px-4 pb-5 shadow-xl">
          <nav className="flex flex-col mt-3 gap-0.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`py-3 px-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === l.to
                    ? "text-amber-400 bg-white/10"
                    : "text-blue-100 hover:bg-white/8 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 mt-4">
            <a
              href="tel:+15554821937"
              className="flex-1 flex items-center justify-center gap-2 bg-[#f97316] text-white font-bold py-3.5 rounded-xl text-sm shadow-lg"
            >
              <Phone size={15} />
              Call Now
            </a>
            <a
              href="https://wa.me/15554821937"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/15 text-white font-bold py-3.5 rounded-xl text-sm"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}