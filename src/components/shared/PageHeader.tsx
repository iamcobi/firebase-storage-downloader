import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("bg-muted/40 py-12 md:py-16", className)}>
      <div className="container mx-auto px-4 text-center md:px-6">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
