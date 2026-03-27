export function GridPattern({ className }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full stroke-zinc-200/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={40}
          height={40}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 40V.5H40" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
    </svg>
  );
}

export function DotPattern({ className }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dot-pattern"
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={2} cy={2} r={1} className="fill-zinc-200" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#dot-pattern)" />
    </svg>
  );
}