"use client";

import { consulados } from "@/data/consulados";
import BackLink from "@/components/ui/BackLink";
import { useNormalizedSearch } from "@/hooks/useNormalizedSearch";

const filterOptions = [
  { label: "Todos", value: "all" },
  { label: "Embajadas", value: "embajada" },
  { label: "Consulados", value: "consulado" },
];

const infoCards = [
  {
    title: "\u00bfQu\u00e9 es un consulado?",
    text: "Es una oficina de tu pa\u00eds establecida en M\u00e9xico que tiene el prop\u00f3sito de apoyar y proteger los derechos, as\u00ed como otorgar servicios a sus nacionales en el extranjero.",
  },
  {
    title: "\u00bfQu\u00e9 es la asistencia consular?",
    text: "Son acciones que realiza el personal consular de aconsejar, brindar atenci\u00f3n y asesor\u00eda jur\u00eddica a sus connacionales en el extranjero.",
  },
  {
    title: "\u00bfQu\u00e9 es la protecci\u00f3n consular?",
    text: "Conjunto de acciones, gestiones, buenos oficios e intervenciones que realiza el personal consular de tu pa\u00eds en M\u00e9xico para salvaguardar los derechos de sus nacionales.",
  },
];

export default function SoporteConsularContent() {
  const { search, setSearch, filter, setFilter, filtered } =
    useNormalizedSearch({
      items: consulados,
      searchFields: ["country", "address"],
      filterField: "type",
    });

  return (
    <main id="main-content" className="pt-20 overflow-hidden w-full">
      {/* Hero — gradient bg, 400px desktop, 320px mobile */}
      <section className="relative w-full h-[320px] md:h-[400px] overflow-hidden bg-[linear-gradient(135deg,#03014b_0%,#1a1070_50%,#0d0040_100%)] flex items-end">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(234,50,129,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(124,77,255,0.1),transparent_60%)]" />
        <div className="relative w-full flex flex-col gap-2 md:gap-4 px-5 pb-8 md:px-10 lg:px-20 lg:pb-20">
          <span className="inline-flex self-start px-4 py-1.5 border-radius-pill bg-pink/85 font-noto text-[11px] md:text-xs font-bold uppercase text-white tracking-wide">
            Tu Seguridad
          </span>
          <h1 className="font-bebas text-[30px] md:text-[56px] font-bold leading-[1.05] text-white uppercase">
            Soporte Consular en Guadalajara
          </h1>
          <p className="font-noto text-[14px] md:text-lg font-normal leading-[1.5] md:leading-[1.7] text-white/90">
            Durante la Copa Mundial de la FIFA 2026&#8482;, las
            representaciones consulares en Guadalajara est&aacute;n disponibles
            para apoyarte.
          </p>
        </div>
      </section>

      {/* Info Cards — padding inside max-width */}
      <section className="flex justify-center">
        <div className="max-w-[1280px] w-full px-5 py-9 md:py-12 lg:px-20 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="bg-navy rounded-card p-5 md:p-8 text-white flex flex-col gap-3"
              >
                <h3 className="font-bebas text-[16px] md:text-lg font-bold uppercase tracking-[0.5px]">
                  {card.title}
                </h3>
                <p className="font-noto text-[13px] md:text-sm text-white/95 leading-[1.7]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory — padding inside max-width */}
      <section className="bg-surface flex justify-center">
        <div className="max-w-[1280px] w-full px-5 py-9 md:py-12 lg:px-20 lg:py-20">
          <div className="mb-6 md:mb-10">
            <h2 className="font-bebas text-[22px] md:text-[36px] font-bold text-navy uppercase mb-2">
              Directorio Consular
            </h2>
            <p className="font-noto text-[14px] md:text-[15px] text-medium-text leading-[1.7]">
              Representaciones consulares en Guadalajara y zona metropolitana.
              Encuentra la embajada o consulado de tu pa&iacute;s para recibir
              asistencia durante tu estancia.
            </p>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-5 md:mb-8">
            <div className="relative flex-1">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Busca por pa&iacute;s o direcci&oacute;n..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-3 md:py-3.5 pl-11 pr-4 border-2 border-border-input rounded-input bg-white font-noto text-[14px] md:text-base text-dark-text placeholder:text-medium-placeholder focus:border-purple focus:shadow-focus-ring focus:outline-none transition-all"
              />
            </div>
            <div className="flex gap-2 md:gap-3 flex-wrap flex-shrink-0">
              {filterOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-filter font-noto text-xs md:text-sm font-semibold uppercase tracking-[0.5px] border-2 transition-all cursor-pointer ${
                    filter === opt.value
                      ? "bg-navy border-navy text-white"
                      : "bg-white border-border-input text-dark-text hover:border-purple hover:text-purple"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="font-noto text-sm font-semibold text-medium-text mb-6">
            Mostrando {filtered.length} resultado
            {filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Cards Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {filtered.map((c, i) => (
                <ConsularCard key={i} consulado={c} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-noto text-lg text-medium-text">
                No se encontraron resultados para tu b&uacute;squeda.
              </p>
              <button
                onClick={() => { setSearch(""); setFilter("all"); }}
                className="mt-4 font-noto text-sm font-semibold text-purple hover:text-pink transition-colors cursor-pointer"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Back */}
          <BackLink />
        </div>
      </section>
    </main>
  );
}

function ConsularCard({
  consulado,
}: {
  consulado: (typeof consulados)[number];
}) {
  const isEmbajada = consulado.type === "embajada";
  const phones = consulado.phone ? consulado.phone.split(" / ") : [];

  return (
    <div className="bg-white border border-border rounded-card p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="font-noto text-[16px] md:text-lg font-bold text-navy leading-snug">
          {consulado.country}
        </h3>
        <span
          className={`shrink-0 font-noto text-[11px] md:text-xs font-semibold uppercase px-3 py-1 rounded-badge tracking-[0.8px] ${
            isEmbajada
              ? "bg-[#e0e0ff] text-navy"
              : "bg-[#ede0ff] text-purple"
          }`}
        >
          {isEmbajada ? "Embajada" : "Consulado"}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Address */}
        <div className="flex gap-2.5">
          <svg className="shrink-0 mt-0.5 opacity-50" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <p className="font-noto text-[13px] md:text-sm text-[#555] leading-[1.5]">
            {consulado.address}
          </p>
        </div>

        {/* Phone(s) */}
        {phones.length > 0 && (
          <div className="flex gap-2.5">
            <svg className="shrink-0 mt-0.5 opacity-50" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {phones.map((phone, j) => (
                <a key={j} href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="font-noto text-[13px] md:text-sm text-purple font-semibold hover:text-pink transition-colors">
                  {phone}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Email */}
        {consulado.email && (
          <div className="flex gap-2.5">
            <svg className="shrink-0 mt-0.5 opacity-50" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            <a href={`mailto:${consulado.email}`} className="font-noto text-[13px] md:text-sm text-purple font-semibold hover:text-pink transition-colors break-all">
              {consulado.email}
            </a>
          </div>
        )}

        {/* Hours */}
        {consulado.hours && (
          <div className="flex gap-2.5">
            <svg className="shrink-0 mt-0.5 opacity-50" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            <p className="font-noto text-[13px] md:text-sm text-[#555]">
              {consulado.hours}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
