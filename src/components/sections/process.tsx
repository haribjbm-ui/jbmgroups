import { motion } from "framer-motion";
import { MessageSquare, FileText, Search, CheckCircle2, Wallet } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    description: "Share your needs over a call or in-person. We understand your financial goals and recommend the right product.",
  },
  {
    icon: FileText,
    title: "Document Collection",
    description: "Our team helps gather required documents — we make the paperwork effortless with our doorstep service.",
  },
  {
    icon: Search,
    title: "Bank Matching",
    description: "We match your profile with the most suitable banking partners offering the best terms and lowest interest.",
  },
  {
    icon: CheckCircle2,
    title: "Quick Approval",
    description: "Direct relationships with bank credit teams mean faster verification and quicker sanction letters.",
  },
  {
    icon: Wallet,
    title: "Disbursal",
    description: "Funds credited directly to your account. Onboarding complete with full transparency on every charge.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-label="Our Loan Process"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-muted/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
          >
            Five simple steps to your <span className="text-primary">loan disbursal</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-muted-foreground"
          >
            Transparent, structured, and stress-free — our process is designed around your convenience.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-5">
                  <div className="absolute inset-0 -m-2 rounded-full bg-primary/10 blur-xl" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/30">
                    <step.icon className="w-9 h-9" />
                  </div>
                  <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-secondary shadow-md">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-secondary">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
