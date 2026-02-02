'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/utils/animations';
import { StaggerChildren } from './StaggerChildren';

interface StaggerListProps {
  items: React.ReactNode[];
  className?: string;
}

/**
 * Client component wrapper for animated lists with stagger effect
 */
export function StaggerList({ items, className }: StaggerListProps) {
  return (
    <StaggerChildren className={className}>
      {items.map((item, index) => (
        <motion.div key={index} variants={fadeInUp}>
          {item}
        </motion.div>
      ))}
    </StaggerChildren>
  );
}
