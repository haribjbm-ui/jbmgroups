import { motion } from "framer-motion";
import {
  User,
  CreditCard,
  Briefcase,
  Building,
  Home,
  HardHat,
  Car,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: User,
    title: "Personal Loans",
    description: "Quick, collateral-free personal loans for weddings, education, medical needs, travel, or any personal aspiration.",
    features: ["Loans up to ₹1 Crore", "Tenure up to 84 months", "Disbursal in 1–3 days"],
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Premium credit cards from top issuing banks with rewards, cashback, lounge access, and EMI flexibility.",
    features: ["Lifetime free options", "Up to 5% cashback", "Instant approvals"],
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your enterprise with working capital, equipment financing, and business expansion loans up to ₹2 Cr.",
    features: ["Loans up to ₹2 Crore", "Flexible repayment", "Quick disbursal"],
  },
  {
    icon: Building,
    title: "Loan Against Property",
    description: "Unlock the value of your residential or commercial property with high-value LAP at attractive interest rates.",
    features: ["Up to 70% of property value", "Tenure up to 20 years", "Lower interest rates"],
  },
  {
    icon: Home,
    title: "Housing Loan",
    description: "Make your dream home a reality with home loans featuring competitive interest rates and long tenures.",
    features: ["Loans up to ₹10 Crore", "Tenure up to 30 years", "Tax benefits under 80C & 24(b)"],
  },
  {
    icon: HardHat,
    title: "Construction Loan",
    description: "Build your home from the ground up with construction-linked disbursal and stage-wise funding solutions.",
    features: ["Plot + construction funding", "Stage-wise disbursal", "Customized EMI plans"],
  },
  {
    icon: Car,
    title: "Auto Loan",
    description: "Drive home your dream vehicle with new car, used car, and two-wheeler loans at the lowest rates.",
    features: ["Up to 100% on-road funding", "Tenure up to 7 years", "New & pre-owned vehicles"],
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    description: "Comprehensive insurance solutions — life, health, vehicle, and general insurance from trusted insurers.",
    features: ["Life & term plans", "Health & critical illness", "Motor & general insurance"],
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Our Services" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Comprehensive Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
          >
            Every financial need, expertly handled.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-muted-foreground"
          >
            From personal aspirations to business growth, we offer a complete range of loan and credit card services backed by India's most trusted banks.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-secondary">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-2 border-t border-primary/10 pt-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-foreground/80">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link"
                >
                  Know More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
