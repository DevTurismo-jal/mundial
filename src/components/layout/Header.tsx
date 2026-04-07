"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useTranslations } from "next-intl";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

function ChevronDown() {
  return <span className="text-[0.7rem] opacity-60">&#9662;</span>;
}

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const t = useTranslations("Navigation");
  const tHeader = useTranslations("Header");

  return (
    <>
      <header className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] max-w-[1280px] bg-white px-4 py-3 md:px-6 md:py-5 flex justify-between items-center z-[1000] rounded-[16px] md:rounded-[24px] shadow-header">
        {/* Logo → Home */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/assets/logo-jalisco.svg"
            alt={tHeader("logoAlt")}
            width={120}
            height={32}
            className="h-7 md:h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center flex-1 justify-center">
          {/* Inicio — explicit home link */}
          <Link
            href="/"
            className="font-poppins text-sm font-semibold uppercase tracking-[-0.28px] text-dark-text no-underline flex items-center gap-1 whitespace-nowrap hover:text-pink-hover transition-colors"
          >
            {t("inicio")}
          </Link>

          {navigation.map((item) => {
            if (item.children) {
              return (
                <div key={item.labelKey} className="relative group">
                  <span className="font-poppins text-sm font-semibold uppercase tracking-[-0.28px] text-dark-text cursor-pointer flex items-center gap-1 whitespace-nowrap hover:text-pink-hover transition-colors">
                    {t(item.labelKey)} <ChevronDown />
                  </span>
                  {/* pt-3 bridges the hover gap between trigger and dropdown */}
                  <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[1001]">
                    <div className="bg-white rounded-[14px] shadow-dropdown border border-border-subtle py-2 min-w-[220px]">
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.labelKey}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-5 py-2.5 font-poppins text-[13px] font-medium text-dark-text no-underline whitespace-nowrap transition-all duration-150 hover:bg-surface-hover hover:text-pink"
                          >
                            {t(child.labelKey)}
                          </a>
                        ) : (
                          <Link
                            key={child.labelKey}
                            href={child.href!}
                            className="block px-5 py-2.5 font-poppins text-[13px] font-medium text-dark-text no-underline whitespace-nowrap transition-all duration-150 hover:bg-surface-hover hover:text-pink"
                          >
                            {t(child.labelKey)}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.labelKey}
                href={item.href!}
                className="font-poppins text-sm font-semibold uppercase tracking-[-0.28px] text-dark-text no-underline flex items-center gap-1 whitespace-nowrap hover:text-pink-hover transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex gap-6 items-center">
          <div className="w-px h-5 bg-[#ddd]" />
          <LanguageSwitcher variant="desktop" />
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer z-[1001]"
          onClick={toggle}
          aria-label={isOpen ? tHeader("hamburgerClose") : tHeader("hamburgerOpen")}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-dark-text rounded-sm transition-transform duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark-text rounded-sm transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark-text rounded-sm transition-transform duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  );
}
