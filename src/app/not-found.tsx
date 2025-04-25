import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center space-y-6 text-center">
       <Frown className="h-16 w-16 text-primary" />
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">404 - Page Not Found</h1>
      <p className="max-w-md text-lg text-muted-foreground">
        Oops! The page you're looking for doesn't seem to exist. Maybe it was moved, or perhaps you typed the URL incorrectly.
      </p>
      <Button asChild size="lg">
        <Link href="/">Go back to Homepage</Link>
      </Button>
    </div>
  );
}
