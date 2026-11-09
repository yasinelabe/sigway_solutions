import { AiIcon } from "./ai-icon";
import { MobileAppIcon } from "./mobile-app-icon";
import { TelecomIcon } from "./telecom-icon";
import { WebAppIcon } from "./web-app-icon";

const map = {
  mobile: MobileAppIcon,
  web: WebAppIcon,
  telecom: TelecomIcon,
  ai: AiIcon,
} as const;

type ServiceIconName = keyof typeof map;

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = map[name];
  return <Icon className={className} />;
}
