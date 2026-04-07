/**
 * Normaliza un string para búsqueda accent-insensitive.
 * Esencial para UX en español: normalize("Atención") === "atencion"
 */
export function normalize(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
