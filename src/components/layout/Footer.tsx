import Link from 'next/link';
import { Bot } from 'lucide-react';
import { navLinks, footerLinks } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        {/* Logo and Branding */}
        <div className="flex flex-col items-start gap-2">
          <Link href="/" className="mb-2 flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Cobi Automation</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Automating the work you hate.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4 md:col-span-1 md:justify-self-center">
            <nav className="flex flex-col gap-2">
                <h4 className="mb-1 font-semibold">Navigation</h4>
                 {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                    {link.label}
                    </Link>
                ))}
            </nav>
             <nav className="flex flex-col gap-2">
                <h4 className="mb-1 font-semibold">Legal</h4>
                {footerLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                    {link.label}
                    </Link>
                ))}
             </nav>
        </div>


        {/* Copyright */}
        <div className="flex flex-col items-start text-sm text-muted-foreground md:col-span-1 md:items-end">
           <p>&copy; {currentYear} Cobi Automation. All rights reserved.</p>
           <p className="mt-1">Built with ❤️ and AI.</p>
        </div>
      </div>
       {/* Optional: Small bottom bar */}
       <div className="bg-muted py-2 text-center text-xs text-muted-foreground">
          {/* Can add social links or other minor info here later */}
       </div>
    </footer>
  );
}
