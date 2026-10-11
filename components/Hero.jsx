"use client";

import Image from "next/image";
import { ArrowDown, MessageSquare, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/tiles";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center px-4 sm:px-8 overflow-hidden bg-[#0a1410]">
      <div className="absolute inset-0">
        <Image
          src="/images/marble_slab.jpg"
          alt="PakTiles Luxury Monumental Architectural Stone & Surfaces"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a120f] via-black/60 to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center py-36 sm:py-44">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider  mb-7 border border-white/25 shadow-lg">
          <span>PakTiles</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] text-white font-normal tracking-tight leading-[1.08] mb-6 drop-shadow-md">
          Number one Quality
          <br />
          <span className="italic font-light text-[#f0fdf4]">
            best desgins{" "}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#f3f4f6] max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow">
          transform your home or bussiness place by PakTiles
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#collection"
            className="inline-flex items-center gap-2.5 bg-white text-[#0f3e2e] px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold shadow-xl active:bg-[#f4f6f4]"
          >
            <span>Explore Collection</span>
            <ArrowDown className="w-4 h-4 text-[#0f3e2e]" />
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] border border-[#25D366]/40 text-white px-7 py-4 rounded-xl text-xs uppercase tracking-wider font-bold shadow-xl active:bg-[#1ebd59]"
          >
            <MessageSquare className="w-4 h-4 text-white fill-current" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
