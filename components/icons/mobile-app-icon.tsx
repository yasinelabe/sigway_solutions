import type { IconProps } from "./icon-props";

export function MobileAppIcon({ className, title }: IconProps) {
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
      <rect x="14" y="6" width="20" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="10" width="12" height="22" rx="1" fill="currentColor" fillOpacity="0.15" />
      <circle cx="24" cy="37" r="2" fill="currentColor" />
      <path d="M21 14h6M21 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
