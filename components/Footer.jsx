import Link from "next/link";
import { ArrowUpRight, MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/tiles";

export default function Footer() {
  const currentYear = 2026;

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "ArchDaily", href: "https://archdaily.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-white text-[#111827] pt-16 pb-12 px-4 sm:px-8 border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-16 border-b border-[#e5e7eb]">
          <div className="flex flex-col justify-between">
            <div>
              <Link href="#" className="flex flex-col group mb-5">
                <span className="font-serif text-2xl tracking-tight text-[#0f3e2e] font-bold">
                  Pak<span className="text-[#059669]">Tiles</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#6b7280] -mt-1 font-sans">
                  Near Centaurus • Islamabad
                </span>
              </Link>

              <p className="text-xs text-[#4b5563] max-w-sm font-normal leading-relaxed mb-6">
                Direct purveyors of monolithic Italian marble, sintered
                porcelain, and handcrafted architectural surfaces for Pakistan's
                premier residences and commercial projects.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs text-[#374151]">
              <div className="flex items-center gap-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#0f3e2e]" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-4 pt-1 font-mono text-[11px]">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f3e2e] font-bold hover:underline"
                >
                  WhatsApp: {BUSINESS_INFO.whatsappFormatted}
                </a>
                <span>•</span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-[#0f3e2e] font-bold hover:underline"
                >
                  Tel: {BUSINESS_INFO.phoneRaw}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-[#0f3e2e] font-bold mb-4">
              Architectural Network
            </h4>
            <p className="text-xs text-[#4b5563] mb-4 font-normal leading-relaxed">
              Follow our latest quarry allocations, dry-lay verifications, and
              project installations.
            </p>

            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs text-[#4b5563] hover:text-[#0f3e2e] py-1 border-b border-[#f3f5f3] transition-colors font-medium"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7280]">
          <p>© {currentYear} PakTiles. All rights reserved</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Islamabad Near Centaurus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
