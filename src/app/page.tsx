import HeroSection from '@/components/home/HeroSection';
import ServiceOverview from '@/components/home/ServiceOverview';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceOverview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
