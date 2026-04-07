import { Link } from "@/i18n/navigation";

interface BackLinkProps {
  /** Override default margin-top and color classes */
  className?: string;
}

/**
 * "Volver al inicio" link with left arrow icon.
 * Used at the bottom of inner pages to navigate back to the home page.
 */
export default function BackLink({ className }: BackLinkProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-noto text-sm font-semibold uppercase hover:opacity-80 transition-opacity ${
        className ?? "text-purple mt-12"
      }`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rotate-180"
      >
        <path d="M14.43 5.93L20.5 12L14.43 18.07" />
        <path d="M3.5 12H20.33" />
      </svg>
      Volver al inicio
    </Link>
  );
}
