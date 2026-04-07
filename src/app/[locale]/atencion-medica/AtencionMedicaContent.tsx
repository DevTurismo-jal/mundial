"use client";

import { hospitales } from "@/data/hospitales";
import BackLink from "@/components/ui/BackLink";
import { useNormalizedSearch } from "@/hooks/useNormalizedSearch";

const filterOptions = [
  { label: "Todos", value: "all" },
  { label: "Particulares", value: "particular" },
  { label: "P\u00fablicos", value: "publico" },
];

export default function AtencionMedicaContent() {
  const { search, setSearch, filter, setFilter, filtered } =
    useNormalizedSearch({
      items: hospitales,
      searchFields: ["name", "address"],
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
            Atenci&oacute;n M&eacute;dica en Guadalajara
          </h1>
          <p className="font-noto text-[14px] md:text-lg font-normal leading-[1.5] md:leading-[1.7] text-white/90">
            Durante la Copa Mundial de la FIFA 2026&#8482;, la Zona
            Metropolitana de Guadalajara cuenta con una red de hospitales
            p&uacute;blicos y privados listos para atenderte.
          </p>
        </div>
      </section>

      {/* Directory — padding inside max-width */}
      <section className="bg-surface flex justify-center">
        <div className="max-w-[1280px] w-full px-5 py-9 md:py-12 lg:px-20 lg:py-20">
          <div className="mb-6 md:mb-10">
            <h2 className="font-bebas text-[22px] md:text-[36px] font-bold text-navy uppercase mb-2">
              Directorio M&eacute;dico
            </h2>
            <p className="font-noto text-[14px] md:text-[15px] text-medium-text leading-[1.6] md:leading-[1.7]">
              La infraestructura m&eacute;dica de Guadalajara y su zona
              metropolitana est&aacute; preparada para ofrecerte atenci&oacute;n de
              calidad durante tu estancia. Contamos con hospitales de prestigio
              internacionalmente reconocidos, cl&iacute;nicas especializadas y
              centros m&eacute;dicos disponibles 24 horas.
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
                placeholder="Busca por nombre o direcci&oacute;n..."
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
              {filtered.map((h, i) => (
                <HospitalCard key={i} hospital={h} />
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

function HospitalCard({
  hospital,
}: {
  hospital: (typeof hospitales)[number];
}) {
  const isPublic = hospital.type === "publico";
  const phones = hospital.phone.split(" / ");

  return (
    <div className="bg-white border border-border rounded-card p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="font-noto text-[16px] md:text-lg font-bold text-navy leading-snug">
          {hospital.name}
        </h3>
        <span
          className={`shrink-0 font-noto text-[11px] md:text-xs font-semibold uppercase px-3 py-1 rounded-badge tracking-[0.8px] ${
            isPublic
              ? "bg-green-light text-green"
              : "bg-[#ede0ff] text-purple"
          }`}
        >
          {isPublic ? "Hospital P\u00fablico" : "Hospital Particular"}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Address */}
        <div className="flex gap-2.5">
          <svg
            className="shrink-0 mt-0.5 opacity-50"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="font-noto text-[13px] md:text-sm text-[#555] leading-[1.5]">
            {hospital.address}
          </p>
        </div>

        {/* Phone(s) */}
        <div className="flex gap-2.5">
          <svg
            className="shrink-0 mt-0.5 opacity-50"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {phones.map((phone, j) => (
              <a
                key={j}
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="font-noto text-[13px] md:text-sm text-purple font-semibold hover:text-pink transition-colors"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
