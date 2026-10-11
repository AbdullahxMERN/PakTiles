"use client";

import { useState } from "react";
import {
  MessageSquare,
  Phone,
  Mail,
  Send,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/tiles";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "Residential Villa",
    material: "Natural Italian Marble",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsapp = () => {
    const text = encodeURIComponent(
      `Hello PakTiles,\n\nName: ${formData.name || "Client"}\nPhone: ${
        formData.phone || "Not specified"
      }\nProject: ${formData.projectType}\nMaterial: ${
        formData.material
      }\n\nMessage:\n${formData.message || "I would like to inquire about tile samples and availability."}`,
    );
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-8 border-b border-[#e5e7eb] bg-[#f4f6f4]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#d1fae5] text-[#065f46] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Direct Inquiries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0f3e2e] font-normal tracking-tight">
              Connect with PakTiles
            </h2>
          </div>

          <p className="text-sm text-[#4b5563] max-w-md font-normal leading-relaxed">
            Directly connect with our Islamabad stone consultants for sample
            deliveries, slab viewing appointments, and trade quotations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#25D366] text-white shadow-md active:opacity-90 transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#25D366] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.495 2 2 6.494 2 12.031c0 1.77.462 3.498 1.34 5.021L2 22l5.088-1.334a10.007 10.007 0 0 0 4.943 1.365h.004c5.536 0 10.031-4.495 10.031-10.031C22.062 6.494 17.567 2 12.031 2zm0 18.354h-.004a8.318 8.318 0 0 1-4.24-1.161l-.304-.18-3.021.792.806-2.946-.198-.315a8.307 8.307 0 0 1-1.274-4.513c0-4.605 3.746-8.351 8.351-8.351 2.232 0 4.331.869 5.909 2.448a8.31 8.31 0 0 1 2.446 5.907c0 4.605-3.746 8.351-8.351 8.351zm4.577-6.248c-.25-.125-1.48-.73-1.71-.813-.23-.083-.397-.125-.564.125-.167.25-.647.813-.793.979-.146.167-.292.188-.542.063-.25-.125-1.057-.39-2.014-1.242-.744-.664-1.246-1.485-1.392-1.735-.146-.25-.016-.385.109-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.564-1.356-.772-1.856-.203-.488-.41-.422-.564-.43-.146-.008-.313-.01-.479-.01-.167 0-.438.063-.667.313-.23.25-.876.855-.876 2.085s.896 2.42 1.021 2.587c.125.167 1.764 2.693 4.273 3.776.597.258 1.063.412 1.426.528.6.191 1.146.164 1.577.1.48-.071 1.48-.605 1.688-1.189.209-.584.209-1.084.146-1.189-.063-.105-.229-.167-.479-.292z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-white/90 block">
                  Instant WhatsApp
                </span>
                <span className="font-serif text-lg font-bold text-white block">
                  {BUSINESS_INFO.whatsappFormatted}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white" />
          </a>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center justify-between p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0f3e2e] text-white shadow-md active:opacity-90 transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center flex-shrink-0 border border-white/20">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-white/80 block">
                  Direct Telephone
                </span>
                <span className="font-serif text-lg font-bold text-white block font-mono">
                  {BUSINESS_INFO.phoneRaw}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white" />
          </a>

          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="flex items-center justify-between p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#1e293b] text-white shadow-md active:opacity-90 transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center flex-shrink-0 border border-white/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-white/80 block">
                  Architectural Email
                </span>
                <span className="font-serif text-base font-bold text-white block">
                  {BUSINESS_INFO.email}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white" />
          </a>
        </div>

        <div className="rounded-3xl bg-white border border-[#e5e7eb] p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <h3 className="font-serif text-2xl text-[#0f3e2e] mb-2 font-medium">
              Request Project Estimate or Sample Box
            </h3>
            <p className="text-xs text-[#6b7280] mb-8">
              Complimentary curated sample sets provided to licensed architects,
              interior designers, and homeowners.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#f8faf8] border border-[#e5e7eb] flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[#10b981]">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-serif text-xl text-[#0f3e2e] font-medium">
                    Specification Request Received
                  </span>
                </div>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  Thank you. A PakTiles consultant will review your material
                  selection and contact you promptly. You can also forward this
                  specification directly to WhatsApp for priority handling.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsapp}
                    className="flex items-center gap-2 bg-[#0f3e2e] hover:bg-[#134e3a] text-white text-xs uppercase tracking-wider font-bold py-3 px-6 rounded-xl transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-[#34d399]" />
                    <span>Send to WhatsApp Now</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#6b7280] hover:text-[#111827] underline px-2 font-medium"
                  >
                    Send another specification
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6b7280] mb-2 font-mono font-bold">
                      Your Full Name / Firm
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ar. Tariq & Associates"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#f8faf8] border border-[#e5e7eb] rounded-xl text-xs text-[#111827] placeholder-[#9ca3af] p-3.5 focus:outline-none focus:border-[#0f3e2e]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6b7280] mb-2 font-mono font-bold">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 03xx-xxxxxxx"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#f8faf8] border border-[#e5e7eb] rounded-xl text-xs text-[#111827] placeholder-[#9ca3af] p-3.5 focus:outline-none focus:border-[#0f3e2e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6b7280] mb-2 font-mono font-bold">
                      Project Typology
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full bg-[#f8faf8] border border-[#e5e7eb] rounded-xl text-xs text-[#111827] p-3.5 focus:outline-none focus:border-[#0f3e2e]"
                    >
                      <option value="Residential Villa">
                        Private Residence / Villa
                      </option>
                      <option value="Penthouse Apartment">
                        Penthouse / Luxury Apartment
                      </option>
                      <option value="Commercial Project">
                        Commercial Project / Retail Store
                      </option>
                      <option value="Hospitality & Dining">
                        Hospitality & Fine Dining
                      </option>
                      <option value="Façade Architecture">
                        Architectural Façade
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6b7280] mb-2 font-mono font-bold">
                      Material of Primary Interest
                    </label>
                    <select
                      value={formData.material}
                      onChange={(e) =>
                        setFormData({ ...formData, material: e.target.value })
                      }
                      className="w-full bg-[#f8faf8] border border-[#e5e7eb] rounded-xl text-xs text-[#111827] p-3.5 focus:outline-none focus:border-[#0f3e2e]"
                    >
                      <option value="Natural Italian Marble">
                        Natural Italian Marble
                      </option>
                      <option value="Sintered Large-Format Porcelain">
                        Sintered Large-Format Porcelain
                      </option>
                      <option value="Handcrafted Ceramic Zellige">
                        Handcrafted Ceramic Zellige
                      </option>
                      <option value="Flamed Architectural Granite">
                        Flamed Architectural Granite
                      </option>
                      <option value="3D Fluted Wall Slabs">
                        3D Fluted Wall Slabs
                      </option>
                      <option value="Custom Cut-to-Size">
                        Custom Quarry Cut-to-Size
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#6b7280] mb-2 font-mono font-bold">
                    Project Scope / Estimated Square Meters
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify estimated square meters, application area (floors/walls/countertops), or specific formats required..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#f8faf8] border border-[#e5e7eb] rounded-xl text-xs text-[#111827] placeholder-[#9ca3af] p-3.5 focus:outline-none focus:border-[#0f3e2e]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsapp}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#0f3e2e] bg-[#f4f6f4] hover:bg-[#e5e7eb] border border-[#e5e7eb] py-4 px-6 rounded-xl transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>Instant Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
