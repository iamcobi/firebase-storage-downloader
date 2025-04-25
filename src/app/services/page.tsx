import PageHeader from '@/components/shared/PageHeader';
import PricingTiers from '@/components/services/PricingTiers';
import ProcessSteps from '@/components/services/ProcessSteps';
import FinalCTA from '@/components/home/FinalCTA'; // Re-use the CTA

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services & Pricing"
        description="Choose the AI automation plan that best fits your business needs and budget. Let's build something amazing together."
      />

      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <PricingTiers />
        </div>
      </section>

      <section id="process" className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
           <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Our Proven Process
           </h2>
          <ProcessSteps />
        </div>
      </section>

       <FinalCTA />
    </>
  );
}
