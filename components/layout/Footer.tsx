'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const socialLinks = [
  { icon: Github, href: 'https://github.com/momin', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/momin', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/momin', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@momin.dev', label: 'Email' },
];

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Footer component with social links and navigation
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Momin</h3>
              <p className="text-sm text-text-muted">
                Building high-performance SaaS products and AI integrations for modern businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border hover:bg-accent/10 hover:border-accent transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-text-muted hover:text-accent transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-6">
          <p className="text-center text-sm text-text-muted">
            © {currentYear} Momin. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
