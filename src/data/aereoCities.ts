export interface AereoCity {
  name: string;
  lat: number;
  lng: number;
  region: string;
  type: 'national' | 'international';
  duration: string;
  airlines: string[];
}

export const aereoRegionLabels: Record<string, string> = {
  canada: 'Canadá',
  'us-west': 'EE.UU. Oeste',
  'us-central': 'EE.UU. Centro',
  'us-east': 'EE.UU. Este',
  'mx-national': 'México Nacional',
  caribbean: 'Centroamérica',
  south: 'Sudamérica',
  europe: 'Europa',
};

export const aereoCities: AereoCity[] = [
  // CANADA
  { name: 'Prince George', lat: 53.92, lng: -122.75, region: 'canada', type: 'international', duration: '5h 30m', airlines: ['Flair Airlines'] },
  { name: 'Comox', lat: 49.72, lng: -124.90, region: 'canada', type: 'international', duration: '5h', airlines: ['Swoop'] },
  { name: 'Kelowna', lat: 49.88, lng: -119.50, region: 'canada', type: 'international', duration: '4h 50m', airlines: ['Flair Airlines'] },
  { name: 'Vancouver', lat: 49.28, lng: -123.12, region: 'canada', type: 'international', duration: '5h 10m', airlines: ['Flair Airlines', 'Volaris'] },
  { name: 'Victoria', lat: 48.43, lng: -123.37, region: 'canada', type: 'international', duration: '5h', airlines: ['Swoop'] },
  { name: 'Abbotsford', lat: 49.05, lng: -122.31, region: 'canada', type: 'international', duration: '5h', airlines: ['Flair Airlines'] },
  { name: 'Seattle', lat: 47.61, lng: -122.33, region: 'canada', type: 'international', duration: '4h 40m', airlines: ['Alaska Airlines', 'Volaris'] },
  { name: 'Edmonton', lat: 53.55, lng: -113.49, region: 'canada', type: 'international', duration: '5h 20m', airlines: ['Flair Airlines', 'Swoop'] },
  { name: 'Calgary', lat: 51.05, lng: -114.07, region: 'canada', type: 'international', duration: '4h 50m', airlines: ['Flair Airlines', 'WestJet'] },
  { name: 'Saskatoon', lat: 52.13, lng: -106.67, region: 'canada', type: 'international', duration: '5h 10m', airlines: ['Flair Airlines'] },
  { name: 'Regina', lat: 50.45, lng: -104.62, region: 'canada', type: 'international', duration: '5h', airlines: ['Flair Airlines'] },
  { name: 'Winnipeg', lat: 49.90, lng: -97.14, region: 'canada', type: 'international', duration: '4h 40m', airlines: ['Flair Airlines'] },
  { name: 'Ontario (CA)', lat: 49.27, lng: -85.32, region: 'canada', type: 'international', duration: '4h 30m', airlines: ['Flair Airlines'] },
  { name: 'Ottawa', lat: 45.42, lng: -75.70, region: 'canada', type: 'international', duration: '5h 20m', airlines: ['Flair Airlines'] },
  { name: 'Toronto', lat: 43.65, lng: -79.38, region: 'canada', type: 'international', duration: '4h 50m', airlines: ['Flair Airlines', 'Volaris'] },
  { name: 'Montreal', lat: 45.50, lng: -73.57, region: 'canada', type: 'international', duration: '5h 10m', airlines: ['Flair Airlines'] },
  { name: 'Quebec', lat: 46.81, lng: -71.21, region: 'canada', type: 'international', duration: '5h 30m', airlines: ['Flair Airlines'] },

  // US WEST
  { name: 'Portland', lat: 45.52, lng: -122.68, region: 'us-west', type: 'international', duration: '4h 20m', airlines: ['Alaska Airlines', 'Volaris'] },
  { name: 'Reno', lat: 39.53, lng: -119.81, region: 'us-west', type: 'international', duration: '3h 40m', airlines: ['Volaris'] },
  { name: 'Sacramento', lat: 38.58, lng: -121.49, region: 'us-west', type: 'international', duration: '3h 30m', airlines: ['Aeroméxico', 'Volaris'] },
  { name: 'Oakland', lat: 37.80, lng: -122.27, region: 'us-west', type: 'international', duration: '3h 40m', airlines: ['Volaris'] },
  { name: 'San Francisco', lat: 37.77, lng: -122.42, region: 'us-west', type: 'international', duration: '3h 40m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'San José (CA)', lat: 37.34, lng: -121.89, region: 'us-west', type: 'international', duration: '3h 30m', airlines: ['Volaris'] },
  { name: 'Fresno', lat: 36.74, lng: -119.77, region: 'us-west', type: 'international', duration: '3h 20m', airlines: ['Volaris'] },
  { name: 'Los Angeles', lat: 34.05, lng: -118.24, region: 'us-west', type: 'international', duration: '3h 10m', airlines: ['Aeroméxico', 'Volaris', 'VivaAerobus'] },
  { name: 'Orange County', lat: 33.68, lng: -117.83, region: 'us-west', type: 'international', duration: '3h 10m', airlines: ['Volaris'] },
  { name: 'San Diego', lat: 32.72, lng: -117.16, region: 'us-west', type: 'international', duration: '3h', airlines: ['Volaris'] },
  { name: 'Las Vegas', lat: 36.17, lng: -115.14, region: 'us-west', type: 'international', duration: '3h', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Phoenix', lat: 33.45, lng: -112.07, region: 'us-west', type: 'international', duration: '2h 50m', airlines: ['American Airlines', 'Volaris'] },

  // US CENTRAL
  { name: 'Salt Lake City', lat: 40.76, lng: -111.89, region: 'us-central', type: 'international', duration: '3h 30m', airlines: ['Aeroméxico', 'Delta'] },
  { name: 'Denver', lat: 39.74, lng: -104.99, region: 'us-central', type: 'international', duration: '3h 20m', airlines: ['Volaris', 'Frontier'] },
  { name: 'Minneapolis', lat: 44.98, lng: -93.27, region: 'us-central', type: 'international', duration: '4h', airlines: ['Sun Country'] },
  { name: 'Dallas', lat: 32.78, lng: -96.80, region: 'us-central', type: 'international', duration: '2h 40m', airlines: ['American Airlines', 'Volaris', 'VivaAerobus'] },
  { name: 'Austin', lat: 30.27, lng: -97.74, region: 'us-central', type: 'international', duration: '2h 30m', airlines: ['Volaris'] },
  { name: 'San Antonio', lat: 29.42, lng: -98.49, region: 'us-central', type: 'international', duration: '2h 20m', airlines: ['Volaris'] },
  { name: 'Houston', lat: 29.76, lng: -95.37, region: 'us-central', type: 'international', duration: '2h 30m', airlines: ['United Airlines', 'Volaris', 'VivaAerobus'] },
  { name: 'Mc Allen', lat: 26.20, lng: -98.23, region: 'us-central', type: 'international', duration: '2h', airlines: ['Volaris'] },

  // US EAST
  { name: 'Chicago', lat: 41.88, lng: -87.63, region: 'us-east', type: 'international', duration: '3h 50m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Detroit', lat: 42.33, lng: -83.05, region: 'us-east', type: 'international', duration: '4h', airlines: ['Volaris'] },
  { name: 'Charlotte', lat: 35.23, lng: -80.84, region: 'us-east', type: 'international', duration: '3h 50m', airlines: ['Volaris'] },
  { name: 'Atlanta', lat: 33.75, lng: -84.39, region: 'us-east', type: 'international', duration: '3h 40m', airlines: ['Volaris'] },
  { name: 'Orlando', lat: 28.54, lng: -81.38, region: 'us-east', type: 'international', duration: '3h 30m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Miami', lat: 25.76, lng: -80.19, region: 'us-east', type: 'international', duration: '3h 20m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Nueva York', lat: 40.71, lng: -74.01, region: 'us-east', type: 'international', duration: '4h 40m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Newark', lat: 40.74, lng: -74.17, region: 'us-east', type: 'international', duration: '4h 40m', airlines: ['United Airlines'] },

  // MEXICO NATIONAL
  { name: 'Ciudad de México', lat: 19.43, lng: -99.13, region: 'mx-national', type: 'national', duration: '1h 10m', airlines: ['Aeroméxico', 'Volaris', 'VivaAerobus'] },
  { name: 'Monterrey', lat: 25.67, lng: -100.31, region: 'mx-national', type: 'national', duration: '1h 30m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Cancún', lat: 21.16, lng: -86.85, region: 'mx-national', type: 'national', duration: '2h 40m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Tijuana', lat: 32.54, lng: -117.02, region: 'mx-national', type: 'national', duration: '2h 50m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Puerto Vallarta', lat: 20.63, lng: -105.17, region: 'mx-national', type: 'national', duration: '0h 40m', airlines: ['Volaris'] },
  { name: 'Mérida', lat: 20.97, lng: -89.59, region: 'mx-national', type: 'national', duration: '2h 20m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Hermosillo', lat: 29.07, lng: -110.96, region: 'mx-national', type: 'national', duration: '2h 10m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Ciudad Juárez', lat: 31.69, lng: -106.42, region: 'mx-national', type: 'national', duration: '2h 30m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Culiacán', lat: 24.81, lng: -107.39, region: 'mx-national', type: 'national', duration: '1h 30m', airlines: ['Volaris'] },
  { name: 'Chihuahua', lat: 28.63, lng: -106.09, region: 'mx-national', type: 'national', duration: '2h 10m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Mazatlán', lat: 23.24, lng: -106.41, region: 'mx-national', type: 'national', duration: '1h 20m', airlines: ['Volaris'] },
  { name: 'La Paz', lat: 24.14, lng: -110.31, region: 'mx-national', type: 'national', duration: '1h 50m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Tuxtla Gutiérrez', lat: 16.75, lng: -93.10, region: 'mx-national', type: 'national', duration: '2h', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Villahermosa', lat: 18.00, lng: -92.93, region: 'mx-national', type: 'national', duration: '2h', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Veracruz', lat: 19.18, lng: -96.13, region: 'mx-national', type: 'national', duration: '1h 40m', airlines: ['Volaris', 'VivaAerobus'] },
  { name: 'Acapulco', lat: 16.87, lng: -99.88, region: 'mx-national', type: 'national', duration: '1h 20m', airlines: ['Volaris'] },
  { name: 'Oaxaca', lat: 17.07, lng: -96.72, region: 'mx-national', type: 'national', duration: '1h 40m', airlines: ['Volaris'] },
  { name: 'San Luis Potosí', lat: 22.15, lng: -100.98, region: 'mx-national', type: 'national', duration: '1h', airlines: ['TAR Aerolíneas'] },
  { name: 'León / Bajío', lat: 21.02, lng: -101.48, region: 'mx-national', type: 'national', duration: '0h 50m', airlines: ['TAR Aerolíneas'] },

  // CARIBBEAN / SOUTH
  { name: 'San José, Costa Rica', lat: 9.93, lng: -84.09, region: 'caribbean', type: 'international', duration: '3h 20m', airlines: ['Volaris'] },
  { name: 'Ciudad de Panamá', lat: 8.98, lng: -79.52, region: 'south', type: 'international', duration: '3h 50m', airlines: ['Copa Airlines'] },
  { name: 'Bogotá', lat: 4.71, lng: -74.07, region: 'south', type: 'international', duration: '4h 30m', airlines: ['VivaAerobus'] },

  // EUROPE
  { name: 'Madrid', lat: 40.42, lng: -3.70, region: 'europe', type: 'international', duration: '10h 40m', airlines: ['Aeroméxico'] },
  { name: 'Praga', lat: 50.08, lng: 14.42, region: 'europe', type: 'international', duration: '12h (escala)', airlines: ['Aeroméxico (vía CDMX)'] },
];
