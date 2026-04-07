import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-5 py-20 bg-surface">
      <h1 className="font-brigends text-6xl md:text-8xl text-navy mb-4">404</h1>
      <p className="font-noto text-lg text-dark-text mb-8 text-center">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="font-noto text-sm font-semibold uppercase text-white bg-pink px-8 py-3 rounded-full no-underline hover:bg-pink-hover transition-colors"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
