import { getTranslations, setRequestLocale } from "next-intl/server";
import MovilidadContent from "./MovilidadContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("movilidad.title"),
    description: t("movilidad.description"),
  };
}

export default async function MovilidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MovilidadContent />;
}
