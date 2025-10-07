"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/ui/footer";
import { HeroSection, FeaturesSection, CtaSection } from "@/components/home";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-gray-950">
      <TracingBeam className="w-full max-w-none">
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
          <HeroSection />
          <FeaturesSection />
          <CtaSection />
          
          {/* Additional sections can be added here */}
          <div className="h-20" /> {/* Spacer */}
        </div>
      </TracingBeam>
      <Footer />
    </div>
  );
}
