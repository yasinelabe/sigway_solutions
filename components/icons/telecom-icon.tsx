import type { IconProps } from "./icon-props";

export function TelecomIcon({ className, title }: IconProps) {
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
      <path
        d="M8 36V20l16-10 16 10v16H8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M20 36V26h8v10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 18c0 0 4-6 10-6s10 6 10 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 14.5c2 1.2 4 1.8 6 1.8s4-.6 6-1.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="24" cy="8" r="2" fill="currentColor" />
    </svg>
  );
}
