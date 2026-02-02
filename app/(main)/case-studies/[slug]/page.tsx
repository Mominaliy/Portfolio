import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Check, Sparkles, Target, Lightbulb, TrendingUp, ExternalLink } from 'lucide-react';
import { HiArrowRight } from 'react-icons/hi2';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerList } from '@/components/animations/StaggerList';
import { getCaseStudyBySlug, getAllCaseSlugs, caseStudies } from '@/lib/data/case-studies';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyCTA } from './CaseStudyCTA';

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Generate static params for all case studies
 */
export function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({
    slug,
  }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} - Case Study`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} - Case Study`,
      description: caseStudy.description,
      type: 'article',
    },
  };
}

/**
 * Enhanced Case Study Detail Page
 */
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <CaseStudyHero caseStudy={caseStudy} />

      {/* Content Sections */}
      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <FadeIn>
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-text-primary">Overview</h2>
                </div>
                <p className="text-text-muted leading-relaxed text-lg">
                  {caseStudy.overview}
                </p>
              </Card>
            </FadeIn>

            {/* Challenge */}
            <FadeIn delay={0.2}>
              <Card className="p-8 border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                    <Target className="h-5 w-5 text-red-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-text-primary">The Challenge</h2>
                </div>
                <p className="text-text-muted leading-relaxed text-lg">
                  {caseStudy.challenge}
                </p>
              </Card>
            </FadeIn>

            {/* Solution */}
            <FadeIn delay={0.3}>
              <Card className="p-8 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                    <Lightbulb className="h-5 w-5 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-text-primary">The Solution</h2>
                </div>
                <p className="text-text-muted leading-relaxed text-lg mb-8">
                  {caseStudy.solution}
                </p>

                {/* Features Grid */}
                {caseStudy.features && caseStudy.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      Key Features
                    </h3>
                    <StaggerList
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      items={caseStudy.features.map((feature) => (
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-text-muted">{feature}</span>
                        </div>
                      ))}
                    />
                  </div>
                )}
              </Card>
            </FadeIn>

            {/* Results */}
            {caseStudy.results && caseStudy.results.length > 0 && (
              <FadeIn delay={0.4}>
                <Card className="p-8 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-text-primary">Results & Impact</h2>
                  </div>
                  <StaggerList
                    className="space-y-4"
                    items={caseStudy.results.map((result) => (
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-text-primary font-medium">{result}</span>
                      </div>
                    ))}
                  />
                </Card>
              </FadeIn>
            )}

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <FadeIn delay={0.5}>
                <Card className="p-8 bg-gradient-to-br from-accent/10 via-card to-accent-glow/10 border-accent/20 relative overflow-hidden">
                  {/* Quote mark decoration */}
                  <div className="absolute top-4 right-4 text-accent/10 text-9xl font-serif leading-none">
                    "
                  </div>

                  <div className="relative">
                    <blockquote className="text-xl text-text-primary mb-6 leading-relaxed italic">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-lg">
                        {caseStudy.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">
                          {caseStudy.testimonial.author}
                        </p>
                        <p className="text-sm text-text-muted">
                          {caseStudy.testimonial.role}
                          {caseStudy.testimonial.company && ` at ${caseStudy.testimonial.company}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Tech Stack */}
              <FadeIn delay={0.2}>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <div className="h-1 w-8 bg-gradient-to-r from-accent to-accent-glow rounded-full" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium bg-accent/10 text-accent rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              {/* CTA Card */}
              <FadeIn delay={0.3}>
                <CaseStudyCTA />
              </FadeIn>

              {/* Project URL */}
              <FadeIn delay={0.4}>
                <a
                  href={caseStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-4 hover:border-accent/50 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-text-muted mb-1">Live Website</p>
                        <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                          {caseStudy.url.replace('https://', '')}
                        </p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-text-muted group-hover:text-accent transition-colors" />
                    </div>
                  </Card>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>

      {/* Next Project */}
      <section className="py-20 bg-card/30 border-t border-border">
        <Container>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-accent/5 to-accent-glow/5 border border-accent/10">
              <div>
                <p className="text-sm text-text-muted mb-2">Next Project</p>
                <h3 className="text-3xl font-bold text-text-primary mb-2">
                  {nextCaseStudy.title}
                </h3>
                <p className="text-text-muted">
                  {nextCaseStudy.description}
                </p>
              </div>

              <Link href={`/case-studies/${nextCaseStudy.slug}`}>
                <Button variant="outline" size="lg" className="group">
                  View Project
                  <HiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
