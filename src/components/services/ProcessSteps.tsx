import { automationProcess } from '@/lib/constants';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ProcessSteps() {
  return (
    <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:bg-border md:before:left-1/2 md:before:-translate-x-1/2">
      {automationProcess.map((step, index) => (
        <div key={step.step} className="relative flex items-start md:justify-center">
          {/* Step Number Circle */}
          <div className={
            "absolute left-5 top-1 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background text-lg font-bold text-primary md:left-1/2"
          }>
            {step.step}
          </div>

          {/* Card Content */}
          <Card className={
            "w-full overflow-hidden rounded-lg border shadow-sm md:w-5/12 " +
            (index % 2 === 0 ? "ml-12 md:ml-0 md:mr-[calc(50%+2.5rem)]" : "ml-12 md:ml-[calc(50%+2.5rem)]")
          }>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
              <CardDescription className="mt-1 text-foreground/80">{step.description}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
