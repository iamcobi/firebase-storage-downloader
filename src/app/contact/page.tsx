'use client'; // Required for using useSearchParams

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Calendar, Bot, Building, MessageSquare } from 'lucide-react'; // Added Building, MessageSquare
import { CALENDLY_BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE, serviceTiers } from '@/lib/constants';

export default function ContactPage() {
   const searchParams = useSearchParams();
   const tierParam = searchParams.get('tier');

   // Find the tier name based on the param for a more descriptive title
   const selectedTier = serviceTiers.find(t => t.id === tierParam);
   const contactTitle = selectedTier ? `Inquiry about ${selectedTier.name}` : "Get In Touch";
   const contactDescription = selectedTier
    ? `Interested in our ${selectedTier.name} plan? Fill out the form below or use another contact method.`
    : "Have questions or ready to start automating? Reach out to us!";


  return (
    <>
      <PageHeader
        title={contactTitle}
        description={contactDescription}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 md:order-1">
             <Card className="shadow-lg border border-border">
                 <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <MessageSquare className="h-6 w-6 text-primary"/> Send us a Message
                    </CardTitle>
                 </CardHeader>
                 <CardContent>
                     <ContactForm defaultTier={tierParam || undefined} />
                 </CardContent>
             </Card>
          </div>

          {/* Contact Details & Booking */}
          <div className="order-1 space-y-8 md:order-2">
            <Card className="shadow-md border border-border">
               <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-primary"/> Book a Discovery Call
                    </CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                        Schedule a free, no-obligation call to discuss your automation needs and see how Cobi Automation can help.
                    </p>
                     <Button asChild size="lg" className="w-full">
                        <Link href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                            Book Your Call Now
                        </Link>
                    </Button>
               </CardContent>
            </Card>

            <Card className="shadow-md border border-border">
                 <CardHeader>
                     <CardTitle className="text-2xl flex items-center gap-2">
                         <Building className="h-6 w-6 text-primary"/> Other Contact Methods
                     </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground hover:text-primary transition-colors">
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                     {CONTACT_PHONE && (
                         <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-primary" />
                            <a href={`tel:${CONTACT_PHONE.replace(/\D/g,'')}`} className="text-foreground hover:text-primary transition-colors">
                            {CONTACT_PHONE}
                            </a>
                        </div>
                     )}
                     {/* Optional: WhatsApp/SMS Link */}
                    {/* <div className="flex items-center gap-3">
                        <Bot className="h-5 w-5 text-primary" />
                        <a href="YOUR_WHATSAPP_LINK" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                            Message us on WhatsApp
                        </a>
                    </div> */}
                 </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
