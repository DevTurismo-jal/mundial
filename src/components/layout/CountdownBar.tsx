"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useTranslations } from "next-intl";

export default function CountdownBar() {
  const { days, hours, minutes, seconds } = useCountdown();
  const t = useTranslations("Countdown");

  return (
    <div className="w-full bg-purple px-5 py-4 md:px-20 md:py-10 flex flex-col items-center gap-3 md:gap-4">
      <p className="font-noto text-white text-[13px] md:text-base opacity-80 whitespace-nowrap">
        {t("label")}
      </p>
      <div
        className="flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-8"
        aria-live="polite"
      >
        <CountdownUnit value={days} label={t("dias")} />
        <Separator />
        <CountdownUnit value={hours} label={t("horas")} />
        <Separator />
        <CountdownUnit value={minutes} label={t("minutos")} />
        <Separator />
        <CountdownUnit value={seconds} label={t("segundos")} />
      </div>
    </div>
  );
}

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-noto font-black text-white text-[32px] leading-[28px] sm:text-[40px] sm:leading-[36px] md:text-[60px] md:leading-[56px] lg:text-[80px] lg:leading-[72px]">
        {value}
      </span>
      <span className="font-noto text-white text-xs md:text-base mt-2">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-noto font-black text-white text-[32px] leading-[28px] sm:text-[40px] sm:leading-[36px] md:text-[60px] md:leading-[56px] lg:text-[80px] lg:leading-[72px]">
      :
    </span>
  );
}
