import { getTranslations, setRequestLocale } from "next-intl/server";
import ConectividadContent from "./ConectividadContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("conectividad.title"),
    description: t("conectividad.description"),
  };
}

export default async function ConectividadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ConectividadContent />;
}
