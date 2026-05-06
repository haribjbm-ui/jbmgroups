import { motion } from "framer-motion";
import { Landmark } from "lucide-react";

const partners = [
  { name: "HDFC Bank", short: "HDFC", color: "from-blue-600 to-blue-800" },
  { name: "ICICI Bank", short: "ICICI", color: "from-orange-600 to-red-700" },
  { name: "Axis Bank", short: "AXIS", color: "from-rose-600 to-rose-800" },
  { name: "Kotak Mahindra Bank", short: "KOTAK", color: "from-red-700 to-red-900" },
  { name: "IndusInd Bank", short: "INDUSIND", color: "from-amber-700 to-rose-800" },
  { name: "IDFC FIRST Bank", short: "IDFC", color: "from-rose-700 to-rose-900" },
  { name: "Yes Bank", short: "YES", color: "from-blue-500 to-blue-700" },
  { name: "Bajaj Finserv", short: "BAJAJ", color: "from-blue-700 to-indigo-900" },
  { name: "RBL Bank", short: "RBL", color: "from-indigo-700 to-violet-900" },
  { name: "Axis Finance", short: "AXISF", color: "from-pink-600 to-rose-700" },
  { name: "Poonawala Fincorp", short: "POON", color: "from-teal-600 to-emerald-800" },
  { name: "InCredit", short: "INC", color: "from-cyan-600 to-blue-700" },
];

interface PartnersProps {
  variant?: "compact" | "full";
}

export default function Partners({ variant = "compact" }: PartnersProps) {
  return (
    <section
      id="partners"
      aria-label="Banking Partners"
      className="py-20 md:py-24 bg-white border-y border-primary/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Our Banking Partners
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
          >
            Backed by India's <span className="text-primary italic">most trusted</span> financial institutions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-muted-foreground"
          >
            We work directly with 12 leading banks and NBFCs across India to bring you the best loan products and credit cards.
          </motion.p>
        </div>

        {/* Seamless marquee — content duplicated, animation translates exactly -50% */}
        <div className="relative overflow-hidden marquee-pause">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className="flex w-max animate-marquee">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="group mx-3 flex min-w-[230px] flex-col items-center justify-center rounded-2xl border border-primary/10 bg-white px-6 py-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <span className="font-serif text-base font-bold">{p.short}</span>
                </div>
                <div className="mt-4 text-center font-serif text-base font-bold text-secondary leading-tight">
                  {p.name}
                </div>
                <div className="mt-1 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Landmark className="w-2.5 h-2.5" /> Authorized Partner
                </div>
              </div>
            ))}
          </div>
        </div>

        {variant === "full" && (
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-md mb-4`}
                >
                  <span className="font-serif text-sm font-bold">{p.short}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-secondary">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Authorized Advisory Partner</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
