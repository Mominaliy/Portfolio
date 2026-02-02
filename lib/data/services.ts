export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string; // Icon name from react-icons
  features?: string[];
}

export const services: Service[] = [
  {
    id: 'saas-development',
    name: 'SaaS Development',
    description: 'Full-stack web applications built with modern frameworks. Scalable architectures designed for growth.',
    icon: 'HiRocketLaunch',
    features: ['Next.js & React', 'TypeScript', 'API Development', 'Database Design'],
  },
  {
    id: 'ai-integration',
    name: 'AI Software & Integrations',
    description: 'Integrate AI capabilities into your products. From chatbots to machine learning models.',
    icon: 'HiCpuChip',
    features: ['OpenAI Integration', 'Custom AI Models', 'Natural Language Processing', 'Automation'],
  },
  {
    id: 'automation',
    name: 'Automation Platforms',
    description: 'Streamline your business processes with custom automation solutions that save time and reduce errors.',
    icon: 'HiBolt',
    features: ['Workflow Automation', 'API Integrations', 'Data Processing', 'Task Scheduling'],
  },
  {
    id: 'mvp-development',
    name: 'Startup MVPs',
    description: 'Rapid prototyping and MVP development to validate your ideas and get to market fast.',
    icon: 'HiLightBulb',
    features: ['Fast Turnaround', 'Lean Development', 'Market Validation', 'Scalable Foundation'],
  },
  {
    id: 'custom-web-apps',
    name: 'Custom Web Applications',
    description: 'Tailored web solutions that solve your specific business challenges and requirements.',
    icon: 'HiCommandLine',
    features: ['Custom Features', 'Third-party Integration', 'Responsive Design', 'Performance Optimization'],
  },
  {
    id: 'consulting',
    name: 'Technical Consulting',
    description: 'Strategic technical guidance to help you make the right technology decisions for your business.',
    icon: 'HiChartBar',
    features: ['Tech Stack Selection', 'Architecture Review', 'Code Review', 'Best Practices'],
  },
];
