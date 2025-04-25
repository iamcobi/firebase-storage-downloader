
"use client";

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, HOME_CTA_TEXT } from '@/lib/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [hasMounted, setHasMounted] = React.useState(false); // New state
  const isMobile = useIsMobile(); // Hook now returns null initially

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setHasMounted(true); // Set mounted state on client
  }, []);


  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-background'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <Bot className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Cobi Automation</span>
        </Link>

        {/* Navigation Area - Handles null state */}
        <div className="flex items-center">
          {!hasMounted || isMobile === null ? ( // Check hasMounted as well
            // Render placeholder Skeleton while determining mobile state
            <div className="flex items-center gap-6">
                <Skeleton className="hidden h-5 w-16 md:block" />
                <Skeleton className="hidden h-5 w-16 md:block" />
                <Skeleton className="hidden h-5 w-16 md:block" />
                <Skeleton className="hidden h-9 w-32 md:block" />
                <Skeleton className="h-9 w-9 md:hidden" /> {/* Mobile trigger placeholder */}
            </div>
          ) : !isMobile ? (
            // Desktop Navigation
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm">
                <Link href="/contact">{HOME_CTA_TEXT}</Link>
              </Button>
            </nav>
          ) : (
             // Mobile Navigation Trigger (only rendered when isMobile is true)
            <div className="md:hidden">
               <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                 <SheetTrigger asChild>
                   <Button variant="ghost" size="icon">
                     <Menu className="h-6 w-6" />
                     <span className="sr-only">Toggle Menu</span>
                   </Button>
                 </SheetTrigger>
                 <SheetContent side="right" className="w-[280px] pt-10">
                   <nav className="flex flex-col gap-6">
                     {navLinks.map((link) => (
                       <SheetClose asChild key={link.href}>
                         <Link
                           href={link.href}
                           className="text-lg font-medium text-foreground hover:text-primary"
                           onClick={handleLinkClick}
                         >
                           {link.label}
                         </Link>
                       </SheetClose>
                     ))}
                     <SheetClose asChild>
                         <Button asChild size="lg" className="mt-4">
                             <Link href="/contact" onClick={handleLinkClick}>{HOME_CTA_TEXT}</Link>
                         </Button>
                     </SheetClose>
                   </nav>
                 </SheetContent>
               </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
