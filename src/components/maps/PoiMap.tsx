'use client';

import { useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Poi } from '@/data/pois';

interface PoiMapProps {
  pois: Poi[];
  selectedIndex: number | null;
  onPoiSelect?: (index: number) => void;
  onMapClick?: () => void;
}

export default function PoiMap({ pois, selectedIndex, onPoiSelect, onMapClick }: PoiMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);

  const initMap = useCallback(() => {
    if (!containerRef.current || mapRef.current) return;

    const jaliscoB = L.latLngBounds([19.0, -105.8], [22.8, -101.5]);

    const map = L.map(containerRef.current, {
      center: [20.685, -103.37],
      zoom: 12,
      minZoom: 10,
      maxZoom: 18,
      zoomControl: true,
      maxBounds: jaliscoB,
      maxBoundsViscosity: 1.0,
    });

    // Move zoom control to top-right
    map.zoomControl.setPosition('topright');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);

    // Create markers for each POI
    pois.forEach((poi, i) => {
      const isStadium = i === 0;
      const size = isStadium ? 44 : 30;
      const icon = L.divIcon({
        className: 'poi-marker',
        html: `<div style="
          width:${size}px;height:${size}px;border-radius:50%;
          background:${poi.color};border:3px solid white;
          box-shadow:0 2px 8px rgba(0,0,0,0.3);
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;
          ${isStadium ? 'font-size:18px;' : 'font-size:12px;'}
        ">${isStadium ? '⚽' : ''}</div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });

      const marker = L.marker([poi.lat, poi.lng], { icon });
      marker.bindPopup(`
        <div style="font-family:'Noto Sans',sans-serif;min-width:180px;">
          <strong style="font-size:14px;color:#03014b;">${poi.name}</strong>
          <div style="font-size:12px;color:#666;margin-top:4px;">
            🚇 ${poi.transport}
          </div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${poi.lat},${poi.lng}"
             target="_blank" rel="noopener noreferrer"
             style="display:inline-block;margin-top:8px;font-size:12px;color:#7c4dff;font-weight:600;text-decoration:none;">
            Cómo llegar →
          </a>
        </div>
      `);
      marker.on('click', () => {
        onPoiSelect?.(i);
      });
      marker.addTo(map);
      markersRef.current.push(marker);
    });

    map.on('click', () => {
      onMapClick?.();
    });

    mapRef.current = map;
  }, [pois, onPoiSelect, onMapClick]);

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

  // Pan to selected POI
  useEffect(() => {
    if (!mapRef.current || selectedIndex === null) return;
    const poi = pois[selectedIndex];
    if (!poi) return;
    mapRef.current.setView([poi.lat, poi.lng], 14, { animate: true });
    const marker = markersRef.current[selectedIndex];
    if (marker && window.innerWidth > 768) {
      marker.openPopup();
    }
  }, [selectedIndex, pois]);

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
