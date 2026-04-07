import { getTranslations, setRequestLocale } from "next-intl/server";
import AtencionMedicaContent from "./AtencionMedicaContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("atencionMedica.title"),
    description: t("atencionMedica.description"),
  };
}

export default async function AtencionMedicaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AtencionMedicaContent />;
}
