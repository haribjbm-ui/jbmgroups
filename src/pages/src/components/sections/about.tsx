import { motion } from "framer-motion";
import { Award, Building2, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: TrendingUp, value: "₹500 Cr+", label: "Loans Disbursed" },
  { icon: Building2, value: "12+", label: "Banking Partners" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
];

export default function About() {
  return (
    <section id="about" aria-label="About JBM Groups" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About JBM Groups
            </div>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
              A trusted name in <span className="text-primary">Bengaluru's</span> financial advisory landscape.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              JBM Groups stands as a pillar of trust and integrity in India's loan advisory sector. As a proud group of companies built on the values of <strong className="text-secondary">Prosperity & Strength</strong>, we have empowered thousands of individuals, families, and businesses across Karnataka to achieve their financial aspirations.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our team of seasoned financial advisors works directly with India's leading banks and NBFCs to bring you the most competitive interest rates, transparent terms, and a streamlined approval process. We believe in relationships, not transactions — and that's what makes us different.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Transparent Process", "Customer First", "Multi-Bank Tie-ups", "Doorstep Service"].map((tag) => (
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
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
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
  );
}
