import { motion } from "framer-motion";
import {
  HandshakeIcon,
  Landmark,
  Percent,
  MapPin,
  FileCheck,
  Clock,
  Headphones,
  Lock,
  Award,
} from "lucide-react";
import PageBanner from "@/components/layout/page-banner";
import CTAStrip from "@/components/layout/cta-strip";
import { useSEO } from "@/hooks/use-seo";

const reasons = [
  { icon: HandshakeIcon, title: "Trusted Advisors", desc: "Years of experience, thousands of satisfied customers, and an unblemished record of integrity in every single transaction." },
  { icon: Landmark, title: "Multiple Bank Tie-ups", desc: "Direct relationships with 12+ leading banks and NBFCs ensures you always get the best matched offer for your profile." },
  { icon: Percent, title: "Lowest Interest Rates", desc: "We negotiate aggressively with our partner banks to secure the most competitive rates exclusively for our customers." },
  { icon: MapPin, title: "Doorstep Service", desc: "From documentation to disbursal, our team comes to your home or office. Convenience is our promise — at no extra cost." },
  { icon: FileCheck, title: "Transparent Process", desc: "No hidden charges. No surprise fees. Every step explained, every document accounted for. Always in plain language." },
  { icon: Clock, title: "Quick Disbursal", desc: "Streamlined paperwork and direct bank channels mean your loan gets approved and disbursed in record time." },
  { icon: Headphones, title: "Dedicated Support", desc: "A single advisor handles your entire journey — no being passed around between departments or call centers." },
  { icon: Lock, title: "Data Privacy", desc: "Your personal and financial information is shared only with the lender of your choice. We never sell or trade data." },
  { icon: Award, title: "Long-Term Relationship", desc: "Most of our customers come back for their next loan — and refer their family. That's the recognition we treasure most." },
];

export default function WhyChooseUs() {
  useSEO({
    title: "Why Choose JBM Groups | Bengaluru's Most Trusted Loan Advisor",
    description: "Discover why thousands of Bengaluru customers choose JBM Groups for their loans — multi-bank tie-ups, lowest interest rates, transparent process, doorstep service & quick disbursal.",
    keywords: "why choose JBM Groups, best loan advisor Bengaluru, trusted loan DSA, doorstep loan service",
    path: "/why-choose-us",
  });

  return (
    <div className="page-enter">
      <PageBanner
        eyebrow="Why Choose Us"
        breadcrumb="Why Choose Us"
        title="Nine reasons we're"
        highlight="Bengaluru's first choice."
        subtitle="We don't just process loans — we build lasting relationships founded on trust, transparency, and tangible results that span generations of customers."
      />

      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative rounded-2xl border border-primary/10 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute top-5 right-5 font-serif text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <reason.icon className="w-7 h-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-secondary">{reason.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
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
