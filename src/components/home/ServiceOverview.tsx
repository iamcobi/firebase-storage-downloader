import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { serviceTiers } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServiceOverview() {
  // Display only the 3 core tiers (assuming order matters or filter by specific IDs if needed)
  const overviewTiers = serviceTiers.slice(0, 3); // Adjust if needed

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Our AI Automation Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {overviewTiers.map((tier) => (
            <Card key={tier.id} className={cn(
                "flex flex-col justify-between overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-lg",
                 tier.highlight && "border-primary ring-2 ring-primary/50" // Highlight style
                 )}>
              <CardHeader>
                 {tier.icon && <tier.icon className="mb-3 h-8 w-8 text-primary" />}
                <CardTitle className="text-xl font-semibold">{tier.name}</CardTitle>
                <CardDescription className="text-2xl font-bold text-primary">{tier.price}</CardDescription>
                 <CardDescription className="mt-2 text-sm">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.features.slice(0, 4).map((feature, index) => ( // Show first few features
                    <li key={index} className="flex items-center gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                   {tier.features.length > 4 && <li className="text-primary font-medium">...and more</li>}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant={tier.highlight ? "default" : "outline"} className="w-full">
                  <Link href={`/services#${tier.id}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="mt-12 text-center">
             <Button asChild variant="link">
                <Link href="/services">
                    View All Services & Pricing <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
             </Button>
         </div>
      </div>
    </section>
  );
}
