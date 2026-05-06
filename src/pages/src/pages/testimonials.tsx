import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import PageBanner from "@/components/layout/page-banner";
import CTAStrip from "@/components/layout/cta-strip";
import { useSEO } from "@/hooks/use-seo";

const testimonials = [
  {
    name: "Rajesh Kumar Gowda",
    location: "Rajajinagar, Bengaluru",
    initials: "RG",
    gradient: "from-blue-500 to-indigo-700",
    rating: 5,
    review:
      "JBM Groups made my home loan journey absolutely seamless. They negotiated a fantastic interest rate from HDFC Bank for me and the entire process took just two weeks from start to finish. Truly professional service — I have already recommended them to three of my colleagues.",
    service: "Housing Loan",
  },
  {
    name: "Priya Sharma",
    location: "Vijayanagar, Bengaluru",
    initials: "PS",
    gradient: "from-rose-500 to-pink-700",
    rating: 5,
    review:
      "I needed a personal loan urgently for my daughter's wedding and was very worried about the documentation. The JBM team came to my house, handled everything, and the loan was disbursed in just 4 days. Very grateful for their support during a stressful time.",
    service: "Personal Loan",
  },
  {
    name: "Mohammed Arif",
    location: "Yeshwanthpur, Bengaluru",
    initials: "MA",
    gradient: "from-emerald-500 to-teal-700",
    rating: 5,
    review:
      "As a small business owner, getting a business loan was always a struggle for me. JBM Groups understood my needs, helped me organize my financials properly, and connected me with ICICI Bank. Got ₹35 lakhs sanctioned within 10 days. Highly recommended.",
    service: "Business Loan",
  },
  {
    name: "Lakshmi Narayan",
    location: "Nagarbhavi, Bengaluru",
    initials: "LN",
    gradient: "from-amber-600 to-orange-700",
    rating: 5,
    review:
      "Took a Loan Against Property through JBM Groups for my son's higher studies abroad. Their advisor explained every clause patiently and was always available to answer my questions. Got 70% of property value sanctioned at a very competitive rate. Excellent service.",
    service: "Loan Against Property",
  },
  {
    name: "Suresh Babu Patil",
    location: "Magadi Road, Bengaluru",
    initials: "SP",
    gradient: "from-violet-500 to-purple-700",
    rating: 5,
    review:
      "Bought my first car through JBM Groups' auto loan service. They got me 100% on-road financing at the lowest interest rate I could find anywhere in Bengaluru — even better than what the dealership offered. Smooth experience from start to finish.",
    service: "Auto Loan",
  },
  {
    name: "Anitha Reddy",
    location: "Basaveshwaranagar, Bengaluru",
    initials: "AR",
    gradient: "from-cyan-500 to-blue-700",
    rating: 5,
    review:
      "Got my premium credit card and a comprehensive health insurance plan through JBM Groups in the same week. The team is incredibly knowledgeable and never pressured me into anything I didn't actually need. Honest advice is rare these days — they have it.",
    service: "Credit Card & Insurance",
  },
];

export default function Testimonials() {
  useSEO({
    title: "Customer Testimonials | What Bengaluru Says About JBM Groups",
    description: "Read what customers across Bengaluru say about JBM Groups — real testimonials from home loan, personal loan, business loan, LAP, and credit card customers.",
    keywords: "JBM Groups reviews, customer testimonials Bengaluru, loan advisor reviews, Moodalpalya loan agent reviews",
    path: "/testimonials",
  });

  return (
    <div className="page-enter">
      <PageBanner
        eyebrow="Customer Stories"
        breadcrumb="Testimonials"
        title="Real stories from"
        highlight="real customers."
        subtitle="Don't take our word for it — hear what our clients across Bengaluru have to say about their experience with JBM Groups."
      />

      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          {/* Summary bar */}
          <div className="mx-auto mb-14 max-w-3xl rounded-2xl border border-primary/10 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
            <div>
              <div className="font-serif text-4xl font-bold text-secondary">4.9<span className="text-primary">/5</span></div>
              <div className="flex items-center justify-center gap-0.5 mt-1.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Average rating</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-primary/10" />
            <div>
              <div className="font-serif text-4xl font-bold text-secondary">10K<span className="text-primary">+</span></div>
              <div className="text-xs text-muted-foreground mt-1.5">Happy customers</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-primary/10" />
            <div>
              <div className="font-serif text-4xl font-bold text-secondary">95<span className="text-primary">%</span></div>
              <div className="text-xs text-muted-foreground mt-1.5">Referral rate</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
              >
                <Quote className="absolute right-5 top-5 h-12 w-12 text-primary/8" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed flex-1">"{t.review}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-serif text-base font-bold text-white shadow-md`}>
                    {t.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-serif text-sm font-bold text-secondary truncate">{t.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{t.location}</div>
                  </div>
                </div>
                <div className="mt-3 inline-flex self-start rounded-full bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {t.service}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Ready to write your own success story?"
        subtext="Join 10,000+ Bengaluru customers who trust JBM Groups for their financial journey."
      />
    </div>
  );
}
