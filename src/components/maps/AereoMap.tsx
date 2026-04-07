'use client';

import { useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { AereoCity } from '@/data/aereoCities';
import { GDL_COORDS } from '@/lib/constants';

interface AereoMapProps {
  cities: AereoCity[];
  selectedCity: AereoCity | null;
  onMapClick?: () => void;
}

export default function AereoMap({ cities, selectedCity, onMapClick }: AereoMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);

  const initMap = useCallback(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [28, -55],
      zoom: 3,
      minZoom: 2,
      maxZoom: 10,
      zoomControl: true,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    L.control.attribution({ prefix: false, position: 'bottomright' })
      .addAttribution('© CARTO · © OSM')
      .addTo(map);

    // GDL Airport marker
    const gdlIcon = L.divIcon({
      className: 'aereo-gdl-marker',
      html: `<div style="display:flex;align-items:center;gap:6px;">
        <div style="width:18px;height:18px;border-radius:50%;background:#03014b;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);position:relative;">
          <div style="position:absolute;top:2px;left:2px;width:8px;height:8px;border-radius:50%;background:#ea3281;"></div>
        </div>
        <span style="font-family:'Noto Sans',sans-serif;font-size:11px;font-weight:700;color:#03014b;background:white;padding:2px 8px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,0.15);white-space:nowrap;">Aeropuerto GDL</span>
      </div>`,
      iconSize: [140, 24],
      iconAnchor: [9, 12],
    });
    L.marker(GDL_COORDS, { icon: gdlIcon }).addTo(map);

    // City markers
    cities.forEach((city) => {
      const marker = L.marker([city.lat, city.lng], {
        icon: L.divIcon({
          className: 'aereo-city-dot',
          html: `<div style="width:8px;height:8px;border-radius:50%;background:#ea3281;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.2);"></div>`,
          iconSize: [8, 8],
          iconAnchor: [4, 4],
        }),
      });
      marker.addTo(map);
      markersRef.current.push(marker);
    });

    map.fitBounds([[-5, -130], [56, 20]], { padding: [60, 40] });

    map.on('click', () => {
      onMapClick?.();
    });

    mapRef.current = map;
  }, [cities, onMapClick]);

  useEffect(() => {
    initMap();
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markersRef.current = [];
      }
    };
  }, [initMap]);

  // Fly to selected city
  useEffect(() => {
    if (!mapRef.current || !selectedCity) return;
    mapRef.current.flyTo([selectedCity.lat, selectedCity.lng], 5, { duration: 1 });
  }, [selectedCity]);

  // Invalidate size when becoming visible
  useEffect(() => {
    const timer = setTimeout(() => {
      mapRef.current?.invalidateSize();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
}
