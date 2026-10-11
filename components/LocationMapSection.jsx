"use client";

import { Navigation, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/data/tiles";

export default function LocationMapSection() {
  const mapSrc = `https://maps.google.com/maps?q=${BUSINESS_INFO.coordinates.lat},${BUSINESS_INFO.coordinates.lng}&hl=en&z=15&output=embed`;

  return (
    <section id="location" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-[#e5e7eb] bg-[#f4f6f4]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#d1fae5] text-[#065f46] text-xs font-bold uppercase tracking-wider mb-4">
          <span>Near Centaurus • Islamabad</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl text-[#0f3e2e] font-normal tracking-tight mb-3">
          Our Location
        </h2>

        <p className="text-sm text-[#4b5563] max-w-xl mx-auto mb-10 font-normal">
          {BUSINESS_INFO.address}
        </p>

        <div className="rounded-3xl bg-white border border-[#e5e7eb] overflow-hidden shadow-sm p-3 mb-8">
          <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden bg-[#e5e7eb]">
            <iframe
              title="PakTiles Near Centaurus Islamabad Map"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        <div>
          <a
            href={BUSINESS_INFO.coordinates.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0f3e2e] hover:bg-[#134e3a] text-white px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-md"
          >
            <Navigation className="w-4 h-4 text-[#34d399]" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
