import Image from 'next/image';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ABOUT_US_TITLE, ABOUT_US_STORY, ABOUT_US_WHY } from '@/lib/constants';
import FinalCTA from '@/components/home/FinalCTA'; // Reuse CTA

const FounderAvatar = () => (
    // Replace with actual image or animated avatar component later
    <div className="flex justify-center md:justify-start">
         <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-primary shadow-lg">
            <AvatarImage src="https://picsum.photos/seed/founder/200/200" alt="Founder Avatar" />
            <AvatarFallback className="text-3xl font-bold">CA</AvatarFallback> {/* Initials */}
        </Avatar>
    </div>
);


export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Cobi Automation"
        description="Learn more about our mission, vision, and the passion behind our AI solutions."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-3 md:px-6 lg:gap-16">
            {/* Optional Founder Avatar */}
            <div className="md:col-span-1">
                 <FounderAvatar />
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
                 <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                    {ABOUT_US_TITLE}
                </h2>
                 <p className="mb-6 text-lg text-foreground/80">
                   {ABOUT_US_STORY}
                </p>

                <Card className="bg-muted/40 border-l-4 border-primary">
                    <CardContent className="p-6">
                         <h3 className="mb-2 text-xl font-semibold">Why We Exist</h3>
                        <p className="text-foreground/90 italic">
                            {ABOUT_US_WHY}
                        </p>
                    </CardContent>
                </Card>

                {/* Future: Could add Team section here */}
            </div>
        </div>
      </section>

       <FinalCTA />
    </>
  );
}
