'use client';

import { useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { TerrestreDest } from '@/data/terrestreDests';
import { terrestreZoneColors } from '@/data/terrestreDests';
import { GDL_COORDS } from '@/lib/constants';

interface TerrestreMapProps {
  destinations: TerrestreDest[];
  selectedDest: TerrestreDest | null;
  onMapClick?: () => void;
}

export default function TerrestreMap({ destinations, selectedDest, onMapClick }: TerrestreMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const initMap = useCallback(() => {
    if (!containerRef.current || mapRef.current) return;

    const mexicoBounds = L.latLngBounds([14.5, -118], [33, -86]);

    const map = L.map(containerRef.current, {
      center: [23.5, -102],
      zoom: 5,
      minZoom: 5,
      maxZoom: 5,
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      maxBounds: mexicoBounds,
      maxBoundsViscosity: 1.0,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    L.control.attribution({ prefix: false, position: 'bottomright' })
      .addAttribution('© CARTO · © OSM')
      .addTo(map);

    // GDL marker
    const gdlIcon = L.divIcon({
      className: 'terrestre-gdl-marker',
      html: `<div style="display:flex;align-items:center;gap:6px;">
        <div style="width:18px;height:18px;border-radius:50%;background:#ea3281;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);position:relative;">
          <div style="position:absolute;top:2px;left:2px;width:8px;height:8px;border-radius:50%;background:#03014b;"></div>
        </div>
        <span style="font-family:'Noto Sans',sans-serif;font-size:11px;font-weight:700;color:#03014b;background:white;padding:2px 8px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,0.15);white-space:nowrap;">Guadalajara</span>
      </div>`,
      iconSize: [120, 24],
      iconAnchor: [9, 12],
    });
    L.marker(GDL_COORDS, { icon: gdlIcon }).addTo(map);

    // Destination markers
    destinations.forEach((dest) => {
      const zoneColor = terrestreZoneColors[dest.zone] || '#03014b';
      L.marker([dest.lat, dest.lng], {
        icon: L.divIcon({
          className: 'terrestre-dest-dot',
          html: `<div style="width:8px;height:8px;border-radius:50%;background:${zoneColor};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.2);"></div>`,
          iconSize: [8, 8],
          iconAnchor: [4, 4],
        }),
      }).addTo(map);
    });

    map.on('click', () => {
      onMapClick?.();
    });

    mapRef.current = map;
  }, [destinations, onMapClick]);

  useEffect(() => {
    initMap();
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [initMap]);

  // Highlight selected dest
  useEffect(() => {
    if (!mapRef.current || !selectedDest) return;
    mapRef.current.setView([23.5, -102], 5);
  }, [selectedDest]);

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
