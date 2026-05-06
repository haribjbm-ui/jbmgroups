import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  CreditCard,
  Briefcase,
  Building,
  Home as HomeIcon,
  HardHat,
  Car,
  ShieldCheck,
  HandshakeIcon,
  Landmark,
  Percent,
  Star,
  Quote,
} from "lucide-react";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import EmiCalculator from "@/components/sections/emi-calculator";
import CTAStrip from "@/components/layout/cta-strip";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";

const servicePreviews = [
  { icon: User, title: "Personal Loans", desc: "Collateral-free funding for life's important moments." },
  { icon: HomeIcon, title: "Home Loans", desc: "Up to ₹10 Cr at competitive rates over 30 years." },
  { icon: Briefcase, title: "Business Loans", desc: "Working capital and expansion funding up to ₹2 Cr." },
  { icon: Building, title: "Loan Against Property", desc: "Unlock up to 70% of your property's value." },
  { icon: CreditCard, title: "Credit Cards", desc: "Premium cards with rewards, cashback & lounge access." },
  { icon: HardHat, title: "Construction Loan", desc: "Stage-wise disbursal for plot + construction." },
  { icon: Car, title: "Auto Loan", desc: "Up to 100% on-road for new and pre-owned vehicles." },
  { icon: ShieldCheck, title: "Insurance", desc: "Life, health, motor and general insurance plans." },
];

const reasons = [
  { icon: HandshakeIcon, title: "Trusted Advisors", desc: "Years of experience and thousands of satisfied customers across Bengaluru." },
  { icon: Landmark, title: "12+ Bank Tie-ups", desc: "Direct relationships with India's leading banks and NBFCs." },
  { icon: Percent, title: "Best Interest Rates", desc: "We negotiate aggressively to secure the most competitive offers." },
];

const featuredTestimonials = [
  { name: "Rajesh Kumar G.", role: "Home Loan Customer", text: "JBM Groups made my home loan journey absolutely seamless. The entire process took just two weeks." },
  { name: "Priya Sharma", role: "Personal Loan Customer", text: "Came to my house, handled everything, loan disbursed in 4 days. Truly grateful for their service." },
  { name: "Mohammed Arif", role: "Business Loan Customer", text: "Got ₹35 lakhs sanctioned within 10 days through ICICI Bank. Highly recommended for business owners." },
];

export default function Home() {
  useSEO({
    title: "Loan Advisory in Bengaluru | Personal, Home & Business Loans",
    description: "JBM Groups is Bengaluru's trusted multi-bank loan advisory firm. Get Personal, Home, Business, LAP, Auto loans, Credit Cards & Insurance from India's top banks. Free consultation. Call +91 72045 39666.",
    keywords: "loan advisory Bengaluru, personal loan, home loan, business loan, credit card, JBM Groups, Moodalpalya",
    path: "/",
  });

  return (
    <div className="page-enter">
      <Hero />

      {/* Services preview */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                What We Offer
              </div>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Eight financial solutions, <span className="italic text-primary">one trusted partner.</span>
              </h2>
            </div>
            <Link href="/services">
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white gap-2 shrink-0">
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicePreviews.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Link href="/services">
                  <div className="group h-full rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 cursor-pointer">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-md shadow-primary/30 transition-transform group-hover:scale-110">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-bold text-secondary">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary">
                      Learn more <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us preview */}
      <section className="py-20 md:py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Why Choose JBM Groups
              </div>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Trusted by Bengaluru. <br />
                <span className="italic text-accent">Built on integrity.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
                We don't just process loans — we build lasting relationships founded on transparency, fair pricing, and tangible results.
              </p>
              <Link href="/why-choose-us">
                <Button className="mt-8 bg-accent hover:bg-accent/90 text-secondary font-bold gap-2">
                  Six reasons to choose us <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-secondary shadow-lg">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EmiCalculator />

      <Partners />

      {/* Testimonials preview */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Customer Stories
              </div>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Real results from <span className="italic text-primary">real customers.</span>
              </h2>
            </div>
            <Link href="/testimonials">
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white gap-2 shrink-0">
                Read all reviews <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-primary/10 bg-white p-7 shadow-sm hover:shadow-lg transition-shadow"
              >
                <Quote className="absolute right-5 top-5 h-10 w-10 text-primary/10" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-primary/10">
                  <div className="font-serif text-base font-bold text-secondary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
