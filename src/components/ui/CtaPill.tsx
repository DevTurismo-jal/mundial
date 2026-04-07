import { Link } from "@/i18n/navigation";

type Variant = "filled" | "outline" | "white" | "ghost";

interface CtaPillProps {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  filled:
    "bg-yellow-green text-navy hover:bg-[#d4e030]",
  outline:
    "bg-white text-navy border border-navy hover:bg-navy hover:text-white [&_svg]:hover:stroke-white",
  white:
    "bg-white text-navy hover:bg-[#f0f0f0]",
  ghost:
    "bg-transparent text-white hover:bg-white/10 backdrop-blur-[7px]",
};

function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      className="shrink-0"
    >
      <path d="M14.43 5.93L20.5 12L14.43 18.07" />
      <path d="M3.5 12H20.33" />
    </svg>
  );
}

export default function CtaPill({
  children,
  href,
  variant = "filled",
  external = false,
  className = "",
}: CtaPillProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 min-h-[48px] max-md:h-auto md:h-12 max-md:w-full md:w-fit pr-5 pl-6 md:pr-6 md:pl-8 border-radius-pill font-noto text-[13px] md:text-sm font-semibold uppercase text-center md:whitespace-nowrap cursor-pointer no-underline transition-all duration-300";

  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
