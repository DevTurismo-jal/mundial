import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import CountdownBar from "./CountdownBar";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17V12a4.85 4.85 0 01-3.58-1.59V6.69h3.58z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="w-full bg-pink overflow-hidden">
      {/* Countdown */}
      <CountdownBar />

      {/* Footer Links */}
      <div className="w-full flex items-center justify-center px-5 py-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[215px] w-full">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/logo-jalisco.svg"
              alt={t("logoAlt")}
              width={180}
              height={56}
              className="h-14 w-auto brightness-0 invert"
            />
          </Link>

          {/* Columns */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-white text-base">
            {/* Navegacion */}
            <div className="flex flex-col gap-3 w-auto md:w-[193px]">
              <span className="font-noto font-bold text-base uppercase text-white leading-5">
                {t("navegacion")}
              </span>
              <FooterLink href="/">{t("inicio")}</FooterLink>
              <FooterLink href="/#estadio">{t("estadio")}</FooterLink>
              <FooterLink href="/#explora">{t("exploraJalisco")}</FooterLink>
              <FooterLink href="/#seguridad">{t("seguridad")}</FooterLink>
            </div>

            {/* Siguenos */}
            <div className="flex flex-col gap-3 w-auto md:w-[193px]">
              <span className="font-noto font-bold text-base uppercase text-white leading-5">
                {t("siguenos")}
              </span>
              <div className="flex gap-3">
                <SocialIcon href="#" title="Instagram">
                  <InstagramIcon />
                </SocialIcon>
                <SocialIcon href="#" title="TikTok">
                  <TikTokIcon />
                </SocialIcon>
                <SocialIcon href="#" title="Facebook">
                  <FacebookIcon />
                </SocialIcon>
              </div>
            </div>

            {/* Legales */}
            <div className="flex flex-col gap-3 w-auto md:w-[193px]">
              <span className="font-noto font-bold text-base uppercase text-white leading-5">
                {t("legales")}
              </span>
              <FooterLink href="#">{t("terminos")}</FooterLink>
              <FooterLink href="#">{t("privacidad")}</FooterLink>
              <FooterLink href="#">{t("cookies")}</FooterLink>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-[15px] py-2.5 md:py-3.5 h-auto md:h-14 font-noto text-[11px] md:text-sm text-white border-t border-white/30 mx-5 md:mx-20">
        <span className="opacity-80 text-center">
          {t("copyright")}
        </span>
        <span className="opacity-80 hidden md:inline">|</span>
        <span className="opacity-80 hidden md:inline">{t("avisoPrivacidad")}</span>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-noto text-base text-white opacity-80 no-underline transition-opacity duration-300 hover:opacity-100"
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      title={title}
      className="inline-flex items-center justify-center w-11 h-11 bg-white/20 rounded-full text-white no-underline transition-colors duration-300 hover:bg-white/40"
    >
      {children}
    </a>
  );
}
