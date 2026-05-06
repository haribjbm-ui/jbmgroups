import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface PageBannerProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageBanner({ eyebrow, title, highlight, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-gradient text-white pt-16 md:pt-20 pb-20 md:pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/65">
            <li>
              <Link href="/" className="inline-flex items-center gap-1.5 hover:text-accent transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <li className="text-accent font-semibold tracking-wide uppercase">{breadcrumb}</li>
          </ol>
        </nav>

        <div className="max-w-4xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-accent mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
            {title}
            {highlight && <> <span className="text-accent">{highlight}</span></>}
          </h1>
          {subtitle && (
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
