'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, defaultViewport } from '@/lib/utils/animations';

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number;
  };
}

/**
 * StaggerChildren animation wrapper
 * Animates children elements with a stagger effect
 * Children should use motion components with variants
 */
export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.1,
  className,
  viewport = defaultViewport,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      variants={staggerContainer}
      transition={{
        staggerChildren: staggerDelay,
        delayChildren,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
