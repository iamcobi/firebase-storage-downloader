import type { LucideIcon } from 'lucide-react';
import { Bot, Code, Rocket, BrainCircuit, LineChart, Wrench, Zap } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
];

export const footerLinks: NavLink[] = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'What is AI automation?',
    answer:
      'AI automation uses artificial intelligence technologies to streamline and optimize business processes, reducing manual effort and improving efficiency. This can range from automating repetitive tasks to implementing complex predictive models.',
  },
  {
    question: 'How long does it take to implement an automation solution?',
    answer:
      'The timeline varies depending on the complexity of the project. Our AI Sprint Starter takes about 1 week. AI Power Plug implementations typically take 4-8 weeks, including onboarding and review. Custom Builds depend heavily on the scope and are estimated after the initial consultation.',
  },
  {
    question: 'Do I need to be technical to use your services?',
    answer:
      'Not at all! Our services are designed for businesses of all technical levels. We handle the complex technical aspects, providing you with easy-to-use solutions and clear explanations. Our white-glove onboarding ensures you\'re comfortable with the implemented automations.',
  },
  {
    question: 'What’s the refund policy?',
    answer:
      'Due to the custom nature of our work and the resources allocated upon project initiation, we generally do not offer refunds once development has begun. However, we are committed to client satisfaction and will work closely with you to address any concerns. Specific terms are outlined in the service agreement.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Absolutely. Data security and privacy are paramount. We adhere to strict data protection protocols and industry best practices. Access to your data is limited and used solely for the purpose of developing and maintaining your automation solutions. More details can be found in our Privacy Policy.',
  },
];

export type ServiceTier = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  icon?: LucideIcon;
  highlight?: boolean; // Optional flag for highlighting a tier
};

export const serviceTiers: ServiceTier[] = [
 {
    id: 'sprint',
    name: 'AI Sprint Starter',
    price: '$699+',
    description: 'Get started quickly with essential automations for streamlined workflows.',
    features: [
      'Basic automation setup',
      'Automated form generation',
      'Chatbot-free process flows',
      '1-week build time',
    ],
    cta: 'Get Started',
    href: '/contact?tier=sprint',
    icon: Rocket,
  },
  {
    id: 'power',
    name: 'AI Power Plug',
    price: '$10,000',
    description: 'Comprehensive AI integration for significant efficiency gains and data insights.',
    features: [
      'Automated content creation',
      'AI-powered workflow optimization',
      'Predictive modeling basics',
      'Custom AI integrations',
      'White-glove onboarding',
      'Priority support',
      'Dedicated automation manager',
      '2-month performance review',
    ],
    cta: 'Book Discovery Call',
    href: '/contact?tier=power',
    icon: Zap,
    highlight: true, // Highlight this popular tier
  },

  {
    id: 'custom',
    name: 'AI Custom Build',
    price: 'Get Quote',
    description: 'Fully tailored AI solutions built specifically for your unique business needs.',
    features: [
      'Fully customized AI processes',
      'Complex platform integrations',
      'Tailored business-specific automations',
      'Scalable architecture',
      'In-depth consultation & planning',
    ],
    cta: 'Request a Quote',
    href: '/contact?tier=custom',
    icon: Wrench,
  },
];

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const automationProcess: ProcessStep[] = [
  {
    step: 1,
    title: 'Confirmation & Kickoff',
    description: 'We confirm project details and schedule a kickoff call to align on goals, expectations, and timelines.',
  },
  {
    step: 2,
    title: 'Discovery & Planning',
    description: 'Deep dive into your requirements, existing systems, and potential blockers. We finalize the automation strategy.',
  },
  {
    step: 3,
    title: 'Development & Integration',
    description: 'Our team builds and integrates the custom AI automation solution based on the agreed plan.',
  },
  {
    step: 4,
    title: 'Phase Updates & Feedback',
    description: 'You\'re kept informed after each significant development phase, with opportunities for feedback.',
  },
  {
    step: 5,
    title: 'Testing & Deployment',
    description: 'The final workflow is rigorously tested with you live before full deployment into your operations.',
  },
  {
    step: 6,
    title: 'Onboarding & Review',
    description: 'Comprehensive onboarding and support, followed by performance reviews (included in specific tiers).'
  }
];

export const CALENDLY_BOOKING_URL = 'https://calendly.com/your-calendly-link'; // Replace with your actual Calendly link
export const CONTACT_EMAIL = 'contact@cobiautomation.com'; // Replace with your actual contact email
export const CONTACT_PHONE = '+1 (555) 123-4567'; // Optional: Replace with your actual phone number

export const HOME_HERO_HEADLINE = 'We Automate the Work You Hate.';
export const HOME_HERO_SUBHEADLINE =
  'Unlock efficiency and scale your business with custom AI automation solutions tailored to your needs.';
export const HOME_CTA_TEXT = 'Book a Discovery Call';

export const ABOUT_US_TITLE = "Pioneering Accessible AI Automation";
export const ABOUT_US_STORY = "Cobi Automation was founded by a young, self-made entrepreneur with a vision: to demystify artificial intelligence and make its powerful capabilities accessible to businesses of all sizes. We saw complex, expensive automation tools gatekept from those who could benefit most. Our mission is to break down those barriers, delivering high-impact, tailored AI solutions that drive real results without the enterprise price tag or technical jargon. We believe in empowering businesses to focus on growth and innovation by automating the mundane.";
export const ABOUT_US_WHY = "We exist to bridge the gap between cutting-edge AI technology and practical business application, making powerful automation tools accessible and impactful for everyone.";
