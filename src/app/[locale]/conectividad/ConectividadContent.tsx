'use client';

import { useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { aereoCities, aereoRegionLabels, type AereoCity } from '@/data/aereoCities';
import { terrestreDests, terrestreZoneLabels, type TerrestreDest } from '@/data/terrestreDests';
import { normalize } from '@/lib/normalize';

const AereoMap = dynamic(() => import('@/components/maps/AereoMap'), { ssr: false });
const TerrestreMap = dynamic(() => import('@/components/maps/TerrestreMap'), { ssr: false });

type Tab = 'aereo' | 'terrestre';
type AereoFilter = 'all' | 'national' | 'international';
type TerrestreFilter = 'all' | 'car' | 'bus';

export default function ConectividadContent() {
  const [tab, setTab] = useState<Tab>('aereo');

  // Aereo state
  const [aereoSearch, setAereoSearch] = useState('');
  const [aereoFilter, setAereoFilter] = useState<AereoFilter>('all');
  const [selectedAereo, setSelectedAereo] = useState<AereoCity | null>(null);
  const [showAereoCard, setShowAereoCard] = useState(false);
  const [aereoSearchOpen, setAereoSearchOpen] = useState(true);

  // Terrestre state
  const [terrestreSearch, setTerrestreSearch] = useState('');
  const [terrestreFilter, setTerrestreFilter] = useState<TerrestreFilter>('all');
  const [selectedTerrestre, setSelectedTerrestre] = useState<TerrestreDest | null>(null);
  const [showTerrestreCard, setShowTerrestreCard] = useState(false);
  const [terrestreSearchOpen, setTerrestreSearchOpen] = useState(true);

  // Filtered aereo results
  const aereoResults = useMemo(() => {
    let filtered = aereoCities;
    if (aereoFilter !== 'all') {
      filtered = filtered.filter((c) => c.type === aereoFilter);
    }
    if (aereoSearch.length >= 2) {
      const q = normalize(aereoSearch);
      filtered = filtered.filter(
        (c) =>
          normalize(c.name).includes(q) ||
          c.airlines.some((a) => normalize(a).includes(q))
      );
    }
    return filtered;
  }, [aereoSearch, aereoFilter]);

  // Filtered terrestre results
  const terrestreResults = useMemo(() => {
    let filtered = terrestreDests;
    if (terrestreFilter === 'car') {
      filtered = [...filtered].sort((a, b) => a.distKm - b.distKm);
    } else if (terrestreFilter === 'bus') {
      filtered = [...filtered].sort((a, b) => a.distKm - b.distKm);
    }
    if (terrestreSearch.length >= 2) {
      const q = normalize(terrestreSearch);
      filtered = filtered.filter(
        (d) =>
          normalize(d.name).includes(q) ||
          normalize(d.state).includes(q) ||
          d.busLines.some((l) => normalize(l).includes(q))
      );
    }
    return filtered;
  }, [terrestreSearch, terrestreFilter]);

  const showAereoResults = aereoSearch.length >= 2;
  const showTerrestreResults = terrestreSearch.length >= 2;

  const handleTabChange = useCallback((newTab: Tab) => {
    setTab(newTab);
    setShowAereoCard(false);
    setShowTerrestreCard(false);
    setAereoSearch('');
    setTerrestreSearch('');
  }, []);

  const selectAereoCity = useCallback((city: AereoCity) => {
    setSelectedAereo(city);
    setShowAereoCard(true);
    setAereoSearch('');
  }, []);

  const selectTerrestreDest = useCallback((dest: TerrestreDest) => {
    setSelectedTerrestre(dest);
    setShowTerrestreCard(true);
    setTerrestreSearch('');
  }, []);

  return (
    <main id="main-content" className="pt-20 w-full">
      {/* HERO — 500px desktop, 320px mobile */}
      <section className="relative w-full h-[320px] md:h-[500px] flex items-end overflow-hidden">
        <Image
          src="/assets/comollegar.jpg"
          alt="Vista aérea de la Catedral de Guadalajara"
          fill
          className="object-cover object-[center_calc(50%-50px)]"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(3,1,75,0.3) 0%, rgba(3,1,75,0.75) 100%)' }}
        />
        <div className="relative z-10 w-full flex flex-col gap-2 md:gap-4 px-5 pb-8 md:px-10 lg:px-20 lg:pb-20">
          <span className="inline-flex self-start bg-pink/85 text-white font-noto text-[11px] md:text-xs font-bold uppercase tracking-wider px-4 py-1.5 border-radius-pill">
            Conectividad
          </span>
          <h1 className="font-bebas text-[30px] md:text-[56px] font-bold text-white uppercase leading-[1.05]">
            Cómo llegar a Guadalajara
          </h1>
          <p className="font-noto text-[14px] md:text-lg font-normal leading-[1.5] md:leading-[1.7] text-white/90">
            Llegar a la ciudad es tan f&aacute;cil como vivirla. Contamos con
            excelente conectividad a&eacute;rea y terrestre, con rutas
            nacionales e internacionales.
          </p>
        </div>
      </section>

      {/* INTRO + TABS — centered, max-width 900px */}
      <section className="bg-white flex justify-center">
        <div className="max-w-[1280px] w-full px-5 py-9 md:py-12 lg:px-20 lg:py-20 text-center">
          <h2 className="font-bebas text-[26px] md:text-[42px] font-bold text-navy uppercase mb-4">
            Explora tu ruta a la sede mundialista
          </h2>
          <p className="font-noto text-[14px] md:text-[17px] text-[#444] leading-[1.6] md:leading-[1.8] mb-6 md:mb-10">
            El Aeropuerto Internacional de Guadalajara (GDL) conecta con m&aacute;s de 70 destinos directos en Norteam&eacute;rica, Centroam&eacute;rica, Sudam&eacute;rica y Europa. Por tierra, las autopistas y l&iacute;neas de autob&uacute;s te conectan con las principales ciudades de M&eacute;xico. Selecciona tu tipo de conectividad para explorar las opciones.
          </p>
          <div className="flex gap-2.5 md:gap-4 justify-center">
            <button
              onClick={() => handleTabChange('aereo')}
              className={`inline-flex items-center gap-1.5 md:gap-2.5 font-noto text-[13px] md:text-[15px] font-bold uppercase px-2.5 py-3 md:px-7 md:py-3.5 rounded-full md:rounded-[14px] border-2 transition-all flex-1 md:flex-none justify-center ${
                tab === 'aereo'
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-navy border-border hover:border-navy hover:bg-navy hover:text-white'
              }`}
            >
              ✈️ A&eacute;reo
            </button>
            <button
              onClick={() => handleTabChange('terrestre')}
              className={`inline-flex items-center gap-1.5 md:gap-2.5 font-noto text-[13px] md:text-[15px] font-bold uppercase px-2.5 py-3 md:px-7 md:py-3.5 rounded-full md:rounded-[14px] border-2 transition-all flex-1 md:flex-none justify-center ${
                tab === 'terrestre'
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-navy border-border hover:border-navy hover:bg-navy hover:text-white'
              }`}
            >
              🚗 Terrestre
            </button>
          </div>
        </div>
      </section>

      {/* MAP SECTIONS — padding 0 80px 80px desktop */}
      <section className="bg-white flex justify-center">
        <div className="max-w-content w-full px-0 pb-8 md:px-10 md:pb-16 lg:px-20 lg:pb-20">
          {/* AEREO MAP */}
          {tab === 'aereo' && (
            <div className="relative">
              <div className="relative w-full h-[70vh] max-md:h-[420px] rounded-map max-md:rounded-none overflow-hidden shadow-map">
                <AereoMap
                  cities={aereoCities}
                  selectedCity={selectedAereo}
                  onMapClick={() => {
                    setShowAereoCard(false);
                    if (window.innerWidth <= 768) {
                      setAereoSearchOpen(false);
                    }
                  }}
                />

                {/* Search Panel */}
                <div
                  className={`absolute top-4 left-4 w-[340px] max-md:w-[calc(100%-24px)] max-md:left-3 bg-white/95 backdrop-blur-[10px] rounded-card p-4 shadow-search z-[500] transition-all duration-300 ${
                    !aereoSearchOpen ? 'max-md:-translate-y-[calc(100%+20px)] max-md:opacity-0 max-md:pointer-events-none' : ''
                  }`}
                >
                  <h3 className="font-noto text-base font-extrabold text-navy mb-1">Buscar destino a&eacute;reo</h3>
                  <p className="font-noto text-[11px] text-medium-text leading-[1.4] mb-3">Vuelos directos desde GDL</p>
                  <div className="relative mb-3">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-placeholder" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Ciudad o aerolínea..."
                      value={aereoSearch}
                      onChange={(e) => setAereoSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-input border border-border-input font-noto text-sm focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple"
                      aria-label="Buscar destino aéreo"
                    />
                  </div>
                  <div className="flex gap-2 mb-3">
                    {([['all', 'Todos'], ['national', 'Nacional'], ['international', 'Internacional']] as const).map(
                      ([key, label]) => (
                        <button
                          key={key}
                          onClick={() => setAereoFilter(key)}
                          className={`flex-1 font-noto text-[11px] font-semibold uppercase py-1.5 rounded-filter border transition-all text-center ${
                            aereoFilter === key
                              ? 'bg-navy text-white border-navy'
                              : 'bg-white text-navy border-border hover:border-purple hover:text-purple'
                          }`}
                        >
                          {label}
                        </button>
                      )
                    )}
                  </div>
                  {/* Results */}
                  {showAereoResults && (
                    <div className="max-h-[240px] overflow-y-auto border-t border-border-light pt-2 space-y-1">
                      {aereoResults.length === 0 ? (
                        <p className="text-sm text-medium-text py-4 text-center">Sin resultados</p>
                      ) : (
                        aereoResults.map((city) => (
                          <button
                            key={city.name}
                            onClick={() => selectAereoCity(city)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-surface-hover transition-colors"
                          >
                            <div className="font-noto text-sm font-semibold text-navy">{city.name}</div>
                            <div className="font-noto text-[11px] text-medium-text">
                              {aereoRegionLabels[city.region]} · {city.duration}
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>

                {/* Mobile search toggle */}
                {!aereoSearchOpen && (
                  <button
                    onClick={() => setAereoSearchOpen(true)}
                    className="absolute top-4 left-3 md:hidden bg-white shadow-search rounded-full w-10 h-10 flex items-center justify-center z-[500]"
                    aria-label="Abrir búsqueda"
                  >
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                  </button>
                )}

                {/* Info Card */}
                {showAereoCard && selectedAereo && (
                  <div className="absolute bottom-4 right-4 max-md:left-3 max-md:right-3 max-md:bottom-3 w-[320px] max-md:w-auto bg-white/95 backdrop-blur-[10px] rounded-card p-5 shadow-info z-[500] animate-[conSlideUp_0.3s_ease-out]">
                    <button
                      onClick={() => setShowAereoCard(false)}
                      className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      aria-label="Cerrar"
                    >
                      ✕
                    </button>
                    <h4 className="font-bebas text-[28px] text-navy leading-[1.1]">{selectedAereo.name}</h4>
                    <p className="font-noto text-xs font-bold uppercase text-pink mt-1 tracking-wider">
                      {aereoRegionLabels[selectedAereo.region]}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-dark-sub">
                      <span>🕐</span>
                      <span className="font-noto">Duración: <strong>{selectedAereo.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5 text-sm text-dark-sub">
                      <span>✈️</span>
                      <span className="font-noto">
                        {selectedAereo.type === 'national' ? 'Vuelo Nacional' : 'Vuelo Internacional'}
                      </span>
                    </div>
                    <hr className="my-3 border-border-light" />
                    <p className="font-noto text-xs font-bold uppercase text-navy mb-2">Aerolíneas con vuelo directo</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedAereo.airlines.map((a) => (
                        <span key={a} className="font-noto text-[11px] bg-purple-light text-purple px-2.5 py-1 rounded-full font-medium">
                          {a}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://www.google.com/travel/flights?q=flights+to+guadalajara+from+${encodeURIComponent(selectedAereo.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-navy text-white font-noto text-sm font-semibold py-2.5 rounded-xl hover:bg-navy/90 transition-colors"
                    >
                      Buscar vuelos en Google Flights
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TERRESTRE MAP */}
          {tab === 'terrestre' && (
            <div className="relative">
              <div className="relative w-full h-[70vh] max-md:h-[420px] rounded-map max-md:rounded-none overflow-hidden shadow-map">
                <TerrestreMap
                  destinations={terrestreDests}
                  selectedDest={selectedTerrestre}
                  onMapClick={() => {
                    setShowTerrestreCard(false);
                    if (window.innerWidth <= 768) {
                      setTerrestreSearchOpen(false);
                    }
                  }}
                />

                {/* Search Panel */}
                <div
                  className={`absolute top-4 left-4 w-[340px] max-md:w-[calc(100%-24px)] max-md:left-3 bg-white/95 backdrop-blur-[10px] rounded-card p-4 shadow-search z-[500] transition-all duration-300 ${
                    !terrestreSearchOpen ? 'max-md:-translate-y-[calc(100%+20px)] max-md:opacity-0 max-md:pointer-events-none' : ''
                  }`}
                >
                  <h3 className="font-noto text-base font-extrabold text-navy mb-1">Buscar destino terrestre</h3>
                  <p className="font-noto text-[11px] text-medium-text leading-[1.4] mb-3">Rutas por carretera y autob&uacute;s</p>
                  <div className="relative mb-3">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-placeholder" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Ciudad, estado o línea de autobús..."
                      value={terrestreSearch}
                      onChange={(e) => setTerrestreSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-input border border-border-input font-noto text-sm focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple"
                      aria-label="Buscar destino terrestre"
                    />
                  </div>
                  <div className="flex gap-2 mb-3">
                    {([['all', 'Todos'], ['car', 'En Auto'], ['bus', 'En Autobús']] as const).map(
                      ([key, label]) => (
                        <button
                          key={key}
                          onClick={() => setTerrestreFilter(key)}
                          className={`flex-1 font-noto text-[11px] font-semibold uppercase py-1.5 rounded-filter border transition-all text-center ${
                            terrestreFilter === key
                              ? 'bg-navy text-white border-navy'
                              : 'bg-white text-navy border-border hover:border-purple hover:text-purple'
                          }`}
                        >
                          {label}
                        </button>
                      )
                    )}
                  </div>
                  {showTerrestreResults && (
                    <div className="max-h-[240px] overflow-y-auto border-t border-border-light pt-2 space-y-1">
                      {terrestreResults.length === 0 ? (
                        <p className="text-sm text-medium-text py-4 text-center">Sin resultados</p>
                      ) : (
                        terrestreResults.map((dest) => (
                          <button
                            key={dest.name + dest.state}
                            onClick={() => selectTerrestreDest(dest)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-surface-hover transition-colors"
                          >
                            <div className="font-noto text-sm font-semibold text-navy">{dest.name}</div>
                            <div className="font-noto text-[11px] text-medium-text">
                              {dest.state} · {dest.distKm} km · {terrestreZoneLabels[dest.zone]}
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>

                {/* Mobile search toggle */}
                {!terrestreSearchOpen && (
                  <button
                    onClick={() => setTerrestreSearchOpen(true)}
                    className="absolute top-4 left-3 md:hidden bg-white shadow-search rounded-full w-10 h-10 flex items-center justify-center z-[500]"
                    aria-label="Abrir búsqueda"
                  >
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                  </button>
                )}

                {/* Info Card */}
                {showTerrestreCard && selectedTerrestre && (
                  <div className="absolute bottom-4 right-4 max-md:left-3 max-md:right-3 max-md:bottom-3 w-[320px] max-md:w-auto bg-white/95 backdrop-blur-[10px] rounded-card p-5 shadow-info z-[500] animate-[conSlideUp_0.3s_ease-out]">
                    <button
                      onClick={() => setShowTerrestreCard(false)}
                      className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      aria-label="Cerrar"
                    >
                      ✕
                    </button>
                    <h4 className="font-bebas text-[28px] text-navy leading-[1.1]">{selectedTerrestre.name}</h4>
                    <p className="font-noto text-xs font-bold uppercase text-pink mt-1 tracking-wider">
                      {selectedTerrestre.state}
                    </p>

                    <div className="mt-4">
                      <p className="font-noto text-xs font-bold uppercase text-navy mb-1.5">🚗 En Automóvil</p>
                      <div className="flex gap-4 text-sm text-dark-sub font-noto">
                        <span>Distancia: <strong>{selectedTerrestre.distKm} km</strong></span>
                        <span>Tiempo: <strong>{selectedTerrestre.carTime}</strong></span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="font-noto text-xs font-bold uppercase text-navy mb-1.5">🚌 En Autobús</p>
                      <div className="text-sm text-dark-sub font-noto">
                        <span>Tiempo: <strong>{selectedTerrestre.busTime}</strong></span>
                        <span className="ml-3">
                          Terminal: <strong>{selectedTerrestre.distKm < 100 ? 'Central Vieja' : 'Nueva Central'}</strong>
                        </span>
                      </div>
                    </div>

                    <hr className="my-3 border-border-light" />
                    <p className="font-noto text-xs font-bold uppercase text-navy mb-2">Líneas de autobús</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTerrestre.busLines.map((l) => (
                        <span key={l} className="font-noto text-[11px] bg-purple-light text-purple px-2.5 py-1 rounded-full font-medium">
                          {l}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3">
                      <p className="font-noto text-xs text-medium-text">
                        <strong className="text-navy">Ruta:</strong> {selectedTerrestre.highway}
                      </p>
                    </div>

                    <a
                      href={`https://www.google.com/maps/dir/${encodeURIComponent(selectedTerrestre.name + ', ' + selectedTerrestre.state)}/Guadalajara,+Jalisco`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-navy text-white font-noto text-sm font-semibold py-2.5 rounded-xl hover:bg-navy/90 transition-colors"
                    >
                      Ver ruta en Google Maps
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
