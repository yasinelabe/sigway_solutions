import { AudiencesSection } from "@/components/audiences-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { TrustSection } from "@/components/trust-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <AudiencesSection />
      <ProductsSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
