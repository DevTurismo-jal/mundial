import { Fragment } from "react";
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
    title: t("jalisco.title"),
    description: t("jalisco.description"),
  };
}

const blocks = [
  {
    heading: "La sede m\u00e1s mexicana",
    image: "/assets/LA-SEDE-MAS-MEXICANA.jpg",
    alt: "La sede m\u00e1s mexicana",
    reverse: false,
    paragraphs: [
      "Guadalajara brilla ante el mundo como la sede m\u00e1s mexicana de la Copa Mundial de la FIFA 2026\u2122, al recibir cuatro partidos en el Estadio Guadalajara.",
      "No es casualidad. Guadalajara es la puerta de entrada a Jalisco, el estado donde conviven algunas de las claves m\u00e1s profundas de la identidad mexicana: el tequila, la m\u00fasica de mariachi y la charrer\u00eda.",
      "Aqu\u00ed, el futbol se vive con la intensidad y pasi\u00f3n que nos caracteriza a los mexicanos, entre recintos llenos de historia, m\u00fasica que brota del coraz\u00f3n, el zapateado del jarabe tapat\u00edo que cimbra en nuestro ser completo y la hospitalidad que nos distingue, y convierte cada visita en una celebraci\u00f3n compartida.",
    ],
  },
  {
    heading: "Una metr\u00f3poli contempor\u00e1nea",
    image: "/assets/UNA-METROPOLI-CONTEMPORANEA.jpg",
    alt: "Una metr\u00f3poli contempor\u00e1nea",
    reverse: true,
    paragraphs: [
      "Guadalajara, una metr\u00f3poli contempor\u00e1nea, creativa y abierta al mundo. Es sede de eventos internacionales como la Feria Internacional del Libro (FIL), el encuentro editorial m\u00e1s importante de habla hispana; el Festival Internacional de Cine (FICG), un referente del cine en Latinoam\u00e9rica; y el Encuentro Internacional del Mariachi, que celebra a la m\u00fasica que naci\u00f3 en nuestro estado.",
      "Su arquitectura combina tradici\u00f3n, historia y modernidad; su agenda cultural incluye arte, dise\u00f1o, m\u00fasica y espect\u00e1culos durante todo el a\u00f1o; y su gastronom\u00eda, reconocida por su autenticidad e innovaci\u00f3n, invita a descubrir sabores que van de la cocina tradicional jalisciense \u2014 como las t\u00edpicas tortas ahogadas, la carne en su jugo, las jericallas \u2014 a propuestas contempor\u00e1neas de alto nivel.",
    ],
  },
  {
    heading: "Destinos que enamoran",
    image: "/assets/Destinos-Imagen.jpg",
    alt: "Destinos que enamoran",
    reverse: false,
    paragraphs: [
      "Desde la capital es f\u00e1cil expandir tu viaje hacia otros destinos emblem\u00e1ticos de Jalisco. A 2.5 horas por carretera, Puerto Vallarta ofrece el contraste perfecto entre la energ\u00eda urbana, la serenidad del Pac\u00edfico y el colorido de un pueblo tradicional mexicano.",
      "Muy cerca de Guadalajara tambi\u00e9n se encuentran el Pueblo M\u00e1gico de Tequila, cuna de la bebida emblema del pa\u00eds y Patrimonio de la Humanidad por la UNESCO. La Ribera de Chapala, en el lago m\u00e1s grande de M\u00e9xico, destaca por el pintoresco Pueblo M\u00e1gico de Ajijic y su zona de vi\u00f1edos. Cocula, conocida como la cuna del mariachi, es uno de los lugares en los que se puede disfrutar de una de las mejores birrias del estado.",
    ],
  },
];

