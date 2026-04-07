"use client";

import { Link } from "@/i18n/navigation";
import { navigation } from "@/data/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("Navigation");
  const tHeader = useTranslations("Header");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white z-[999] flex flex-col justify-between px-6 pt-[100px] pb-10"
      role="dialog"
      aria-modal="true"
      aria-label={tHeader("hamburgerOpen")}
    >
      <nav className="flex flex-col">
        {/* Inicio — explicit home link */}
        <MenuLink href="/" onClick={onClose}>
          {t("inicio")}
        </MenuLink>

        {navigation.map((item) => {
          if (item.children) {
            return (
              <div key={item.labelKey}>
                <span className="font-poppins text-[11px] font-bold text-pink uppercase tracking-[1px] pt-4 pb-1 block">
                  {t(item.labelKey)}
                </span>
                {item.children.map((child) => (
                  <MenuLink
                    key={child.labelKey}
                    href={child.href!}
                    external={child.external}
                    onClick={onClose}
                    isSub
                  >
                    {t(child.labelKey)}
                  </MenuLink>
                ))}
              </div>
            );
          }

          return (
            <MenuLink
              key={item.labelKey}
              href={item.href!}
              onClick={onClose}
            >
              {t(item.labelKey)}
            </MenuLink>
          );
        })}
      </nav>

      <div className="flex flex-col gap-4 pt-6 border-t border-[#eee]">
        <LanguageSwitcher variant="mobile" />
      </div>
    </div>
  );
}

function MenuLink({
  href,
  external,
  onClick,
  isSub = false,
  children,
}: {
  href: string;
  external?: boolean;
  onClick: () => void;
  isSub?: boolean;
  children: React.ReactNode;
}) {
  const className = `font-poppins text-dark-text no-underline uppercase tracking-[-0.28px] py-4 border-b border-[#eee] block hover:text-pink ${
    isSub ? "pl-4 text-base font-medium" : "text-lg font-semibold"
  }`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
