'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Station {
  station_id: string;
  name: string;
  lat: number;
  lon: number;
  capacity: number;
  bikes: number;
  docks: number;
  isRenting: boolean;
}

function bikeColor(bikes: number) {
  if (bikes === 0) return '#ef4444';
  if (bikes <= 3) return '#f59e0b';
  return '#00b894';
}

export default function MiBiciMap({ hideLegend = false }: { hideLegend?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.CircleMarker[]>([]);
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadStations = useCallback(async () => {
    try {
      const [infoRes, statusRes] = await Promise.all([
        fetch('/api/mibici/station_information'),
        fetch('/api/mibici/station_status'),
      ]);

      if (!infoRes.ok || !statusRes.ok) throw new Error('API error');

      const info = await infoRes.json();
      const status = await statusRes.json();

      const statusMap: Record<string, { num_bikes_available: number; num_docks_available: number; is_renting: boolean }> = {};
      for (const s of status.data.stations) {
        statusMap[s.station_id] = s;
      }

      const merged: Station[] = info.data.stations.map((s: { station_id: string; name: string; lat: number; lon: number; capacity: number }) => {
        const st = statusMap[s.station_id];
        return {
          station_id: s.station_id,
          name: s.name,
          lat: s.lat,
          lon: s.lon,
          capacity: s.capacity || 0,
          bikes: st?.num_bikes_available ?? 0,
          docks: st?.num_docks_available ?? 0,
          isRenting: st?.is_renting ?? false,
        };
      });

      setStations(merged);
      setError(null);
    } catch {
      setError('No se pudieron cargar las estaciones');
    } finally {
      setLoading(false);
    }
  }, []);

  // Load data on mount + refresh every 60s
  useEffect(() => {
    loadStations();
    const interval = setInterval(loadStations, 60000);
    return () => clearInterval(interval);
  }, [loadStations]);

  // Init map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [20.6737, -103.3704],
      zoom: 13,
      minZoom: 11,
      maxZoom: 18,
      zoomControl: true,
      maxBounds: L.latLngBounds([20.4, -103.6], [20.9, -103.1]),
      maxBoundsViscosity: 1.0,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com">CARTO</a> &copy; <a href="https://osm.org">OSM</a>',
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Render markers when stations change
  useEffect(() => {
    const map = mapRef.current;
    if (!map || stations.length === 0) return;

    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    for (const s of stations) {
      const color = bikeColor(s.bikes);
      const marker = L.circleMarker([s.lat, s.lon], {
        radius: 6,
        fillColor: color,
        fillOpacity: 0.9,
        color: '#fff',
        weight: 1.5,
      }).addTo(map);

      const statusLabel = s.isRenting ? 'Activa' : 'Fuera de servicio';
      marker.bindPopup(
        `<div style="font-family:'Noto Sans',sans-serif;min-width:160px">
          <strong style="font-size:14px;color:#03014b">${s.name}</strong>
          <div style="margin-top:6px;font-size:13px;color:#444">
            🚲 <strong>${s.bikes}</strong> bicis disponibles<br/>
            🅿️ <strong>${s.docks}</strong> espacios libres<br/>
            📊 Capacidad: ${s.capacity}
          </div>
          <div style="margin-top:4px;font-size:11px;color:${s.isRenting ? '#00b894' : '#ef4444'}">${statusLabel}</div>
        </div>`
      );

      markersRef.current.push(marker);
    }
  }, [stations]);

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-map overflow-hidden shadow-map">
      <div ref={containerRef} className="w-full h-full z-0" />

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 z-[600] flex items-center justify-center bg-navy/60 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            <p className="font-noto text-sm text-white font-semibold">Cargando estaciones&hellip;</p>
          </div>
        </div>
      )}

      {/* Error overlay */}
      {error && !loading && (
        <div className="absolute inset-0 z-[600] flex items-center justify-center bg-navy/60 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 text-center px-6">
            <p className="font-noto text-sm text-white">{error}</p>
            <button
              onClick={loadStations}
              className="font-noto text-sm font-semibold text-navy bg-yellow-green px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Reintentar
            </button>
          </div>
        </div>
      )}

      {/* Legend */}
      {!loading && !error && !hideLegend && (
        <div className="absolute bottom-4 left-4 z-[500] bg-white/95 backdrop-blur-[6px] rounded-card px-4 py-3 shadow-card flex flex-col gap-1.5">
          <span className="font-noto text-[11px] font-bold text-navy uppercase tracking-wide">Disponibilidad</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00b894]" />
            <span className="font-noto text-[11px] text-[#555]">4+ bicis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <span className="font-noto text-[11px] text-[#555]">1–3 bicis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="font-noto text-[11px] text-[#555]">Sin bicis</span>
          </div>
        </div>
      )}
    </div>
  );
}
