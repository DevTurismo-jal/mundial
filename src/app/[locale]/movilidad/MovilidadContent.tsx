'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import BackLink from '@/components/ui/BackLink';
import { pois } from '@/data/pois';
import { trainLines, macroLines, type TransitLine } from '@/data/trainLines';

const PoiMap = dynamic(() => import('@/components/maps/PoiMap'), { ssr: false });
const MiBiciMap = dynamic(() => import('@/components/maps/MiBiciMap'), { ssr: false });

export default function MovilidadContent() {
  const [selectedPoi, setSelectedPoi] = useState<number | null>(null);
  const [showFloat, setShowFloat] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [expandedLines, setExpandedLines] = useState<Record<string, boolean>>({});

  const handlePoiSelect = useCallback((index: number) => {
    setSelectedPoi(index);
    if (window.innerWidth <= 768) {
      setShowFloat(true);
    }
  }, []);

  const toggleLine = useCallback((lineId: string) => {
    setExpandedLines((prev) => ({ ...prev, [lineId]: !prev[lineId] }));
  }, []);

  return (
    <main id="main-content" className="pt-20 w-full overflow-hidden">
      {/* HERO — 560px desktop, 420px mobile */}
      <section className="relative w-full h-[420px] md:h-[560px] overflow-hidden flex items-end">
        <Image
          src="/assets/ad9c356cddbc9c52e0d1b9c37da559bfa858e786.png"
          alt="Transporte público en Guadalajara"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(3,1,75,0.85) 0%, rgba(3,1,75,0.3) 60%, rgba(0,0,0,0.1) 100%)' }}
        />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-start justify-end gap-3 md:gap-4 px-5 pb-10 md:px-20 md:pb-20">
          <span className="font-noto text-[14px] font-semibold uppercase text-yellow-green tracking-[2px]">
            Gu&iacute;a de Movilidad
          </span>
          <h1 className="font-bebas text-[28px] sm:text-[36px] md:text-[56px] font-bold text-white uppercase leading-[1.05]">
            C&oacute;mo desplazarte por Guadalajara,<br />la sede mundialista m&aacute;s mexicana
          </h1>
          <p className="font-noto text-[15px] md:text-lg font-normal leading-[1.6] text-white/85">
            Bienvenido a Guadalajara, la capital de nuestro estado y una ciudad
            tradicionalmente moderna, donde vivir&aacute;s la pasi&oacute;n por el
            futbol como en ninguna otra sede.
          </p>
        </div>
      </section>

      {/* INTRO — Mi Movilidad: 2-column layout */}
      <section className="flex justify-center">
        <div className="max-w-[1280px] w-full px-5 py-12 md:px-20 md:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Left — text */}
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="font-noto text-[24px] sm:text-[28px] md:text-[32px] font-black text-navy uppercase tracking-[-1px] leading-[1.1]">
                Red de conectividad integrada:<br />Mi Movilidad
              </h2>
              <p className="font-noto text-base text-dark-sub leading-[1.7]">
                Para que tu experiencia durante la Copa Mundial de la FIFA
                2026&#8482; sea fluida y conozcas la mayor parte de Guadalajara, te
                contamos c&oacute;mo desplazarte por el &Aacute;rea Metropolitana de
                Guadalajara.
              </p>
              <p className="font-noto text-base text-dark-sub leading-[1.7]">
                El &Aacute;rea Metropolitana de Guadalajara (AMG) es un ecosistema
                que integra a los municipios de Guadalajara, Zapopan, San Pedro
                Tlaquepaque (Pueblo M&aacute;gico), Tonal&aacute; y Tlajomulco de
                Z&uacute;&ntilde;iga; cuenta con el modelo de conectividad integrada
                llamado Mi Movilidad. Una sola tarjeta, cuatro l&iacute;neas de tren,
                dos de macrob&uacute;s y cientos de bicicletas que te conectan con los
                atractivos imperdibles.
              </p>
              <p className="font-noto text-base text-dark-sub leading-[1.7]">
                Moverse entre el Estadio Guadalajara, el FIFA Fan Festival y
                diversos puntos tur&iacute;sticos de nuestra capital es sencillo
                gracias a la red interconectada.
              </p>
            </div>
            {/* Right — cards */}
            <div className="w-full lg:w-[420px] lg:shrink-0 flex flex-col gap-4">
              <div className="bg-surface-alt rounded-card p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-icon bg-purple flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h.01"/><path d="M16 15h.01"/></svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-noto text-base font-extrabold text-navy">Mi Tren</h4>
                  <p className="font-noto text-sm text-dark-sub leading-[1.5]">
                    Cuatro l&iacute;neas de tren el&eacute;ctrico que atraviesan los
                    puntos principales de la ciudad.
                  </p>
                </div>
              </div>
              <div className="bg-surface-alt rounded-card p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-icon bg-pink flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-noto text-base font-extrabold text-navy">Mi Macro</h4>
                  <p className="font-noto text-sm text-dark-sub leading-[1.5]">
                    Sistema de autobuses de tr&aacute;nsito r&aacute;pido (BRT) por
                    corredores exclusivos.
                  </p>
                </div>
              </div>
              <div className="bg-surface-alt rounded-card p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-icon bg-green flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-noto text-base font-extrabold text-navy">Mi Bici</h4>
                  <p className="font-noto text-sm text-dark-sub leading-[1.5]">
                    Bicicletas p&uacute;blicas, perfecto para trayectos cortos y
                    disfrutar la arquitectura tapat&iacute;a.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA INTERACTIVO — PUNTOS DE INTERÉS */}
      <section className="flex justify-center">
        <div className="max-w-[1280px] w-full px-5 py-12 md:px-20 md:py-20">
          <h2 className="font-noto text-[26px] md:text-[32px] font-black text-navy uppercase tracking-[-1px] mb-2">
            &iquest;C&oacute;mo llegar a...?
          </h2>
          <p className="font-noto text-base text-dark-sub leading-[1.7] mb-8">
            Usa esta gu&iacute;a y conoce qu&eacute; medio de transporte te lleva y
            en qu&eacute; estaci&oacute;n bajar para llegar a algunos de los puntos
            m&aacute;s emblem&aacute;ticos de nuestra ciudad. Selecciona un destino
            para verlo en el mapa.
          </p>

          <div className="md:grid md:grid-cols-[380px_1fr] lg:grid-cols-[380px_1fr] rounded-[20px] overflow-hidden border-2 border-border-light min-h-[540px] max-md:flex max-md:flex-col-reverse max-md:border-0 max-md:min-h-0 max-md:rounded-card">
            {/* POI list — desktop: vertical; mobile: horizontal pills */}
            <div className="hidden md:block bg-white overflow-y-auto max-h-[540px] border-r border-border-light">
              {pois.map((poi, i) => (
                <button
                  key={poi.name}
                  onClick={() => handlePoiSelect(i)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3.5 border-b border-border-subtle transition-colors ${
                    selectedPoi === i
                      ? 'bg-purple-bg border-l-[3px] border-l-purple'
                      : 'hover:bg-surface-alt'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: poi.color }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-noto text-sm font-bold text-navy truncate">{poi.name}</h4>
                    <p className="font-noto text-xs text-medium-text mt-0.5 leading-[1.4]">
                      <strong className="text-purple font-semibold">{poi.transport.split(' — ')[0]}</strong>
                      {poi.transport.includes(' — ') && ` — ${poi.transport.split(' — ')[1]}`}
                    </p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${poi.lat},${poi.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-9 h-9 rounded-[10px] bg-purple-bg flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-all hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Cómo llegar a ${poi.name}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>
                  </a>
                </button>
              ))}
            </div>
            {/* Mobile pills */}
            <div className="md:hidden flex gap-2 overflow-x-auto px-1 py-3 [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
              {pois.map((poi, i) => (
                <button
                  key={poi.name}
                  onClick={() => handlePoiSelect(i)}
                  className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full border-2 font-noto text-[13px] font-semibold whitespace-nowrap snap-start transition-all shadow-[0_2px_8px_rgba(3,1,75,0.06)] ${
                    selectedPoi === i
                      ? 'border-purple bg-purple-bg text-purple'
                      : 'border-border-light bg-white text-navy'
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: poi.color }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                  {poi.name}
                </button>
              ))}
            </div>

            {/* Map */}
            <div className="relative min-h-[540px] max-md:min-h-[420px] max-md:rounded-card max-md:overflow-hidden max-md:border-2 max-md:border-border-light">
              <PoiMap
                pois={pois}
                selectedIndex={selectedPoi}
                onPoiSelect={handlePoiSelect}
                onMapClick={() => setShowFloat(false)}
              />

              {/* Mobile float card */}
              {showFloat && selectedPoi !== null && pois[selectedPoi] && (
                <div className="md:hidden absolute bottom-4 left-3 right-3 bg-white rounded-[14px] p-4 pr-11 shadow-poi-float z-[800] animate-[poiFloatIn_0.25s_ease-out]">
                  <button
                    onClick={() => setShowFloat(false)}
                    className="absolute top-2 right-2 w-[30px] h-[30px] rounded-full bg-purple-bg flex items-center justify-center text-purple text-lg leading-none"
                    aria-label="Cerrar"
                  >
                    &times;
                  </button>
                  <h4 className="font-noto text-[15px] font-bold text-navy mb-1">{pois[selectedPoi].name}</h4>
                  <p className="font-noto text-[13px] text-medium-text leading-[1.4] mb-2.5">{pois[selectedPoi].transport}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${pois[selectedPoi].lat},${pois[selectedPoi].lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-noto text-[13px] font-bold text-white bg-purple px-4 py-2 rounded-full hover:bg-[#6a3de8] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>
                    C&oacute;mo llegar
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO PAGAR — navy bg */}
      <section className="bg-navy">
        <div className="max-w-[1280px] mx-auto px-5 py-12 md:px-20 md:py-20">
          <h2 className="font-noto text-[22px] sm:text-[26px] md:text-[32px] font-black text-yellow-green uppercase tracking-[-1px] mb-4">
            &iquest;C&oacute;mo pagar en el transporte p&uacute;blico?
          </h2>
          <p className="font-noto text-base text-white/85 leading-[1.7] mb-10">
            En Guadalajara, las m&aacute;quinas no dan cambio, as&iacute; que la
            tarjeta Mi Movilidad es indispensable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '¿Dónde adquirirla?', desc: 'En cualquier estación de Mi Tren o Mi Macro.' },
              { title: '¿Dónde recargar?', desc: 'Estaciones y tiendas OXXO.' },
              { title: '¿No tienes tarjeta?', desc: 'Usa el Univiaje (pago exacto en efectivo, por persona por trayecto). La máquina te dará un ticket con código QR. Consérvalo, es tu comprobante y pase de transbordo.' },
            ].map((card) => (
              <div key={card.title} className="bg-white/[0.08] rounded-card p-7 border border-white/[0.12] flex flex-col gap-3">
                <h4 className="font-noto text-base font-bold text-white">{card.title}</h4>
                <p className="font-noto text-sm text-white/75 leading-[1.6]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MI TREN — alt bg */}
      <section className="bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 py-12 md:px-20 md:py-20">
          {/* Section header with icon */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-card flex items-center justify-center shrink-0 bg-purple">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h.01"/><path d="M16 15h.01"/></svg>
            </div>
            <div>
              <h2 className="font-noto text-[26px] md:text-[32px] font-black text-navy uppercase tracking-[-1px]">Mi Tren</h2>
              <p className="font-noto text-base text-dark-sub mt-1">
                El Tren Ligero es uno de los principales sistemas de transporte
                p&uacute;blico del &Aacute;rea Metropolitana de Guadalajara. El
                sistema est&aacute; conformado por cuatro l&iacute;neas que conectan
                distintos puntos estrat&eacute;gicos de la ciudad y facilitan la
                movilidad diaria de miles de personas.
              </p>
            </div>
          </div>

          {/* Info chips */}
          <div className="flex gap-6 mb-8 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-5 py-2.5 font-noto text-sm font-semibold text-navy">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#03014b" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              05:00 &ndash; 23:00 h
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-5 py-2.5 font-noto text-sm font-semibold text-navy">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#03014b" strokeWidth="2"><path d="M2 17h2.5L6 13l4 8 4-12 3 8h5"/></svg>
              $11 MXN por trayecto
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trainLines.map((line) => (
              <LineCard key={line.id} line={line} expanded={!!expandedLines[line.id]} onToggle={() => toggleLine(line.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* MI MACRO — white bg */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-5 py-12 md:px-20 md:py-20">
          {/* Section header with icon */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-card flex items-center justify-center shrink-0 bg-pink">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>
            </div>
            <div>
              <h2 className="font-noto text-[26px] md:text-[32px] font-black text-navy uppercase tracking-[-1px]">Mi Macro</h2>
              <p className="font-noto text-base text-dark-sub mt-1">
                Mi Macro es el sistema de Autobuses de Tr&aacute;nsito R&aacute;pido
                (BRT) del &Aacute;rea Metropolitana de Guadalajara. Opera a
                trav&eacute;s de corredores troncales que recorren los ejes viales
                m&aacute;s importantes de la ciudad y se integra con otros modos de
                transporte masivo. Cuenta con dos l&iacute;neas de servicio.
              </p>
            </div>
          </div>

          {/* Info chips */}
          <div className="flex gap-6 mb-8 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-5 py-2.5 font-noto text-sm font-semibold text-navy">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#03014b" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              05:00 &ndash; 23:00 h
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-5 py-2.5 font-noto text-sm font-semibold text-navy">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#03014b" strokeWidth="2"><path d="M2 17h2.5L6 13l4 8 4-12 3 8h5"/></svg>
              $11 MXN por trayecto
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {macroLines.map((line) => (
              <LineCard key={line.id} line={line} expanded={!!expandedLines[line.id]} onToggle={() => toggleLine(line.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* TRANSIT MAP BANNER — side-by-side layout */}
      <section className="bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 py-12 md:px-20 md:py-[60px]">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <div className="w-full md:w-[320px] md:shrink-0">
              <h3 className="font-noto text-[20px] md:text-[24px] font-black text-navy uppercase tracking-[-0.5px] mb-3">
                Mapa de la red de transporte
              </h3>
              <p className="font-noto text-[15px] text-dark-sub leading-[1.6]">
                Consulta el mapa completo de Mi Movilidad con todas las
                l&iacute;neas de tren, macrob&uacute;s y estaciones de bicicletas del
                &Aacute;rea Metropolitana de Guadalajara.
              </p>
            </div>
            <div className="flex-1 w-full">
              <button
                onClick={() => setLightboxOpen(true)}
                className="block w-full cursor-pointer group"
                aria-label="Ver mapa de transporte ampliado"
              >
                <div className="relative w-full h-[240px] md:h-[340px] rounded-[20px] overflow-hidden">
                  <Image
                    src="/assets/movilidad.png"
                    alt="Mapa de rutas de transporte en Guadalajara"
                    fill
                    className="object-cover bg-white"
                  />
                  <span className="absolute bottom-4 left-4 bg-navy/85 backdrop-blur-[8px] text-white font-noto text-[13px] font-semibold px-4 py-2 rounded-full inline-flex items-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mr-1"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                    Clic para ver en pantalla completa
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MI BICI — alt bg */}
      <section className="bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 py-12 md:px-20 md:py-20">
          {/* Section header with icon */}
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 rounded-card flex items-center justify-center shrink-0 bg-green">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>
            </div>
            <div>
              <h2 className="font-noto text-[26px] md:text-[32px] font-black text-navy uppercase tracking-[-1px]">Mi Bici</h2>
              <p className="font-noto text-base text-dark-sub mt-1">
                Sistema de Bicicletas P&uacute;blicas del &Aacute;rea Metropolitana
              </p>
            </div>
          </div>
          <p className="font-noto text-base text-dark-sub leading-[1.7] mb-8">
            Sistema de Bicicletas P&uacute;blicas del &Aacute;rea Metropolitana de
            Guadalajara con el que puedes moverte de forma libre y
            ecol&oacute;gica por la ciudad. Es perfecto para que los turistas
            recorran distancias cortas con acceso a m&aacute;s de 370 estaciones.
            Selecciona una estaci&oacute;n en el mapa para ver su disponibilidad en tiempo real.
          </p>

          {/* Integrated card: info sidebar + map */}
          <div className="md:grid md:grid-cols-[340px_1fr] lg:grid-cols-[360px_1fr] rounded-[20px] overflow-hidden border-2 border-border-light min-h-[540px] max-md:flex max-md:flex-col max-md:border-0 max-md:min-h-0 max-md:rounded-card max-md:gap-4">
            {/* Info sidebar */}
            <div className="bg-white border-r border-border-light p-6 flex flex-col gap-5 max-md:border-r-0 max-md:border-2 max-md:border-border-light max-md:rounded-card">
              <h3 className="font-noto text-base font-extrabold text-navy uppercase tracking-wide">
                Datos clave
              </h3>
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b894" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, label: 'Horario', value: '05:00 a 00:59 h' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b894" strokeWidth="2"><path d="M2 17h2.5L6 13l4 8 4-12 3 8h5"/></svg>, label: 'Suscripción temporal', value: 'Desde $120 MXN (1, 3 o 7 días)' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b894" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: 'Viajes ilimitados', value: 'Menores a 30 min c/u' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b894" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>, label: 'Requisitos', value: 'Tarjeta de crédito + tarjeta Mi Movilidad' },
              ].map((detail) => (
                <div key={detail.label} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5">{detail.icon}</span>
                  <div>
                    <div className="font-noto text-sm font-semibold text-navy">{detail.label}</div>
                    <div className="font-noto text-sm text-dark-sub leading-[1.5]">{detail.value}</div>
                  </div>
                </div>
              ))}

              {/* Legend inside sidebar */}
              <div className="mt-auto pt-4 border-t border-border-subtle">
                <span className="font-noto text-[11px] font-bold text-navy uppercase tracking-wide">Disponibilidad</span>
                <div className="flex flex-col gap-1.5 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00b894]" />
                    <span className="font-noto text-[12px] text-[#555]">4+ bicis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                    <span className="font-noto text-[12px] text-[#555]">1&ndash;3 bicis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                    <span className="font-noto text-[12px] text-[#555]">Sin bicis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative min-h-[540px] max-md:h-[420px] max-md:min-h-0 max-md:rounded-card max-md:overflow-hidden max-md:border-2 max-md:border-border-light">
              <MiBiciMap hideLegend />
            </div>
          </div>
        </div>
      </section>

      {/* PLANIFICA TU RUTA */}
      <section className="bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 py-10 md:px-20 md:py-[60px] text-center">
          <p className="font-noto text-base md:text-lg font-medium text-navy">
            Planifica tu ruta en <strong className="font-extrabold">Google Maps</strong> o{' '}
            <strong className="font-extrabold">Moovit</strong>; ambas apps est&aacute;n
            integradas con los horarios y estaciones de Mi Movilidad.
          </p>
        </div>
      </section>

      {/* BACK CTA */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-5 py-12 md:px-20 text-center">
          <BackLink className="text-purple" />
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center p-10"
          onClick={() => setLightboxOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mapa de transporte ampliado"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors z-[10000]"
            aria-label="Cerrar"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div
            className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/movilidad.png"
              alt="Red de transporte Mi Movilidad — Vista completa"
              className="max-w-full max-h-[90vh] object-contain rounded-[12px]"
            />
          </div>
        </div>
      )}
    </main>
  );
}

/* ===== LINE CARD COMPONENT ===== */
function LineCard({ line, expanded, onToggle }: { line: TransitLine; expanded: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-card border border-border-light p-5 md:p-7 hover:shadow-[0_4px_24px_rgba(3,1,75,0.08)] transition-shadow flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span
          className="font-noto text-sm font-extrabold text-white px-3.5 py-1.5 rounded-full uppercase"
          style={{ background: line.color }}
        >
          {line.name}
        </span>
        <span className="font-noto text-[13px] text-medium-text">
          {line.distance} &middot; {line.stationCount} estaciones
          {line.duration && <> &middot; {line.duration}</>}
        </span>
      </div>
      <p className="font-noto text-sm text-dark-sub leading-[1.6]">{line.route}</p>

      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 font-noto text-[13px] font-semibold text-purple uppercase hover:opacity-70 transition-opacity cursor-pointer"
      >
        {expanded ? 'Ocultar estaciones' : 'Ver estaciones'}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {expanded && (
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-subtle">
          {line.stations.map((station) => {
            let classes = 'font-noto text-xs px-2.5 py-1 rounded-[8px] whitespace-nowrap ';
            if (station.highlight === 'fanfest') {
              classes += 'bg-yellow-green text-navy font-semibold';
            } else if (station.highlight === 'venue') {
              classes += 'bg-pink text-white font-semibold';
            } else if (station.transfer) {
              classes += 'bg-yellow-green text-navy font-semibold';
            } else {
              classes += 'bg-[#f4f4fa] text-dark-sub';
            }
            return (
              <span key={station.name} className={classes}>
                {station.name}
                {station.transfer ? ' (T)' : ''}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
