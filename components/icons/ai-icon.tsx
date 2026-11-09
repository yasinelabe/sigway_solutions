import type { IconProps } from "./icon-props";

export function AiIcon({ className, title }: IconProps) {
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
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <path
        d="M24 8v6M24 34v6M8 24h6M34 24h6M12.5 12.5l4.2 4.2M31.3 31.3l4.2 4.2M12.5 35.5l4.2-4.2M31.3 16.7l4.2-4.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="38" cy="12" r="2" fill="currentColor" fillOpacity="0.5" />
      <circle cx="10" cy="38" r="1.5" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}
