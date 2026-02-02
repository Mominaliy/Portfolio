'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import type { CaseStudy } from '@/types/case-study';

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-card via-background to-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Back Button */}
        <FadeIn>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-text-muted hover:text-accent hover:border-accent transition-all group mb-12"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Project Info */}
          <div>
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                <Sparkles className="h-3 w-3" />
                <span>{caseStudy.category}</span>
                <span>•</span>
                <span>{caseStudy.year}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
                {caseStudy.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl text-text-muted mb-8 leading-relaxed">
                {caseStudy.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a href={caseStudy.url} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Site
                </Button>
              </a>
            </FadeIn>
          </div>

          {/* Right: Project Visual */}
          <FadeIn delay={0.5}>
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-accent/20 via-accent/10 to-accent-glow/20 rounded-2xl overflow-hidden group">
                {/* Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1.5px, transparent 0)`,
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* Letter */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-bold text-accent/30 group-hover:scale-110 transition-transform">
                    {caseStudy.title.charAt(0)}
                  </span>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>

              {/* Floating tech badges */}
              <div className="absolute -bottom-4 -right-4 flex flex-wrap gap-2 max-w-xs">
                {caseStudy.techStack.slice(0, 3).map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="px-3 py-1.5 bg-background border border-accent/20 rounded-lg text-sm font-medium text-accent shadow-lg"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
