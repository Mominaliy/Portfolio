import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'aside';
}

/**
 * Container component for consistent max-width and padding
 * Centers content and provides responsive horizontal padding
 */
export function Container({
  children,
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
}
