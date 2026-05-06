import { motion } from "framer-motion";
import {
  HandshakeIcon,
  Landmark,
  Percent,
  MapPin,
  FileCheck,
  Clock,
} from "lucide-react";

const reasons = [
  {
    icon: HandshakeIcon,
    title: "Trusted Advisors",
    description: "Years of experience, thousands of satisfied customers, and an unblemished record of integrity in every transaction.",
  },
  {
    icon: Landmark,
    title: "Multiple Bank Tie-ups",
    description: "Direct relationships with 12+ leading banks and NBFCs — ensuring you always get the best matched offer.",
  },
  {
    icon: Percent,
    title: "Lowest Interest Rates",
    description: "We negotiate aggressively with our partner banks to secure the most competitive rates exclusively for you.",
  },
  {
    icon: MapPin,
    title: "Doorstep Service",
    description: "From documentation to disbursal, our team comes to your home or office. Convenience is our promise.",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description: "No hidden charges, no surprise fees. Every step explained, every document accounted for. Always.",
  },
  {
    icon: Clock,
    title: "Quick Disbursal",
    description: "Streamlined paperwork and direct bank channels mean your loan gets approved and disbursed in record time.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-label="Why Choose JBM Groups"
      className="relative py-20 md:py-28 bg-secondary text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,.15),transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Six reasons we are <span className="text-accent">Bengaluru's</span> first choice.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-white/80"
          >
            We don't just process loans — we build lasting relationships founded on trust, transparency, and tangible results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-accent/40 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-secondary shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-white">{reason.title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
