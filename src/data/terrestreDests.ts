export interface TerrestreDest {
  name: string;
  state: string;
  lat: number;
  lng: number;
  distKm: number;
  carTime: string;
  busTime: string;
  busLines: string[];
  highway: string;
  zone: 'near' | 'mid' | 'far';
}

export const terrestreZoneColors: Record<string, string> = {
  near: '#ea3281',
  mid: '#7c4dff',
  far: '#03014b',
};

export const terrestreZoneLabels: Record<string, string> = {
  near: 'Cercano',
  mid: 'Medio',
  far: 'Lejano',
};

export const terrestreDests: TerrestreDest[] = [
  // NEAR
  { name: 'Aguascalientes', state: 'Aguascalientes', lat: 21.88, lng: -102.29, distKm: 220, carTime: '2h 30m', busTime: '3h', busLines: ['Primera Plus', 'Ómnibus de México', 'ETN'], highway: 'Autopista GDL–Aguascalientes (MEX-80D)', zone: 'near' },
  { name: 'León', state: 'Guanajuato', lat: 21.12, lng: -101.68, distKm: 181, carTime: '2h 10m', busTime: '2h 40m', busLines: ['Primera Plus', 'ETN', 'Flecha Amarilla'], highway: 'Autopista GDL–León (MEX-80D / MEX-45D)', zone: 'near' },
  { name: 'Colima', state: 'Colima', lat: 19.24, lng: -103.72, distKm: 163, carTime: '2h', busTime: '2h 30m', busLines: ['Primera Plus', 'ETN', 'La Línea'], highway: 'Autopista GDL–Colima (MEX-54D)', zone: 'near' },
  { name: 'Tepic', state: 'Nayarit', lat: 21.51, lng: -104.89, distKm: 186, carTime: '2h 20m', busTime: '3h', busLines: ['Primera Plus', 'TAP', 'Pacífico'], highway: 'Autopista GDL–Tepic (MEX-15D)', zone: 'near' },
  { name: 'Puerto Vallarta', state: 'Jalisco', lat: 20.63, lng: -105.23, distKm: 333, carTime: '4h 30m', busTime: '5h', busLines: ['Primera Plus', 'ETN', 'TAP', 'Pacífico'], highway: 'Autopista GDL–Tepic + Fed. 200 / Vía corta GDL–Vallarta', zone: 'near' },
  { name: 'Morelia', state: 'Michoacán', lat: 19.70, lng: -101.19, distKm: 250, carTime: '3h', busTime: '3h 30m', busLines: ['Primera Plus', 'ETN', 'Autovías'], highway: 'Autopista Maravatío–Zapotlanejo (MEX-15D)', zone: 'near' },
  { name: 'Manzanillo', state: 'Colima', lat: 19.11, lng: -104.34, distKm: 302, carTime: '3h 30m', busTime: '4h 30m', busLines: ['Primera Plus', 'ETN', 'La Línea'], highway: 'Autopista GDL–Colima (MEX-54D) + MEX-200', zone: 'near' },
  { name: 'Irapuato', state: 'Guanajuato', lat: 20.68, lng: -101.35, distKm: 207, carTime: '2h 20m', busTime: '3h', busLines: ['Primera Plus', 'Flecha Amarilla'], highway: 'MEX-90D vía Zapotlanejo', zone: 'near' },
  { name: 'Zamora', state: 'Michoacán', lat: 19.98, lng: -102.28, distKm: 152, carTime: '2h', busTime: '2h 30m', busLines: ['Primera Plus', 'Autovías'], highway: 'Autopista MEX-15D vía La Barca', zone: 'near' },
  { name: 'San Juan de los Lagos', state: 'Jalisco', lat: 21.25, lng: -102.33, distKm: 152, carTime: '1h 40m', busTime: '2h 20m', busLines: ['Rojos de los Altos', 'Primera Plus'], highway: 'MEX-80D (GDL–Lagos de Moreno)', zone: 'near' },
  { name: 'Lagos de Moreno', state: 'Jalisco', lat: 21.36, lng: -101.93, distKm: 190, carTime: '2h', busTime: '2h 30m', busLines: ['Rojos de los Altos', 'Primera Plus', 'Ómnibus de México'], highway: 'MEX-80D GDL–Lagos', zone: 'near' },
  { name: 'Chapala', state: 'Jalisco', lat: 20.30, lng: -103.19, distKm: 50, carTime: '0h 45m', busTime: '1h', busLines: ['Autobuses Chapala (Central Vieja)'], highway: 'Carretera a Chapala / MEX-44', zone: 'near' },
  { name: 'Tequila', state: 'Jalisco', lat: 20.88, lng: -103.83, distKm: 60, carTime: '1h', busTime: '1h 20m', busLines: ['Tequila Plus (Central Vieja)', 'Rutas regionales'], highway: 'Carretera Federal 15 / Autopista GDL–Tepic', zone: 'near' },
  { name: 'Tapalpa', state: 'Jalisco', lat: 19.95, lng: -103.76, distKm: 130, carTime: '2h', busTime: '2h 30m', busLines: ['Sur de Jalisco (Central Nueva)'], highway: 'MEX-54D a Sayula + carretera estatal', zone: 'near' },

  // MID
  { name: 'Zacatecas', state: 'Zacatecas', lat: 22.77, lng: -102.57, distKm: 320, carTime: '3h 30m', busTime: '4h 30m', busLines: ['Ómnibus de México', 'Primera Plus', 'ETN'], highway: 'Federal 54 / MEX-54D GDL–Zacatecas', zone: 'mid' },
  { name: 'Querétaro', state: 'Querétaro', lat: 20.59, lng: -100.39, distKm: 370, carTime: '4h', busTime: '5h', busLines: ['Primera Plus', 'ETN', 'Flecha Amarilla'], highway: 'Autopista MEX-45D vía León', zone: 'mid' },
  { name: 'San Luis Potosí', state: 'San Luis Potosí', lat: 22.15, lng: -100.98, distKm: 340, carTime: '3h 40m', busTime: '4h 30m', busLines: ['Primera Plus', 'ETN', 'Ómnibus de México'], highway: 'MEX-80D + MEX-45D vía Aguascalientes', zone: 'mid' },
  { name: 'Guanajuato', state: 'Guanajuato', lat: 21.02, lng: -101.26, distKm: 230, carTime: '2h 40m', busTime: '3h 30m', busLines: ['Primera Plus', 'Flecha Amarilla', 'ETN'], highway: 'MEX-45D vía León', zone: 'mid' },
  { name: 'Celaya', state: 'Guanajuato', lat: 20.52, lng: -100.82, distKm: 300, carTime: '3h 10m', busTime: '4h', busLines: ['Primera Plus', 'Flecha Amarilla'], highway: 'MEX-45D vía Irapuato', zone: 'mid' },
  { name: 'Durango', state: 'Durango', lat: 24.02, lng: -104.67, distKm: 470, carTime: '5h', busTime: '6h 30m', busLines: ['Ómnibus de México', 'ETN', 'Transportes del Norte'], highway: 'MEX-54 GDL–Zacatecas–Durango', zone: 'mid' },
  { name: 'Uruapan', state: 'Michoacán', lat: 19.42, lng: -102.06, distKm: 250, carTime: '3h', busTime: '4h', busLines: ['Primera Plus', 'Autovías'], highway: 'MEX-15D + Federal 37', zone: 'mid' },
  { name: 'Salamanca', state: 'Guanajuato', lat: 20.57, lng: -101.20, distKm: 224, carTime: '2h 30m', busTime: '3h 20m', busLines: ['Primera Plus', 'Flecha Amarilla'], highway: 'MEX-90D / MEX-45D', zone: 'mid' },
  { name: 'Mazatlán', state: 'Sinaloa', lat: 23.24, lng: -106.41, distKm: 465, carTime: '4h 30m', busTime: '6h', busLines: ['TAP', 'Pacífico', 'Transportes del Norte'], highway: 'Autopista MEX-15D (GDL–Tepic–Mazatlán)', zone: 'mid' },

  // FAR
  { name: 'Ciudad de México', state: 'CDMX', lat: 19.43, lng: -99.13, distKm: 533, carTime: '5h 30m', busTime: '7h', busLines: ['ETN', 'Primera Plus', 'Flecha Amarilla', 'TAP'], highway: 'Autopista MEX-15D (GDL–México vía Atlacomulco)', zone: 'far' },
  { name: 'Monterrey', state: 'Nuevo León', lat: 25.67, lng: -100.31, distKm: 700, carTime: '7h 30m', busTime: '9h 30m', busLines: ['Ómnibus de México', 'Transportes del Norte', 'ETN', 'Turistar'], highway: 'MEX-54 a Zacatecas + MEX-45D + MEX-40D', zone: 'far' },
  { name: 'Puebla', state: 'Puebla', lat: 19.04, lng: -98.21, distKm: 620, carTime: '6h 30m', busTime: '8h', busLines: ['ETN', 'Primera Plus'], highway: 'MEX-15D a CDMX + MEX-150D', zone: 'far' },
  { name: 'Toluca', state: 'Estado de México', lat: 19.29, lng: -99.66, distKm: 480, carTime: '5h', busTime: '6h 30m', busLines: ['Primera Plus', 'Flecha Amarilla', 'ETN'], highway: 'MEX-15D vía Maravatío', zone: 'far' },
  { name: 'Saltillo', state: 'Coahuila', lat: 25.42, lng: -100.99, distKm: 680, carTime: '7h', busTime: '9h', busLines: ['Ómnibus de México', 'Transportes del Norte'], highway: 'MEX-54 + MEX-40D vía Zacatecas', zone: 'far' },
  { name: 'Oaxaca', state: 'Oaxaca', lat: 17.07, lng: -96.72, distKm: 890, carTime: '10h', busTime: '12h', busLines: ['ETN (vía CDMX)', 'Primera Plus'], highway: 'MEX-15D a CDMX + MEX-135D', zone: 'far' },
  { name: 'Veracruz', state: 'Veracruz', lat: 19.18, lng: -96.13, distKm: 800, carTime: '9h', busTime: '11h', busLines: ['ETN (vía CDMX)'], highway: 'MEX-15D a CDMX + MEX-150D', zone: 'far' },
  { name: 'Acapulco', state: 'Guerrero', lat: 16.87, lng: -99.88, distKm: 720, carTime: '8h', busTime: '10h', busLines: ['Primera Plus', 'Futura'], highway: 'MEX-15D a Morelia + MEX-51 / MEX-95D', zone: 'far' },
  { name: 'Chihuahua', state: 'Chihuahua', lat: 28.63, lng: -106.09, distKm: 1070, carTime: '11h', busTime: '14h', busLines: ['Ómnibus de México', 'Chihuahuenses'], highway: 'MEX-54 + MEX-45D + MEX-40D', zone: 'far' },
  { name: 'Tijuana', state: 'Baja California', lat: 32.54, lng: -117.02, distKm: 2300, carTime: '24h', busTime: '30h+', busLines: ['Transportes del Norte', 'Elite'], highway: 'MEX-15D (GDL–Mazatlán–Culiacán–Hermosillo–Tijuana)', zone: 'far' },
  { name: 'Culiacán', state: 'Sinaloa', lat: 24.81, lng: -107.39, distKm: 620, carTime: '6h', busTime: '8h', busLines: ['TAP', 'Pacífico', 'Transportes del Norte'], highway: 'Autopista MEX-15D vía Tepic–Mazatlán', zone: 'far' },
  { name: 'Hermosillo', state: 'Sonora', lat: 29.07, lng: -110.96, distKm: 1350, carTime: '14h', busTime: '18h', busLines: ['TAP', 'Pacífico', 'Transportes Norte de Sonora'], highway: 'MEX-15D (Pacífico Norte)', zone: 'far' },
];
