import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { PartnersSection } from "@/components/partners-section";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <PartnersSection />
      <ApproachSection />
      <ContactSection />
    </>
  );
}
