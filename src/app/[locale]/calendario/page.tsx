import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BackLink from "@/components/ui/BackLink";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("calendario.title"),
    description: t("calendario.description"),
  };
}

const stadiumCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c4dff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Capacidad",
    text: "Casi 50,000 espectadores distribuidos en zonas de alto confort, con dise\u00f1o moderno inspirado en elementos volc\u00e1nicos.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c4dff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Cancha",
    text: "Superficie de c\u00e9sped natural cumpliendo est\u00e1ndares FIFA para torneos de \u00e9lite con iluminaci\u00f3n LED de \u00faltima generaci\u00f3n.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c4dff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "Historia",
    text: "Sede de la Copa Mundial Sub-17 FIFA 2011, Juegos Panamericanos 2011, finales de liga y partidos internacionales.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c4dff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Experiencia",
    text: "Museo JOVEM, Museo interactivo de Chivas y caf\u00e9s de especialidad como Birote y El Terrible Juan Caf\u00e9.",
  },
];

export default async function CalendarioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main id="main-content" className="pt-20 overflow-hidden w-full">
      {/* Stadium Info */}
      <section className="bg-surface flex justify-center">
        <div className="max-w-[1280px] w-full px-5 py-10 md:px-10 lg:px-20 lg:py-20">
          <h2 className="font-bebas text-[26px] sm:text-[30px] md:text-[40px] font-bold text-navy uppercase mb-2">
            Estadio Guadalajara
          </h2>
          <p className="font-noto text-base text-[#444] leading-[1.8] mb-10">
            El Estadio Guadalajara es uno de los s&iacute;mbolos m&aacute;s
            modernos del futbol en M&eacute;xico. Inaugurado el 30 de julio de
            2010, fue concebido para ser la casa permanente del C.D.
            Guadalajara, uno de los clubes con mayor tradici&oacute;n del
            pa&iacute;s.
          </p>

          {/* Info Grid — 2 cols desktop, 1 col mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {stadiumCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-card p-7 border border-border-light flex flex-col gap-2"
              >
                <h4 className="font-noto text-[15px] font-extrabold text-navy uppercase flex items-center gap-2">
                  <span className="opacity-60 shrink-0">{card.icon}</span>
                  {card.title}
                </h4>
                <p className="font-noto text-sm text-[#555] leading-[1.7]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-navy rounded-card p-6 md:p-8 text-white flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-yellow-green/15 flex items-center justify-center shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eeff42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bebas text-[28px] font-bold mb-1">
                Guadalajara: Cuna del Futbol Mexicano
              </h3>
              <p className="font-noto text-sm text-white/75 leading-[1.6]">
                El Club Deportivo Guadalajara &ldquo;Chivas&rdquo;, fundado en
                1906, es uno de los equipos m&aacute;s exitosos y queridos del
                pa&iacute;s, reconocido por su filosof&iacute;a de formar y
                alinear exclusivamente futbolistas mexicanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="flex justify-center">
        <div className="max-w-[1280px] w-full px-5 py-10 md:px-10 lg:px-20 lg:py-20">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="font-bebas text-[28px] md:text-[36px] font-bold text-navy uppercase mb-2">
                Historia deportiva y grandes momentos
              </h2>
              <p className="font-noto text-[15px] text-[#444] leading-[1.8]">
                Desde el primer partido amistoso del Reba&ntilde;o Sagrado contra
                el Manchester United, donde Javier &ldquo;Chicharito&rdquo;
                Hern&aacute;ndez marc&oacute; el primer gol en la casa
                rojiblanca, el estadio ha sido testigo de momentos memorables.
              </p>
              <p className="font-noto text-[15px] text-[#444] leading-[1.8]">
                Uno de los primeros grandes hitos fue la final de ida de la Copa
                Libertadores 2010 entre Chivas e Internacional de Porto Alegre,
                consolidando el recinto como sede de eventos de alto nivel.
                Adem&aacute;s de cl&aacute;sicos y finales de la liga mexicana,
                fue sede de la Copa Mundial Sub-17 FIFA 2011, donde M&eacute;xico
                se coron&oacute; campe&oacute;n del mundo.
              </p>
              <p className="font-noto text-[15px] text-[#444] leading-[1.8]">
                El Estadio Guadalajara promete ser un punto de encuentro para
                aficionados de todo el mundo que quieran sentir la pasi&oacute;n
                del futbol en un ambiente vibrante y profundamente mexicano.
              </p>
              <BackLink className="text-purple mt-4" />
            </div>

            {/* Image */}
            <div className="w-full md:w-[460px] lg:w-[500px] md:shrink-0 min-h-[300px] md:min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden relative">
              <Image
                src="/assets/Akron-chivas.avif"
                alt="Estadio Akron - Chivas de Guadalajara"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

