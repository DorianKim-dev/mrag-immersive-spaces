import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection';
import { HiscoSection } from '@/components/sections/HiscoSection';
import { ValueShiftSection } from '@/components/sections/ValueShiftSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ModulesSection } from '@/components/sections/ModulesSection';
import { ScenarioSection } from '@/components/sections/ScenarioSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { PressSection } from '@/components/sections/PressSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';

const Index = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <HiscoSection />
        <ValueShiftSection />
        <TrustSection />
        <ModulesSection />
        <ScenarioSection />
        <CaseStudiesSection />
        <PressSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
