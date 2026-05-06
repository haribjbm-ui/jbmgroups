import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of loans does JBM Groups offer?",
    a: "We offer a comprehensive range of loan products including Personal Loans, Home Loans, Business Loans, Loan Against Property (LAP), Construction Loans, Auto Loans, Credit Cards, and Insurance solutions. We work with 12+ leading banks and NBFCs across India.",
  },
  {
    q: "Which banks do you work with as advisory partners?",
    a: "JBM Groups is an authorized advisory partner with HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, IndusInd Bank, IDFC FIRST Bank, Yes Bank, Bajaj Finserv, RBL Bank, Axis Finance, Poonawala Fincorp, and InCredit — among others.",
  },
  {
    q: "What is the eligibility for a personal loan in Bengaluru?",
    a: "Generally, applicants should be Indian citizens between 21 and 60 years of age, with a stable monthly income (typically ₹25,000+ for salaried and ₹3 Lakhs+ annual income for self-employed) and a healthy credit score (preferably 700+). Our advisors will match you with the right bank based on your specific profile.",
  },
  {
    q: "What documents are required to apply for a loan?",
    a: "Standard documents include identity proof (Aadhaar/PAN), address proof (Aadhaar/utility bill/rent agreement), income proof (3-month salary slips and 6-month bank statements for salaried; ITR and financial statements for self-employed), and property documents for secured loans. Our team will guide you through the exact list based on your loan type.",
  },
  {
    q: "How long does it take to get a loan disbursed?",
    a: "Personal loans and credit cards can be approved and disbursed in 3-7 working days. Home loans, LAP, and business loans typically take 10-21 working days depending on documentation, property verification, and bank approval cycles. We work to expedite the process at every stage.",
  },
  {
    q: "Does JBM Groups charge any fee for its services?",
    a: "Our standard advisory consultation is free. We are transparent about any documentation, processing, or service charges before you proceed. All bank-side processing fees are paid directly to the lender. You will know every cost upfront — no hidden surprises.",
  },
  {
    q: "Do you offer doorstep service in Bengaluru?",
    a: "Yes. We offer complete doorstep service across Bengaluru and surrounding regions. Our representatives will collect documents from your home or office, walk you through the application, and stay with you through approval and disbursal — at no extra cost.",
  },
  {
    q: "What interest rates can I expect on my loan?",
    a: "Interest rates vary based on loan type, your credit score, income profile, and the lender. Personal loans currently start from around 9.90% p.a., home loans from 7.15% p.a., business loans from 10.25% p.a., and LAP from 8.50% p.a. — subject to bank policy and your profile. We negotiate to get you the best possible rate.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-20 md:py-28 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Frequently Asked
            </div>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
              Got questions? <br />
              <span className="text-primary">We have answers.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Everything you need to know about loans, eligibility, documentation, and our advisory process. Still have questions? Just call us.
            </p>
            <a
              href="tel:+917204539666"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-secondary transition-colors"
            >
              Talk to an Advisor
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-primary/10 bg-white px-5 shadow-sm transition-shadow hover:shadow-md data-[state=open]:border-primary/30"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
