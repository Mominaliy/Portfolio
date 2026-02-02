'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { fadeInUp } from '@/lib/utils/animations';
import { caseStudies } from '@/lib/data/case-studies';

/**
 * Portfolio Section
 * Displays case study cards with links to detailed pages
 */
export function PortfolioSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="portfolio">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Real products built for real businesses. Here's a selection of my recent work.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <motion.div key={project.slug} variants={fadeInUp}>
              <Link href={`/case-studies/${project.slug}`}>
                <Card hoverable glowEffect className="h-full overflow-hidden group relative">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-glow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                  {/* Project Image Placeholder */}
                  <div className="relative w-full h-56 bg-gradient-to-br from-accent/20 via-accent/10 to-accent-glow/20 rounded-lg mb-6 overflow-hidden">
                    {/* Pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                      }}
                    />

                    {/* Letter or number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
                        {project.title.charAt(0)}
                      </span>
                    </div>

                    {/* Hover overlay with number */}
                    <div className="absolute top-4 right-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-accent font-bold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <ExternalLink className="h-4 w-4 text-accent" />
                      </div>
                    </div>

                    <p className="text-text-muted leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium bg-card text-text-muted rounded-full border border-border">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Category & Year */}
                    <div className="flex items-center gap-3 text-sm text-text-muted pt-2 border-t border-border">
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {project.category}
                      </span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
