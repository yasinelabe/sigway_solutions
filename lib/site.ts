export const site = {
  name: "SigWay Solutions",
  tagline: "We build software that keeps telecom and business moving.",
  description:
    "SigWay Solutions designs and ships mobile apps, web platforms, telecom systems, and practical AI—for operators, integrators, and teams that need reliable software in production.",
  url: "https://sigway.org",
  email: "yasinelabe@gmail.com",
  phone: "+252 63 411 7787",
  whatsapp: "https://wa.me/252634117787",
} as const;

export const nav = [
  { href: "#work", label: "What we do" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Mobile apps",
    description:
      "Apps your customers actually use—clear flows, stable releases, and backends you can trust when traffic spikes.",
    icon: "mobile" as const,
  },
  {
    title: "Web platforms",
    description:
      "Portals, consoles, and internal tools that load fast and stay maintainable as your team and features grow.",
    icon: "web" as const,
  },
  {
    title: "Telecom systems",
    description:
      "USSD, wallets, signaling, and the glue between your network and your business logic—we’ve run this in live networks.",
    icon: "telecom" as const,
  },
  {
    title: "AI that ships",
    description:
      "Automation and assistants tied to real workflows—support, documents, monitoring—not slide-deck experiments.",
    icon: "ai" as const,
  },
] as const;

export const audiences = [
  {
    title: "Mobile operators",
    description: "Self-service channels, billing, and integrations subscribers touch every day.",
  },
  {
    title: "Integrators & vendors",
    description: "White-label ready components and APIs you can embed in larger programs.",
  },
  {
    title: "Enterprises & startups",
    description: "Custom apps and platforms when off-the-shelf products don’t fit your market.",
  },
] as const;

export const products = [
  {
    title: "SigWay USSD Gateway",
    description:
      "Connect your core network to modern applications—stable sessions, sensible operations, built for scale.",
    status: "In production with operators today.",
  },
  {
    title: "USSD Menu Builder",
    description:
      "Let business teams own menus and content while engineering keeps control of security and releases.",
    status: "Works alongside SigWay in the field.",
  },
  {
    title: "SigWay SMS Gateway",
    description:
      "SMS on the same foundations as our USSD stack—one operational model for your signaling team.",
    status: "On our roadmap; talk to us if you need early access.",
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

export const process = [
  {
    step: "Listen",
    detail: "We start with your constraints—network, timeline, team skills, and what success looks like for users.",
  },
  {
    step: "Design & build",
    detail: "Small milestones, visible demos, and honest estimates. You talk to the people writing the code.",
  },
  {
    step: "Launch & support",
    detail: "We don’t disappear after go-live. Monitoring, fixes, and the next feature ship together.",
  },
] as const;

export const faqs = [
  {
    q: "Do you only work on telecom?",
    a: "Telecom is our deepest experience, but we build mobile and web products for any domain. Many projects mix both—e.g. a subscriber app plus USSD self-service.",
  },
  {
    q: "Can we buy SigWay without custom development?",
    a: "Yes. SigWay USSD Gateway and Menu Builder are licensed products. We also offer implementation help, training, and long-term support if you want it.",
  },
  {
    q: "Where is your team based?",
    a: "We work remotely with customers across East Africa and beyond. Meetings, demos, and support happen in your time zone whenever possible.",
  },
  {
    q: "How do we start a project?",
    a: "Send a short note on WhatsApp or email with what you’re trying to achieve. We’ll suggest a call—not a 50-page RFP—usually within a day or two.",
  },
] as const;
