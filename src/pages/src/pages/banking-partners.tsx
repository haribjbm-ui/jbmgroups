import PageBanner from "@/components/layout/page-banner";
import Partners from "@/components/sections/partners";
import CTAStrip from "@/components/layout/cta-strip";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { Landmark, ShieldCheck, TrendingUp } from "lucide-react";

export default function BankingPartners() {
  useSEO({
    title: "Banking Partners | 12+ Top Banks & NBFCs Through JBM Groups",
    description: "JBM Groups partners with 12+ leading banks and NBFCs in India — HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, IndusInd Bank, IDFC FIRST Bank, Yes Bank, Bajaj Finserv, RBL Bank, Axis Finance, Poonawala Fincorp, and InCredit.",
    keywords: "banking partners JBM Groups, HDFC loan agent, ICICI DSA, Axis Bank partner, Bajaj Finserv DSA Bengaluru, IndusInd DSA, IDFC DSA",
    path: "/banking-partners",
  });

  return (
    <div className="page-enter">
      <PageBanner
        eyebrow="Banking Partners"
        breadcrumb="Banking Partners"
        title="Direct relationships with India's"
        highlight="leading banks."
        subtitle="As an authorized advisory partner, JBM Groups works directly with 12+ leading banks and NBFCs to bring you the most competitive offers across loans, credit cards, and insurance."
      />

      {/* Why multi-bank matters */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Landmark,
                title: "12+ Lender Network",
                desc: "We have direct credit-team relationships across India's top private banks and NBFC lenders.",
              },
              {
                icon: TrendingUp,
                title: "Best-Rate Matching",
                desc: "Multi-bank comparison means you always get the most competitive interest rate available for your profile.",
              },
              {
                icon: ShieldCheck,
                title: "Authorized Channel",
                desc: "JBM Groups is an authorized advisory partner — your application is processed through official lender channels.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-primary/10 bg-gradient-to-b from-white to-muted/20 p-7 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-secondary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Partners variant="full" />

      <CTAStrip
        heading="Want to know which bank suits your profile?"
        subtext="One free consultation. We'll compare offers across our partner banks and recommend the best fit."
      />
    </div>
  );
}
