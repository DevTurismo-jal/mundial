export interface NavItem {
  labelKey: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { labelKey: "jalisco", href: "/jalisco" },
  {
    labelKey: "elMundial",
    children: [
      { labelKey: "calendarioPartidos", href: "/calendario" },
      { labelKey: "conectividad", href: "/conectividad" },
    ],
  },
  {
    labelKey: "muevete",
    children: [
      { labelKey: "comoLlegar", href: "/conectividad" },
      { labelKey: "movilidadCiudad", href: "/movilidad" },
    ],
  },
  {
    labelKey: "tuSeguridad",
    children: [
      { labelKey: "atencionMedica", href: "/atencion-medica" },
      { labelKey: "soporteConsular", href: "/soporte-consular" },
      {
        labelKey: "emergencias",
        href: "https://www.jalisco.gob.mx/atencion-ciudadana/numeros-de-emergencia",
        external: true,
      },
    ],
  },
];
