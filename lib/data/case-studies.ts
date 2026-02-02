import { CaseStudy } from '@/types/case-study';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'reditlly',
    title: 'Reditlly',
    description: 'A modern, feature-rich Reddit client with enhanced UX and performance optimizations.',
    url: 'https://reditlly.com',
    image: '/images/case-studies/reditlly/hero.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Reddit API'],
    category: 'Web Application',
    year: 2024,
    overview: 'Reditlly reimagines the Reddit browsing experience with a clean, modern interface and powerful features. Built with performance and user experience as top priorities.',
    challenge: 'Reddit\'s official interface can be overwhelming and slow. Users needed a faster, cleaner way to browse content with better organization and customization options.',
    solution: 'Built a progressive web application using Next.js with server-side rendering for optimal performance. Implemented advanced filtering, custom themes, and keyboard shortcuts for power users.',
    features: [
      'Lightning-fast content loading with infinite scroll',
      'Custom subreddit management and organization',
      'Dark mode and customizable themes',
      'Advanced search and filtering',
      'Keyboard shortcuts for power users',
      'Responsive design for all devices',
    ],
    results: [
      'Sub-second page load times',
      'Positive feedback from Reddit power users',
      'Growing active user base',
    ],
  },
  {
    slug: 'quizbrisk',
    title: 'QuizBrisk',
    description: 'An interactive quiz platform for creating, sharing, and taking quizzes with real-time results.',
    url: 'https://quizbrisk.com',
    image: '/images/case-studies/quizbrisk/hero.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    category: 'SaaS Platform',
    year: 2024,
    overview: 'QuizBrisk is a comprehensive quiz platform that makes it easy for educators, trainers, and content creators to build engaging quizzes and assessments.',
    challenge: 'Creating engaging assessments is time-consuming, and existing platforms lack modern UX. Educators needed a tool that was both powerful and easy to use.',
    solution: 'Developed a full-stack SaaS platform with an intuitive quiz builder, real-time analytics, and seamless sharing capabilities. Integrated user authentication and payment processing for premium features.',
    features: [
      'Drag-and-drop quiz builder',
      'Multiple question types (multiple choice, true/false, short answer)',
      'Real-time results and analytics',
      'Shareable quiz links',
      'User accounts and quiz history',
      'Premium features with subscription model',
    ],
    results: [
      'Hundreds of quizzes created in first month',
      'High user engagement and completion rates',
      'Positive testimonials from educators',
    ],
  },
  {
    slug: 'sonik',
    title: 'Sonik.fm',
    description: 'A music streaming platform with AI-powered recommendations and social features.',
    url: 'https://sonik.fm',
    image: '/images/case-studies/sonik/hero.png',
    techStack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Spotify API', 'OpenAI'],
    category: 'Music Platform',
    year: 2024,
    overview: 'Sonik.fm combines music streaming with AI-powered discovery and social features, helping users find their next favorite track.',
    challenge: 'Music discovery is broken. Users struggle to find new music that matches their taste, and existing platforms rely on generic algorithmic recommendations.',
    solution: 'Built a platform that leverages AI to understand music preferences at a deeper level, combined with social features that let users share and discover music through their network.',
    features: [
      'AI-powered music recommendations',
      'Social playlists and sharing',
      'Integration with Spotify and Apple Music',
      'Personalized daily mixes',
      'Music mood analysis',
      'Friend activity feed',
    ],
    results: [
      'High user retention and daily active users',
      'Users discovering 3x more new music',
      'Growing community of music enthusiasts',
    ],
  },
  {
    slug: 'ship-ave',
    title: 'ShipAve',
    description: 'A shipping and logistics management platform for e-commerce businesses.',
    url: 'https://ship-ave.vercel.app',
    image: '/images/case-studies/ship-ave/hero.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    category: 'SaaS Platform',
    year: 2024,
    overview: 'ShipAve simplifies shipping for e-commerce businesses by aggregating multiple carriers and providing intelligent rate comparison.',
    challenge: 'E-commerce businesses waste time comparing shipping rates across carriers and managing different platforms. They needed a unified solution.',
    solution: 'Created a comprehensive platform that integrates with major shipping carriers, automatically finds the best rates, and streamlines the entire shipping workflow.',
    features: [
      'Multi-carrier integration (USPS, FedEx, UPS)',
      'Automated rate comparison',
      'Batch label printing',
      'Order tracking and notifications',
      'Analytics and reporting',
      'API for integration with e-commerce platforms',
    ],
    results: [
      'Average 25% savings on shipping costs',
      'Processing thousands of shipments monthly',
      'Positive ROI for customers within first month',
    ],
    testimonial: {
      quote: 'ShipAve has transformed how we handle shipping. The automatic rate comparison alone saves us hours every week.',
      author: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'GrowthCo',
    },
  },
];

// Helper functions
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseSlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
