export interface Poi {
  name: string;
  lat: number;
  lng: number;
  color: string;
  transport: string;
}

export const pois: Poi[] = [
  { name: 'Estadio Guadalajara (Akron)', lat: 20.6803, lng: -103.4624, color: '#ea3281', transport: 'Mi Macro Periférico — Est. Estadio Chivas' },
  { name: 'Centro Histórico GDL', lat: 20.6769, lng: -103.3475, color: '#7c4dff', transport: 'Mi Tren L2 / L3' },
  { name: 'Centro Histórico Zapopan', lat: 20.7213, lng: -103.3919, color: '#7c4dff', transport: 'Mi Tren Línea 3 — Est. Zapopan Centro' },
  { name: 'Pueblo Mágico de Tlaquepaque', lat: 20.6408, lng: -103.3127, color: '#7c4dff', transport: 'Mi Tren Línea 3 — Est. Tlaquepaque Centro' },
  { name: 'Colonia Americana / Chapultepec', lat: 20.6717, lng: -103.3636, color: '#00b894', transport: 'Mi Bici — Estaciones en la zona' },
  { name: 'Zoológico Guadalajara', lat: 20.7440, lng: -103.3180, color: '#ea3281', transport: 'Mi Macro Calzada — Est. Zoológico' },
  { name: 'Arena Astros', lat: 20.6920, lng: -103.3705, color: '#7c4dff', transport: 'Mi Tren Línea 3 — Est. Ávila Camacho' },
  { name: 'Estadio Charros', lat: 20.7140, lng: -103.3990, color: '#7c4dff', transport: 'Mi Tren Línea 3 — Est. Mercado del Mar' },
  { name: 'Bosque Los Colomos', lat: 20.7070, lng: -103.3970, color: '#7c4dff', transport: 'Mi Tren Línea 3 — Est. Plaza Patria' },
  { name: 'Centro Comercial Andares', lat: 20.7035, lng: -103.4205, color: '#ea3281', transport: 'Mi Macro Periférico — Est. Acueducto' },
];
