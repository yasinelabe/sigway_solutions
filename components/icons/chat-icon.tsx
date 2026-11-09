import type { IconProps } from "./icon-props";

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 9.5C6 6.46 8.69 4 12 4s6 2.46 6 5.5c0 2.66-1.75 4.92-4.2 5.38L12 20l-1.8-5.12C7.75 14.42 6 12.16 6 9.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="12" cy="9.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="9.5" r="1" fill="currentColor" />
    </svg>
  );
}
