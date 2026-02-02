'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  glowEffect?: boolean;
  onClick?: () => void;
}

/**
 * Card component with optional hover effects and glow
 * Used for services, portfolio items, and content sections
 */
export function Card({
  children,
  className,
  hoverable = false,
  glowEffect = false,
  onClick
}: CardProps) {
  const baseStyles = 'rounded-xl bg-card border border-border p-6 shadow-md';

  if (!hoverable) {
    return (
      <div className={cn(baseStyles, className)} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        baseStyles,
        'cursor-pointer transition-shadow',
        glowEffect && 'hover:shadow-accent/20',
        className
      )}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
