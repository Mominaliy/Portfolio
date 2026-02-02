'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, defaultViewport } from '@/lib/utils/animations';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'none';
  className?: string;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number;
  };
}

/**
 * FadeIn animation wrapper component
 * Triggers animation when element enters viewport
 */
export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  viewport = defaultViewport,
}: FadeInProps) {
  const variant = direction === 'up' ? fadeInUp : fadeIn;

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      variants={{
        initial: variant.initial,
        animate: {
          ...variant.animate,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
