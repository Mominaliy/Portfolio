'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { fadeInUp } from '@/lib/utils/animations';

/**
 * Hero Section - First impression with headline and CTAs
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-glow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/50 to-background" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center py-20 relative">
          {/* Decorative lines */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-accent/50" />

          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent font-medium">Available for new projects</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Hi, I'm Momin — I Build{' '}
              <span className="relative inline-block">
                <span className="text-accent relative z-10">SaaS & AI Products</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent/20 blur-sm" />
              </span>
              <br />
              That Automate Businesses and Scale Fast
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-text-muted max-w-3xl mb-10">
              Custom software, AI integrations, and automation platforms for startups and growing companies.
            </p>
          </FadeIn>

          <StaggerChildren staggerDelay={0.1} delayChildren={0.5}>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
              </Button>
            </motion.div>
          </StaggerChildren>

          {/* Scroll Indicator */}
          <FadeIn delay={0.8}>
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-xs text-text-muted uppercase tracking-wider">Scroll</span>
              <ArrowDown className="h-5 w-5 text-text-muted" />
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
