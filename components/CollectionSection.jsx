"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageSquare, ArrowUpRight } from "lucide-react";
import { TILES, TILE_CATEGORIES, BUSINESS_INFO } from "@/data/tiles";

export default function CollectionSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTiles = useMemo(() => {
    return TILES.filter((tile) => {
      const matchesCategory =
        activeCategory === "all" ||
        tile.category.toLowerCase() === activeCategory.toLowerCase() ||
        tile.types.includes(activeCategory.toLowerCase());

      const matchesSearch =
        searchQuery.trim() === "" ||
        tile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tile.finish.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tile.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tile.origin.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getTileWhatsAppUrl = (tile) => {
    const text = `Assalam u Alaikum, I want ${tile.name} (${tile.code}). Please share price and availability.`;

    return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  const getCategoryWhatsAppUrl = (catId) => {
    const catObj = TILE_CATEGORIES.find((c) => c.id === catId);
    const catLabel = catObj ? catObj.label : catId;
    const text = `Assalam u Alaikum, I want ${catLabel}. Please share price and availability.`;

    return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="collection"
      className="py-20 sm:py-28 px-4 sm:px-8 border-b border-[#e5e7eb] bg-[#f4f6f4]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0f3e2e] font-normal tracking-tight">
              PakTiles Collection
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={getCategoryWhatsAppUrl(activeCategory)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>
                Inquire{" "}
                {activeCategory === "all" ? "All Formats" : activeCategory} on
                WhatsApp
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#e5e7eb] p-4 sm:p-5 mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            {TILE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#0f3e2e] text-white shadow-sm"
                      : "bg-[#f4f6f4] text-[#4b5563] hover:text-[#0f3e2e] hover:bg-[#e5e7eb]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by finish, marble, origin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f4f6f4] border border-[#e5e7eb] rounded-xl text-xs text-[#111827] placeholder-[#9ca3af] pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#0f3e2e]"
            />
          </div>
        </div>

        {filteredTiles.length === 0 ? (
          <div className="py-20 text-center rounded-3xl border border-dashed border-[#e5e7eb] bg-white">
            <p className="font-serif text-xl text-[#0f3e2e] mb-2 font-medium">
              No matching formats found
            </p>
            <p className="text-xs text-[#6b7280]">
              Try adjusting your search criteria or resetting the category
              filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              type="button"
              className="mt-4 text-xs uppercase tracking-wider text-[#0f3e2e] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredTiles.map((tile, idx) => {
                const whatsappUrl = getTileWhatsAppUrl(tile);

                return (
                  <motion.article
                    key={tile.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    className="rounded-3xl bg-white border border-[#e5e7eb] active:border-[#0f3e2e] transition-all p-4 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#f4f6f4] mb-4"
                      >
                        <Image
                          src={tile.image}
                          alt={tile.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono shadow-sm bg-white/95 text-[#0f3e2e] border border-[#e5e7eb]">
                          {tile.category}
                        </div>
                      </a>

                      <div className="px-2">
                        <div className="flex items-center justify-between text-[11px] text-[#6b7280] mb-1.5 font-mono">
                          <span className="text-[#059669] font-bold">
                            {tile.code}
                          </span>
                          <span>{tile.origin.split(",")[0]}</span>
                        </div>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-serif text-xl text-[#0f3e2e] mb-3 leading-snug font-medium"
                        >
                          {tile.name}
                        </a>

                        <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#f8faf8] p-3 rounded-xl border border-[#e5e7eb] mb-4">
                          <div>
                            <span className="text-[#6b7280] block text-[10px] uppercase tracking-wider font-bold">
                              Format Size
                            </span>
                            <span className="text-[#111827] font-semibold">
                              {tile.size}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#6b7280] block text-[10px] uppercase tracking-wider font-bold">
                              Surface Finish
                            </span>
                            <span className="text-[#111827] font-semibold">
                              {tile.finish}
                            </span>
                          </div>
                        </div>

                        <div className="text-[11px] text-[#6b7280] mb-4">
                          <span className="text-[10px] uppercase tracking-wider font-bold block mb-0.5">
                            Material Body
                          </span>
                          <span className="text-[#374151]">
                            {tile.material}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 px-1">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-white bg-[#0f3e2e] hover:bg-[#134e3a] py-3.5 rounded-xl transition-all shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4 text-[#34d399]" />
                        <span>Inquire</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
