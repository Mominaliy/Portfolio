import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemsSection } from '@/components/sections/ProblemsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { WhyWorkSection } from '@/components/sections/WhyWorkSection';
import { ContactSection } from '@/components/sections/ContactSection';

/**
 * Homepage
 * Composed of all main sections
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyWorkSection />
      <ContactSection />
    </>
  );
}
