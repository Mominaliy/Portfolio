'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight, defaultViewport } from '@/lib/utils/animations';

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number;
  };
}

/**
 * SlideIn animation wrapper component
 * Slides content in from the specified direction
 */
export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  className,
  viewport = defaultViewport,
}: SlideInProps) {
  const variant = direction === 'left' ? slideInLeft : slideInRight;

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
