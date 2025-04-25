import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react'; // Assuming you might want star ratings

// Placeholder Testimonial Data (Replace with real data later)
const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    title: 'CEO, Tech Startup',
    quote: 'Cobi Automation transformed our workflow. We\'re saving 20+ hours a week on tasks that used to drain our resources. Highly recommend!',
    avatar: 'https://picsum.photos/seed/janedoe/100/100', // Placeholder
    rating: 5,
  },
  {
    id: 2,
    name: 'John Smith',
    title: 'Marketing Manager, Agency',
    quote: 'The custom AI integration for our reporting has been a game-changer. The insights we get now are invaluable, and the process was seamless.',
    avatar: 'https://picsum.photos/seed/johnsmith/100/100', // Placeholder
    rating: 5,
  },
   {
    id: 3,
    name: 'Alex Chen',
    title: 'Operations Lead, E-commerce',
    quote: 'We started with the Sprint Starter and immediately saw value. The team was responsive and delivered exactly what we needed, quickly.',
    avatar: 'https://picsum.photos/seed/alexchen/100/100', // Placeholder
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden rounded-lg shadow-sm">
              <CardContent className="p-6">
                 {/* Optional Star Rating */}
                 {testimonial.rating && (
                    <div className="mb-3 flex">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                        {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star key={`empty-${i}`} className="h-5 w-5 text-muted-foreground/50" />
                        ))}
                    </div>
                 )}
                <blockquote className="mb-4 border-l-4 border-primary pl-4 text-lg italic text-foreground/90">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
         {/* Optional: Link to Case Studies page if you create one */}
         {/* <div className="mt-12 text-center">
             <Button variant="outline">View Case Studies</Button>
         </div> */}
      </div>
    </section>
  );
}
