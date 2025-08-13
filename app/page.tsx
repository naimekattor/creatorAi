import Hero from "@/components/hero";
import SubscriptionSection from "@/components/SubscriptionSection";
import InterviewHero from "@/components/interview-hero";
import WhySection from "@/components/why-section";
import Testimonials from "@/components/testimonials";
import CTABanner from "@/components/cta-banner";

export default function Page() {
  return (
    <main className="min-h-dvh bg-black text-slate-200">
      {/* <Header /> */}
      <Hero />
      <WhySection />
      <SubscriptionSection />
      <InterviewHero />
      <Testimonials />
      <CTABanner />
      {/* <Footer /> */}
    </main>
  );
}
