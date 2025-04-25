import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { serviceTiers } from '@/lib/constants';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingTiers() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {serviceTiers.map((tier) => (
        <Card
          key={tier.id}
          id={tier.id} // Add ID for deep linking
          className={cn(
            "flex scroll-mt-20 flex-col justify-between overflow-hidden rounded-lg border-2 shadow-sm transition-shadow hover:shadow-lg", // Added scroll-mt for header offset
            tier.highlight ? "border-primary ring-2 ring-primary/50" : "border-border"
          )}
        >
          <CardHeader className="bg-muted/20 p-6">
            {tier.icon && <tier.icon className="mb-4 h-10 w-10 text-primary" />}
            <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
            <CardDescription className="text-3xl font-extrabold text-primary">{tier.price}</CardDescription>
            <CardDescription className="mt-2 text-base">{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow p-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Includes:</h4>
            <ul className="space-y-3">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                   <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="border-t bg-muted/20 p-6">
            <Button asChild variant={tier.highlight ? "default" : "outline"} className="w-full" size="lg">
              <Link href={tier.href}>
                {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
