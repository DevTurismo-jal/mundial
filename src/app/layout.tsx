import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jalisco — Sede de la Copa Mundial FIFA 2026™ | Guadalajara te espera",
  description:
    "Jalisco y Guadalajara te dan la bienvenida como sede oficial de la Copa Mundial de la FIFA 2026™. Descubre el estadio, calendario, conectividad, movilidad y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
