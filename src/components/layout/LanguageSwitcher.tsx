"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";

const localeLabels: Record<string, string> = {
  es: "ESP",
  en: "ENG",
  fr: "FRA",
};

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronDown() {
  return <span className="text-[0.7rem] opacity-60">&#9662;</span>;
}

export default function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale as "es" | "en" | "fr" });
    setIsOpen(false);
  }

  if (variant === "mobile") {
    return (
      <div className="flex gap-3">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`font-poppins text-sm font-semibold uppercase ${
              loc === locale
                ? "text-pink"
                : "text-dark-text hover:text-pink-hover"
            } transition-colors bg-transparent border-none cursor-pointer`}
          >
            {localeLabels[loc]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-poppins text-sm font-semibold uppercase tracking-[-0.28px] text-dark-text cursor-pointer flex items-center gap-1 bg-transparent border-none"
      >
        <GlobeIcon />
        {localeLabels[locale]} <ChevronDown />
      </button>
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] right-0 bg-white rounded-[14px] shadow-dropdown border border-border-subtle py-2 min-w-[120px] z-[1001]">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`block w-full text-left px-4 py-2 font-poppins text-[13px] font-medium transition-all duration-150 bg-transparent border-none cursor-pointer ${
                loc === locale
                  ? "text-pink bg-surface-hover"
                  : "text-dark-text hover:bg-surface-hover hover:text-pink"
              }`}
            >
              {localeLabels[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
