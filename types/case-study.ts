export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  url: string;
  image: string;
  images?: string[]; // Additional images for detail page
  techStack: string[];
  category: string;
  year: number;

  // Detail page content
  overview: string;
  challenge: string;
  solution: string;
  results?: string[];
  features?: string[];
  testimonial?: Testimonial;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}
