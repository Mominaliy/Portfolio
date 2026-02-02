'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HiClock, HiRocketLaunch, HiLink, HiArrowTrendingUp } from 'react-icons/hi2';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { fadeInUp } from '@/lib/utils/animations';

const problems = [
  {
    problem: 'Manual processes eating up valuable time',
    solution: 'Smart automation that handles repetitive tasks instantly',
    Icon: HiClock,
  },
  {
    problem: 'Product launches taking months instead of weeks',
    solution: 'Rapid prototyping and MVP development to validate fast',
    Icon: HiRocketLaunch,
  },
  {
    problem: 'Disconnected tools and poor workflow efficiency',
    solution: 'Seamless integrations that unify your tech stack',
    Icon: HiLink,
  },
  {
    problem: 'Scaling challenges with outdated architecture',
    solution: 'Modern, scalable solutions built for growth',
    Icon: HiArrowTrendingUp,
  },
];

/**
 * Problems → Solutions Section
 * Shows pain points and how Momin's services solve them
 */
export function ProblemsSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="problems">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent-glow/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Turning Business Challenges Into Solutions
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              I understand the pain points growing companies face. Here's how I help solve them.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full group relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-glow/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col h-full relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 mb-4">
                    <item.Icon className="h-6 w-6 text-red-500" />
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Problem
                    </h3>
                    <p className="text-text-muted">{item.problem}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center my-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      <ArrowRight className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">
                      Solution
                    </h3>
                    <p className="text-text-primary font-medium">{item.solution}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
