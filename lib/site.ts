export const site = {
  name: "SigWay Solutions",
  tagline: "Mobile, web, telecom, and AI software for operators and enterprises.",
  description:
    "SigWay Solutions builds production-grade mobile and web applications, telecom platforms (USSD, SMS, signaling), and AI-powered automation for carriers and integrators.",
  url: "https://sigway.solutions",
  email: "yasinelabe@gmail.com",
  phone: "+252 63 411 7787",
  whatsapp: "https://wa.me/252634117787",
} as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#partners", label: "Partners" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Mobile applications",
    description:
      "Native and cross-platform apps with offline-first UX, secure APIs, and release pipelines tuned for emerging markets.",
    icon: "mobile" as const,
  },
  {
    title: "Web applications",
    description:
      "High-performance dashboards, customer portals, and internal ops tools—SSR where it matters, edge where it scales.",
    icon: "web" as const,
  },
  {
    title: "Telecom software",
    description:
      "USSD gateways, menu platforms, MFS integrations, and signaling paths that meet carrier-grade expectations.",
    icon: "telecom" as const,
  },
  {
    title: "AI solutions",
    description:
      "Practical AI: document extraction, support copilots, anomaly detection, and workflow automation—not demos.",
    icon: "ai" as const,
  },
] as const;

export const products = [
  {
    badge: "Available",
    badgeVariant: "live" as const,
    title: "SigWay USSD Gateway",
    description:
      "SS7/M3UA to application bridging: TCP/XML, HTTP MO & MT, session control, ATI, rate limits, and operator licensing.",
    links: [
      { label: "Gateway overview", href: "https://github.com/yasinelabe/sigway", external: true },
    ],
  },
  {
    badge: "Available",
    badgeVariant: "live" as const,
    title: "USSD Menu Builder",
    description:
      "Business-owned menus, languages, HTTP integrations, push USSD, and governance—pairs with SigWay in production.",
    links: [{ label: "Talk to us", href: "#contact", external: false }],
  },
  {
    badge: "Coming soon",
    badgeVariant: "soon" as const,
    title: "SigWay SMS Gateway",
    description:
      "SMS on the same SS7 footprint as SigWay USSD—aligned interfaces and operations for MO/MT messaging.",
    links: [{ label: "Join waitlist", href: site.whatsapp, external: true }],
  },
] as const;

export const partners = [
  {
    name: "Telesom",
    logo: "/partners/telesom.jpg",
    width: 200,
    height: 80,
  },
  {
    name: "Soltelco",
    logo: "/partners/soltelco.png",
    width: 200,
    height: 80,
  },
] as const;

export const stats = [
  { value: "Telecom", label: "USSD · MFS · core integrations" },
  { value: "Shipped", label: "Production at tier-1 operators" },
  { value: "Full stack", label: "Gateway → menus → web & mobile" },
] as const;
