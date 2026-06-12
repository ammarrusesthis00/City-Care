import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="font-jakarta bg-[#0f1f35] text-gray-400">
      <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white font-black text-sm">CC</span>
            </div>
            <div className="leading-tight">
              <p className="font-black text-white text-sm">CityCare</p>
              <p className="text-amber-400 text-xs font-semibold -mt-0.5">Plumbing Services</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Local plumbing done right. Fast response, honest pricing, real work — serving the Midwest 24/7.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available Now
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-white font-bold text-sm mb-4">Pages</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: "About Us", to: "/about" },
              { label: "Service Areas", to: "/service-areas" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-sm mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              "Leak Repair",
              "Drain Cleaning",
              "Pipe Installation",
              "Water Heater Repair",
              "Bathroom Fittings",
              "Emergency Plumbing",
            ].map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-white transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="tel:+15554821937"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-amber-400 shrink-0" />
                +1 (555) 482-1937
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/15554821937"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <MessageCircle size={14} className="text-green-400 shrink-0" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@citycارeplumbing.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-gray-400 shrink-0" />
                hello@citycareplumbing.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={14} className="text-gray-400 shrink-0" />
              Midwest Region, US
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={14} className="text-gray-400 shrink-0 mt-0.5" />
              <span>24/7 including weekends<br />&amp; holidays</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CityCare Plumbing Services. All rights reserved. · Midwest Region, US
      </div>
    </footer>
  );
}