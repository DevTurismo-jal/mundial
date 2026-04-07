import { getTranslations, setRequestLocale } from "next-intl/server";
import SoporteConsularContent from "./SoporteConsularContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("soporteConsular.title"),
    description: t("soporteConsular.description"),
  };
}

export default async function SoporteConsularPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SoporteConsularContent />;
}
