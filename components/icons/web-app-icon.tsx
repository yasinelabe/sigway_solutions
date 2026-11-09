import type { IconProps } from "./icon-props";

export function WebAppIcon({ className, title }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M6 16h36" stroke="currentColor" strokeWidth="2" />
      <circle cx="11" cy="13" r="1.5" fill="currentColor" />
      <circle cx="16" cy="13" r="1.5" fill="currentColor" />
      <path
        d="M12 26h14v2H12v-2Zm0 6h20v2H12v-2Z"
        fill="currentColor"
        fillOpacity="0.35"
      />
      <path d="M30 24l8 6-8 6V24Z" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}
