import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ServicesBar } from "@/components/sections/services-bar";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesBar />
      <FeaturedProjects />
      <SiteFooter />
    </main>
  );
}

