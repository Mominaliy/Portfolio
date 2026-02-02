'use client';

import { motion } from 'framer-motion';
import { Zap, Code2, MessageSquare, TrendingUp, Shield, Rocket } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { fadeInUp } from '@/lib/utils/animations';

const benefits = [
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Quick turnaround times without sacrificing quality. Get your product to market faster.',
  },
  {
    icon: Code2,
    title: 'Modern Tech Stack',
    description: 'Built with the latest technologies: Next.js, React, TypeScript, and AI integrations.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Regular updates and transparent communication throughout the entire development process.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description: 'Solutions designed to grow with your business, not hold it back.',
  },
  {
    icon: Shield,
    title: 'Quality Focused',
    description: 'Clean, maintainable code with best practices and thorough testing.',
  },
  {
    icon: Rocket,
    title: 'Business-First Thinking',
    description: 'Solutions aligned with your business goals, not just technical requirements.',
  },
];

/**
 * Why Work With Momin Section
 * Highlights key benefits and value propositions
 */
export function WhyWorkSection() {
  return (
    <section className="py-20 bg-card/30" id="why-work">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Why Work With Me
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              I combine technical expertise with business thinking to deliver products that actually work for your company.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-start p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerChildren>

        <FadeIn delay={0.6}>
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Build Your Product
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
