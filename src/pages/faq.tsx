import { motion } from "framer-motion";
import { Phone, HelpCircle } from "lucide-react";
import PageBanner from "@/components/layout/page-banner";
import CTAStrip from "@/components/layout/cta-strip";
import { useSEO } from "@/hooks/use-seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General",
    q: "What types of loans does JBM Groups offer?",
    a: "We offer a comprehensive range of loan products including Personal Loans, Home Loans, Business Loans, Loan Against Property (LAP), Construction Loans, Auto Loans, Credit Cards, and Insurance solutions. We work with 12+ leading banks and NBFCs across India.",
  },
  {
    category: "General",
    q: "Which banks does JBM Groups work with?",
    a: "JBM Groups is an authorized advisory partner with HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, IndusInd Bank, IDFC FIRST Bank, Yes Bank, Bajaj Finserv, RBL Bank, Axis Finance, Poonawala Fincorp, and InCredit — among others.",
  },
  {
    category: "Eligibility",
    q: "What is the eligibility for a personal loan in Bengaluru?",
    a: "Generally, applicants should be Indian citizens between 21 and 60 years of age, with a stable monthly income (typically ₹25,000+ for salaried and ₹3 Lakhs+ annual income for self-employed), and a healthy credit score (preferably 700+). Our advisors will match you with the right bank based on your specific profile.",
  },
  {
    category: "Eligibility",
    q: "Can I get a home loan if I am self-employed?",
    a: "Yes. We arrange home loans for both salaried and self-employed applicants. For self-employed, banks typically require 2-3 years of ITRs, audited financials, business continuity proof, and a healthy bank statement. Our advisors will guide you on which lenders are most favourable for self-employed profiles.",
  },
  {
    category: "Documentation",
    q: "What documents are required to apply for a loan?",
    a: "Standard documents include identity proof (Aadhaar/PAN), address proof (Aadhaar/utility bill/rent agreement), income proof (3-month salary slips and 6-month bank statements for salaried; ITR and financial statements for self-employed), and property documents for secured loans. Our team will share the exact list based on your loan type.",
  },
  {
    category: "Documentation",
    q: "Do I need to visit your office to submit documents?",
    a: "Not at all. We offer complete doorstep service across Bengaluru. Our representatives will collect documents from your home or office at a time that suits you — at no extra cost.",
  },
  {
    category: "Process",
    q: "How long does it take to get a loan disbursed?",
    a: "Personal loans and credit cards can be approved and disbursed in 3-7 working days. Home loans, LAP, and business loans typically take 10-21 working days depending on documentation, property verification, and bank approval cycles. We work to expedite the process at every stage.",
  },
  {
    category: "Process",
    q: "Will my CIBIL score get affected if my application is rejected?",
    a: "A hard credit pull does have a small temporary impact on your score. That's exactly why our pre-screening is so thorough — we evaluate your eligibility before formally submitting to a bank, so we only apply where the chances of approval are strong.",
  },
  {
    category: "Pricing",
    q: "Does JBM Groups charge any fee for its services?",
    a: "Our standard advisory consultation is free. We are transparent about any documentation, processing, or service charges before you proceed. All bank-side processing fees are paid directly to the lender. You will know every cost upfront — no hidden surprises.",
  },
  {
    category: "Pricing",
    q: "What interest rates can I expect on my loan?",
    a: "Interest rates vary based on loan type, your credit score, income profile, and the lender. Personal loans currently start from around 9.90% p.a., home loans from 7.15% p.a., business loans from 10.25% p.a., and LAP from 8.50% p.a. — subject to bank policy and your profile. We negotiate to get you the best possible rate.",
  },
  {
    category: "After Disbursal",
    q: "Can I prepay or foreclose my loan?",
    a: "Yes, most loans allow prepayment and foreclosure. For floating-rate home loans and LAP, banks typically charge no foreclosure fees as per RBI guidelines. For personal and business loans, prepayment charges may apply depending on the lender. We'll explain the exact terms before you sign.",
  },
  {
    category: "After Disbursal",
    q: "What if I face issues with the bank after disbursal?",
    a: "We're with you for the long haul. If you face any post-disbursal issue — EMI confusion, statement queries, foreclosure questions, or top-up loan requirements — just call us. Our advisor team continues to support you for the lifetime of your loan.",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

export default function FAQ() {
  useSEO({
    title: "FAQ | Loan Questions Answered | JBM Groups Bengaluru",
    description: "Frequently asked questions about loans in Bengaluru — eligibility, documents, interest rates, disbursal time, prepayment, and more. Get clear answers from JBM Groups.",
    keywords: "loan FAQ Bengaluru, loan eligibility questions, loan documents required, loan interest rates India",
    path: "/faq",
  });

  // FAQ JSON-LD structured data injection
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="page-enter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageBanner
        eyebrow="Frequently Asked"
        breadcrumb="FAQ"
        title="Got questions?"
        highlight="We have answers."
        subtitle="Everything you need to know about loans, eligibility, documentation, interest rates, and our advisory process — explained in plain language."
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
            >
              <div className="rounded-2xl border border-primary/10 bg-gradient-to-b from-white to-muted/20 p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-secondary">
                  Still have questions?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Every situation is unique. If you'd rather talk to a human, our advisors are just one call away.
                </p>
                <a href="tel:+917204539666" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-secondary transition-colors">
                  <Phone className="w-4 h-4" />
                  Talk to an Advisor
                </a>

                <div className="mt-7 pt-6 border-t border-primary/10">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-3">Browse by topic</div>
                  <ul className="space-y-1.5">
                    {categories.map((c) => (
                      <li key={c} className="text-sm text-muted-foreground">
                        <span className="text-accent mr-2">●</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8 space-y-10"
            >
              {categories.map((cat) => (
                <div key={cat}>
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                    <span className="h-px flex-1 max-w-[2rem] bg-accent" />
                    {cat}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs
                      .filter((f) => f.category === cat)
                      .map((faq, i) => (
                        <AccordionItem
                          key={i}
                          value={`${cat}-${i}`}
                          className="rounded-xl border border-primary/10 bg-white px-5 shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.02]"
                        >
                          <AccordionTrigger className="py-5 text-left font-serif text-base md:text-lg font-semibold text-secondary hover:no-underline hover:text-primary">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="pb-5 text-sm text-muted-foreground leading-relaxed">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
