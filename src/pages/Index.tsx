import { useRef, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { WhatYoullLearnSection } from '@/components/sections/WhatYoullLearnSection';
import { ActionStepsSection } from '@/components/sections/ActionStepsSection';
import { BonusesSection } from '@/components/sections/BonusesSection';
import { WhoIsThisForSection } from '@/components/sections/WhoIsThisForSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { MentorSection } from '@/components/sections/MentorSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { loadMetaPixel } from '@/lib/metaPixel';

const FB_PIXEL_LP2 = '4315896568733973';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Example condition
    const variant = new URLSearchParams(window.location.search).get('variant');

    if (variant === 'fb') {
      loadMetaPixel(FB_PIXEL_LP2);
      window.fbq?.('track', 'PageView');
    }
  }, []);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <WhatYoullLearnSection />
      <ActionStepsSection onCTAClick={scrollToHero} />
      <ProblemSection />
      <BonusesSection />
      <WhoIsThisForSection onCTAClick={scrollToHero} />
      <MentorSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection onCTAClick={scrollToHero} />
      <StickyMobileCTA onCTAClick={scrollToHero} />
    </main>
  );
};

export default Index;
