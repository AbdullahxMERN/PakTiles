"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/tiles";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Collection", href: "#collection" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full px-5 sm:px-8 py-3.5 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-[#e2e8f0] shadow-md"
            : "bg-white/90 backdrop-blur-md border-[#e5e7eb] shadow-sm"
        }`}
      >
        <Link href="#" className="flex flex-col group">
          <span className="font-serif text-2xl tracking-tight text-[#0f3e2e] font-bold">
            Pak<span className="text-[#059669]">Tiles</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#6b7280] -mt-1 font-sans">
            Near Centaurus • Islamabad
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 bg-[#f4f6f4] rounded-full px-3 py-1.5 border border-[#e5e7eb]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-[#4b5563] hover:text-[#0f3e2e] hover:bg-white transition-all px-4 py-1.5 rounded-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center gap-2 text-xs font-mono font-medium text-[#374151] bg-[#f8faf8] hover:bg-white border border-[#e5e7eb] px-3.5 py-2 rounded-full transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0f3e2e]" />
            <span>{BUSINESS_INFO.phoneRaw}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-white bg-[#0f3e2e] hover:bg-[#134e3a] transition-all px-4 py-2 rounded-full shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#34d399]" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 -ml-1" />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0f3e2e] hover:bg-[#f4f6f4] rounded-xl transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-xl flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-lg text-[#111827] hover:text-[#0f3e2e] transition-colors py-2 px-3 rounded-xl hover:bg-[#f4f6f4]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#e5e7eb] flex flex-col gap-2.5">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center justify-between text-xs text-[#374151] bg-[#f4f6f4] border border-[#e5e7eb] p-3 rounded-xl"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0f3e2e]" />
                Call PakTiles
              </span>
              <span className="font-mono font-bold text-[#0f3e2e]">{BUSINESS_INFO.phoneRaw}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-white bg-[#0f3e2e] py-3 rounded-xl shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#34d399]" />
              <span>WhatsApp: {BUSINESS_INFO.whatsappRaw}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
