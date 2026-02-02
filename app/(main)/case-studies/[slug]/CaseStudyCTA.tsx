'use client';

import { Sparkles } from 'lucide-react';
import { HiArrowRight } from 'react-icons/hi2';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function CaseStudyCTA() {
  return (
    <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent-glow/10 border-accent/20 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 mb-4">
          <Sparkles className="h-6 w-6 text-accent" />
        </div>

        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Need a similar solution?
        </h3>
        <p className="text-sm text-text-muted mb-4">
          Let's discuss how I can help bring your project to life with the same level of quality and attention to detail.
        </p>

        <Button
          variant="primary"
          size="md"
          className="w-full"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          Start Your Project
          <HiArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
