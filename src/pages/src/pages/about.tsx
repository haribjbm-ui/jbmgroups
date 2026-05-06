import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Users,
  TrendingUp,
  Target,
  Eye,
  Heart,
  ShieldCheck,
} from "lucide-react";
import PageBanner from "@/components/layout/page-banner";
import CTAStrip from "@/components/layout/cta-strip";
import { useSEO } from "@/hooks/use-seo";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: TrendingUp, value: "₹500 Cr+", label: "Loans Disbursed" },
  { icon: Building2, value: "12+", label: "Banking Partners" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
];

const values = [
  { icon: ShieldCheck, title: "Integrity First", desc: "Every recommendation is in your best interest. No mis-selling, no hidden charges, no compromises on ethics." },
  { icon: Heart, title: "Customer Centricity", desc: "We listen first, advise second, and act only when you are completely informed and comfortable with the decision." },
  { icon: Target, title: "Result Driven", desc: "We measure success by your sanctioned loans and your savings on interest — not by sales targets." },
  { icon: Eye, title: "Total Transparency", desc: "Every fee, every clause, every condition is explained in plain language before you sign anything." },
  { icon: Building2, title: "We Bridge Banks & Customers", desc: "We sit at the intersection of 12+ leading banks and thousands of customers — negotiating on your behalf, so the best offer always finds you." },
];

export default function About() {
  useSEO({
    title: "About JBM Groups | Bengaluru's Trusted Loan Advisory Firm",
    description: "Learn about JBM Groups — a Bengaluru-based group of companies dedicated to multi-bank loan advisory. Our mission is to bring Prosperity & Strength to every customer's financial journey.",
    keywords: "about JBM Groups, loan advisory company Bengaluru, financial advisory Karnataka, mission vision JBM",
    path: "/about",
  });

  return (
    <div className="page-enter">
      <PageBanner
        eyebrow="About Us"
        breadcrumb="About"
        title="Built on trust."
        highlight="Driven by results."
        subtitle="JBM Groups is more than a loan advisory firm — we're a Bengaluru-rooted group of companies committed to bringing prosperity and strength to every customer's financial journey."
      />

      {/* Story */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Our Story
              </div>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                A Bengaluru institution built on <span className="italic text-primary">word-of-mouth.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                JBM Groups was founded with one simple belief: every Indian deserves access to fair, transparent financial advice — without the runaround. Over the years we have grown from a single office in Moodalpalya to a multi-bank advisory practice serving thousands of customers across Karnataka.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Today our team works directly with India's leading banks and NBFCs to bring you the most competitive interest rates, transparent terms, and a streamlined process. Most of our customers come through referrals from people we've helped before — and that's the recognition we treasure most.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Transparent Process", "Customer First", "We Bridge Banks & Customers", "Multi-Bank Tie-ups", "Doorstep Service", "RBI Compliant"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 p-7 shadow-sm hover:shadow-lg transition-shadow ${
                    i % 2 === 0 ? "lg:translate-y-6" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/30">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="mt-5 font-serif text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white border border-primary/10 p-9 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="mt-5 font-serif text-2xl md:text-3xl font-bold text-secondary">Our Mission</h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  To democratize access to fair financial advice in India by being the most trusted bridge between everyday Indians and the country's leading banks — through transparency, expertise, and genuine care.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl bg-secondary text-white p-9 shadow-lg relative overflow-hidden"
            >
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-secondary shadow-lg">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="mt-5 font-serif text-2xl md:text-3xl font-bold text-white">Our Vision</h3>
                <p className="mt-4 text-base text-white/80 leading-relaxed">
                  To be Karnataka's most respected loan advisory group — known for ethical practice, quick disbursals, and the strength of relationships that span generations of customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Our Values
            </div>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              The principles that guide every <span className="italic text-primary">conversation.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-primary/10 bg-gradient-to-b from-white to-muted/20 p-7 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/15">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-secondary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Want to know more about us?"
        subtext="Drop by our Moodalpalya office or call us — we love meeting new customers face-to-face."
      />
    </div>
  );
}
