'use client';

import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { ContactForm } from '@/components/forms/ContactForm';
import { CalendlyEmbed } from '@/components/forms/CalendlyEmbed';

/**
 * Contact Section
 * Contact form and Calendly scheduling in 2-column layout
 */
export function ContactSection() {
  return (
    <section className="py-20 bg-background" id="contact">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Ready to start your project? Reach out via the form or schedule a call to discuss your needs.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Calendly */}
          <FadeIn delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Schedule a Call
              </h3>
              <div className="rounded-xl bg-card border border-border overflow-hidden">
                <CalendlyEmbed />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
