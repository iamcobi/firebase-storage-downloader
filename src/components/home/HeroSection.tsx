import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HOME_HERO_HEADLINE, HOME_HERO_SUBHEADLINE, HOME_CTA_TEXT } from '@/lib/constants';

// Placeholder for the explainer animation/video
const ExplainerVisual = () => (
  <div className="aspect-video w-full max-w-2xl rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-4 shadow-lg">
    <div className="flex h-full items-center justify-center">
      <p className="text-xl font-semibold text-primary animate-pulse">
        [Explainer Animation/Video Placeholder]
      </p>
    </div>
  </div>
);


export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-blue-50/50 py-20 md:py-32 lg:py-40">
      {/* Background decorative shapes (optional) */}
      <div className="absolute inset-0 z-0 opacity-10">
         {/* Add subtle background patterns or shapes here if desired */}
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center md:px-6">
        <h1 className="mb-4 max-w-3xl text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl">
          {HOME_HERO_HEADLINE}
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-foreground/80 md:text-xl">
          {HOME_HERO_SUBHEADLINE}
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            {HOME_CTA_TEXT} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        {/* Explainer Visual */}
        <div className="mt-12 md:mt-16">
           <ExplainerVisual />
        </div>
      </div>
    </section>
  );
}