export default async function JaliscoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main id="main-content" className="pt-20 overflow-hidden w-full">
      {/* Hero */}
      <section className="relative w-full h-[260px] sm:h-[420px] md:h-[560px] overflow-hidden">
        <Image
          src="/assets/GDL-Historia.jpg"
          alt="Guadalajara Historia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,1,75,0.85) 0%, rgba(3,1,75,0.3) 60%, rgba(0,0,0,0.1) 100%)" }} />
        <div className="relative z-[2] flex flex-col items-start justify-end h-full px-5 pb-10 md:px-10 md:pb-[60px] lg:px-20 lg:pb-20 gap-3 md:gap-4 max-w-[1440px] mx-auto">
          <span className="font-noto text-sm font-semibold uppercase text-yellow-green tracking-[2px]">
            Bienvenido a Guadalajara
          </span>
          <h1 className="font-bebas text-[28px] sm:text-[36px] md:text-[56px] font-bold leading-[1.05] text-white uppercase">
            Donde el mundo encuentra la esencia de M&eacute;xico
          </h1>
          <p className="font-noto text-[15px] md:text-lg font-normal leading-[1.6] text-white/85">
            Guadalajara &mdash; la sede m&aacute;s mexicana &mdash; recibe cuatro
            partidos de la Copa Mundial de la FIFA 2026&#8482;. Durante tu
            estancia descubre su cultura, gastronom&iacute;a y destinos
            ic&oacute;nicos.
          </p>
        </div>
      </section>

      {/* Content Blocks — interleaved with blockquote after block 2 */}
      {blocks.map((block, i) => (
        <Fragment key={i}>
          <section
            className="flex justify-center"
          >
            <div
              className={`flex flex-col md:flex-row gap-8 lg:gap-16 max-w-[1280px] w-full px-5 py-12 lg:px-20 lg:py-20 ${
                block.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-[460px] lg:w-[560px] md:shrink-0 min-h-[260px] md:min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden relative">
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  className="object-cover"
                />
                {/* Floating "Ver más" button on Destinos image */}
                {i === 2 && (
                  <a
                    href="/assets/Mapa-Planeador-Jalisco-ESP.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 z-10 bg-navy text-white font-noto text-sm font-semibold uppercase px-5 py-2.5 rounded-full shadow-card-hover hover:bg-purple transition-colors"
                    style={{ animation: "float 3s ease-in-out infinite" }}
                  >
                    Ver m&aacute;s
                  </a>
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 flex-1 justify-center">
                <h3 className="font-noto text-[26px] md:text-[32px] font-black leading-[1.1] text-navy uppercase tracking-[-1px]">
                  {block.heading}
                </h3>
                {block.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="font-noto text-[15px] md:text-base leading-[1.7] text-dark-sub"
                  >
                    {p}
                  </p>
                ))}
                {/* CTA for Destinos block */}
                {i === 2 && (
                  <a
                    href="https://visitjalisco.mx/places?lang=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-noto text-sm font-semibold uppercase text-purple hover:text-pink transition-colors mt-2"
                  >
                    Descubre otros destinos de Jalisco
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.43 5.93L20.5 12L14.43 18.07" />
                      <path d="M3.5 12H20.33" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* Blockquote — after block 2 (index 1) */}
          {i === 1 && (
            <section className="bg-green-light px-5 py-12 lg:px-20 lg:py-20 flex justify-center">
              <div className="relative max-w-[1100px]">
                <span className="absolute -top-[25px] -left-[10px] md:-top-[40px] md:-left-[30px] font-serif text-[80px] md:text-[120px] text-purple opacity-30 leading-none select-none">
                  &ldquo;
                </span>
                <blockquote className="font-bebas text-[24px] sm:text-[28px] md:text-[40px] leading-[1.15] text-navy uppercase text-center">
                  Guadalajara, nuestra capital, cautiva con su arquitectura colonial,
                  recintos llenos de arte, plazas vibrantes, gastronom&iacute;a,
                  mariachi y una identidad cultural que define el alma de Jalisco y
                  M&eacute;xico
                </blockquote>
              </div>
            </section>
          )}
        </Fragment>
      ))}

      {/* Closing CTA */}
      <section className="bg-navy px-5 py-12 lg:px-20 lg:py-20 flex justify-center">
        <div className="max-w-[1000px] text-center flex flex-col items-center gap-4">
          <h3 className="font-bebas text-[28px] sm:text-[32px] md:text-[48px] font-bold leading-[1.05] text-yellow-green uppercase">
            El futbol es solo el inicio
          </h3>
          <p className="font-noto text-[15px] md:text-lg font-normal leading-[1.7] text-white/85">
            Durante el Mundial 2026, Jalisco es mucho m&aacute;s que un
            escenario deportivo: es la puerta para descubrir la esencia de
            M&eacute;xico. En nuestra tierra nacen los s&iacute;mbolos m&aacute;s
            queridos del pa&iacute;s: tequila, mariachi y charrer&iacute;a.
          </p>
          <BackLink className="text-yellow-green mt-4" />
        </div>
      </section>
    </main>
  );
}
