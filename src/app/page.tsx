import { Hero } from "@/components/landing/Hero";
import { CategoriesPreview } from "@/components/landing/CategoriesPreview";
import { PackagesPreview } from "@/components/landing/PackagesPreview";
import { ProcessSteps } from "@/components/landing/ProcessSteps";
import { TheoryBlock } from "@/components/landing/TheoryBlock";
import { TrustBlock } from "@/components/landing/TrustBlock";
import { ContactQuick } from "@/components/landing/ContactQuick";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoriesPreview />
      <PackagesPreview />
      <ProcessSteps />
      <TheoryBlock />
      <TrustBlock />
      <ContactQuick />
    </main>
  );
}
