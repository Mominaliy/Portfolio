'use client';

import { motion } from 'framer-motion';
import * as HiIcons from 'react-icons/hi2';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { fadeInUp } from '@/lib/utils/animations';
import { services } from '@/lib/data/services';

/**
 * Services Section
 * Displays all services in a grid with hover effects
 */
export function ServicesSection() {
  return (
    <section className="py-20 bg-card/30 relative overflow-hidden" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Services
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              From concept to deployment, I provide end-to-end solutions tailored to your business needs.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = (HiIcons as any)[service.icon];

            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card hoverable glowEffect className="h-full relative overflow-hidden group">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-glow/20 mb-4 group-hover:scale-110 transition-transform">
                      {IconComponent && <IconComponent className="h-7 w-7 text-accent" />}
                    </div>

                    {/* Service Name */}
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-text-muted mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && (
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li
                            key={index}
                            className="text-sm text-text-muted flex items-start"
                          >
                            <span className="text-accent mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
