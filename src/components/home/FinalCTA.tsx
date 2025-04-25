import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HOME_CTA_TEXT } from '@/lib/constants';

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-600 py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto flex flex-col items-center px-4 text-center md:px-6">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
          Ready to Automate Your Business?
        </h2>
        <p className="mb-8 max-w-xl text-lg text-primary-foreground/90">
          Stop wasting time on repetitive tasks. Let Cobi Automation build the AI solutions that drive growth and efficiency.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">
            {HOME_CTA_TEXT} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
