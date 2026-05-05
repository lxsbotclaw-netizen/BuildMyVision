import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProcessSection } from "@/components/process-section";
import { ShowcaseTeaser } from "@/components/showcase-teaser";
import { LexikonTeaser } from "@/components/lexikon-teaser";
import { WaitlistForm } from "@/components/waitlist-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseTeaser />
      <ProcessSection />
      <LexikonTeaser />
      <WaitlistForm />
      <Footer />
    </>
  );
}
