import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { WaitlistForm } from "@/components/waitlist-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WaitlistForm />
      <Footer />
    </>
  );
}
