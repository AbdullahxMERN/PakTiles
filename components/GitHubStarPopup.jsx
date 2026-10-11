"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";

const STORAGE_KEY = "paktiles_github_star_dismissed";
const GITHUB_REPO_URL = "https://github.com/AbdullahxMERN/PakTiles";

function GitHubIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function GitHubStarPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    try {
      const isDismissed = localStorage.getItem(STORAGE_KEY);
      if (isDismissed) {
        return;
      }
    } catch {
      return;
    }

    const timer = setTimeout(() => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) {
          setIsOpen(true);
        }
      } catch {
        setIsOpen(true);
      }
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  const dismissPopup = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
  };

  const handleStarClick = () => {
    dismissPopup();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dismissPopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="apple-modal-title"
          aria-describedby="apple-modal-desc"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={dismissPopup}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 380,
            }}
            className="relative w-full max-w-[420px] bg-[#1c1c1e] text-white rounded-[32px] p-7 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden text-center"
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

            <button
              type="button"
              onClick={dismissPopup}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#8e8e93] hover:text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/40 z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative mx-auto w-20 h-20 rounded-[22px] bg-gradient-to-b from-[#2c2c2e] to-[#121214] p-[1px] shadow-2xl border border-white/15 flex items-center justify-center mb-6">
              <div className="w-full h-full rounded-[21px] bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center relative overflow-hidden">
                <GitHubIcon className="w-10 h-10 text-white" />
              </div>

              <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#1c1c1e] border border-white/20 flex items-center justify-center shadow-lg">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
            </div>

            <p className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#30d158] mb-2 font-mono">
              stars
            </p>

            <h2
              id="apple-modal-title"
              className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-snug mb-3"
            >
              Enjoying PakTiles?
            </h2>

            <p
              id="apple-modal-desc"
              className="text-[15px] sm:text-[16px] text-[#a1a1a6] leading-relaxed max-w-sm mx-auto mb-8 font-normal"
            >
              If our design and code helped you please consider giving us a star
              on GitHub It only takes a second and means a lot to us
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleStarClick}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#f2f2f7] active:scale-[0.98] text-black font-semibold text-[16px] py-3.5 px-6 rounded-full transition-all shadow-md group"
              >
                <GitHubIcon className="w-5 h-5 text-black" />
                <span>Star on GitHub</span>
                <Star className="w-4 h-4 fill-amber-500 text-amber-500 group-hover:scale-110 transition-transform" />
              </a>

              <button
                type="button"
                onClick={dismissPopup}
                className="w-full text-[15px] font-medium text-[#8e8e93] hover:text-white py-2.5 rounded-full hover:bg-white/[0.05] transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
