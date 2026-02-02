'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/data/site-config';

/**
 * Calendly Embed Component
 * Displays an inline Calendly booking widget
 */
export function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget"
      data-url={siteConfig.calendly}
      style={{
        minWidth: '320px',
        height: '700px',
      }}
    />
  );
}
