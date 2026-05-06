import { motion } from "framer-motion";
import {
  User,
  CreditCard,
  Briefcase,
  Building,
  Home as HomeIcon,
  HardHat,
  Car,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";
import PageBanner from "@/components/layout/page-banner";
import CTAStrip from "@/components/layout/cta-strip";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: User,
    slug: "personal-loan",
    title: "Personal Loans",
    image: "/services/personal-loan.png",
    tagline: "Quick, collateral-free funding for life's important moments.",
    description:
      "Personal loans from JBM Groups put fast, flexible cash in your hands for weddings, education, medical emergencies, travel, or any unforeseen expense. With multi-bank options, we secure the lowest interest rate suited to your profile and disburse in days, not weeks.",
    features: [
      "Loans up to ₹1 Crore",
      "Tenure up to 84 months (7 years)",
      "Interest from 9.90% p.a. (subject to profile)",
      "Minimal documentation",
      "Disbursal in 1–3 working days",
      "No collateral or guarantor required",
    ],
  },
  {
    icon: CreditCard,
    slug: "credit-cards",
    title: "Credit Cards",
    image: "/services/credit-cards.png",
    tagline: "Premium credit cards with rewards, cashback & travel benefits.",
    description:
      "Choose from a curated portfolio of credit cards across our partner banks — from cashback workhorses to travel premium cards with airport lounge access, dining discounts, and EMI flexibility. We help match the right card to your spending pattern.",
    features: [
      "Lifetime free options available",
      "Up to 5% cashback on categories",
      "Airport lounge access programs",
      "Reward points & milestone bonuses",
      "Instant approvals for eligible profiles",
      "EMI conversion for big purchases",
    ],
  },
  {
    icon: Briefcase,
    slug: "business-loan",
    title: "Business Loans",
    image: "/services/business-loan.png",
    tagline: "Working capital and expansion funding for SMEs and businesses.",
    description:
      "Whether you need working capital, equipment financing, or funding for business expansion, JBM Groups arranges secured and unsecured business loans tailored to your cash-flow cycle. We work with banks specialized in SME lending across Karnataka.",
    features: [
      "Loans up to ₹2 Crore",
      "Tenure up to 84 months (7 years)",
      "Working capital & term loans",
      "Equipment & machinery financing",
      "Quick disbursal with minimal docs",
      "Competitive interest rates",
    ],
  },
  {
    icon: Building,
    slug: "loan-against-property",
    title: "Loan Against Property",
    image: "/services/loan-against-property.png",
    tagline: "Unlock the value of your residential or commercial property.",
    description:
      "Have a property but need funds for business expansion, education, medical needs, or debt consolidation? Loan Against Property (LAP) lets you borrow against your real estate at attractive rates and long tenures — without selling your asset.",
    features: [
      "Up to 70% of property market value",
      "Tenure up to 20 years",
      "Lower interest rates than personal loans",
      "Residential & commercial properties accepted",
      "Use funds for any purpose",
      "Quick property valuation",
    ],
  },
  {
    icon: HomeIcon,
    slug: "home-loan",
    title: "Housing Loan",
    image: "/services/home-loan.png",
    tagline: "Make your dream home a reality with the lowest home loan rates.",
    description:
      "JBM Groups arranges home loans across India's top banks for ready-to-move flats, under-construction projects, plot purchase, and home improvement. Get pre-approval certificates, attractive interest rates, and tax benefits under Section 80C and 24(b).",
    features: [
      "Loans up to ₹10 Crore",
      "Tenure up to 30 years",
      "Interest from 7.15% p.a.",
      "Tax benefits under 80C & 24(b)",
      "Balance transfer & top-up available",
      "Pre-approval certificates",
    ],
  },
  {
    icon: HardHat,
    slug: "construction-loan",
    title: "Construction Loan",
    image: "/services/construction-loan.png",
    tagline: "Build your home from the ground up with stage-wise funding.",
    description:
      "Building your own house? Our construction loans offer stage-wise disbursal aligned with your construction milestones — from foundation to finishing. Combine plot purchase and construction in a single loan with customized EMI plans.",
    features: [
      "Plot + construction combined funding",
      "Stage-wise disbursal as per progress",
      "Customized EMI structure",
      "Tenure up to 30 years",
      "Pre-EMI option during construction",
      "Tax benefits applicable",
    ],
  },
  {
    icon: Car,
    slug: "auto-loan",
    title: "Auto Loan",
    image: "/services/auto-loan.png",
    tagline: "Drive home your dream car or two-wheeler at the best rates.",
    description:
      "Get on-road financing for new and pre-owned cars, two-wheelers, and commercial vehicles. JBM Groups partners with banks offering up to 100% on-road funding, fast approvals, and minimal documentation so you can drive away sooner.",
    features: [
      "Up to 100% on-road financing",
      "Tenure up to 7 years",
      "New, pre-owned & commercial vehicles",
      "Two-wheeler loans available",
      "Interest from 8.25% p.a.",
      "Doorstep documentation",
    ],
  },
  {
    icon: ShieldCheck,
    slug: "insurance",
    title: "Insurance",
    image: "/services/insurance.png",
    tagline: "Comprehensive insurance to protect what matters most.",
    description:
      "Beyond loans, JBM Groups helps you secure your family's future with life, health, motor, and general insurance from India's most trusted insurers. Get expert advice on the right cover, premium amount, and policy structure for your needs.",
    features: [
      "Term & life insurance plans",
      "Health & critical illness cover",
      "Motor insurance (car & two-wheeler)",
      "Home & shop insurance",
      "Family floater plans",
      "Claim assistance support",
    ],
  },
];

export default function Services() {
  useSEO({
    title: "Loan Services in Bengaluru | Personal, Home, Business Loans & More",
    description: "Explore JBM Groups' complete loan services: Personal, Credit Cards, Business, LAP, Home, Construction, Auto Loans & Insurance. Multi-bank options. Best rates. Free consultation.",
    keywords: "loan services Bengaluru, personal loan, home loan, business loan, LAP, auto loan, credit card, insurance, JBM Groups services",
    path: "/services",
  });

  return (
    <div className="page-enter">
      <PageBanner
        eyebrow="What We Offer"
        breadcrumb="Services"
        title="Eight financial solutions."
        highlight="One trusted partner."
        subtitle="From personal aspirations to business growth, JBM Groups offers a complete spectrum of loan and insurance products through India's top banks and NBFCs."
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.article
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl border border-primary/10 bg-gradient-to-br from-white to-muted/20 p-7 md:p-10 shadow-sm hover:shadow-lg transition-shadow ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-primary/10">
                    <img
                      src={service.image}
                      alt={`${service.title} — JBM Groups`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
                    <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-lg">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <div className="rounded-full bg-accent text-secondary px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-md">
                        0{i + 1} / 0{services.length}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {service.title}
                  </div>
                  <h3 className="mt-4 font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-tight">
                    {service.tagline}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <a href="tel:+917204539666">
                      <Button className="bg-primary hover:bg-secondary text-white font-semibold gap-2 shadow-md">
                        <Phone className="w-4 h-4" />
                        Enquire about {service.title}
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <CTAStrip
        heading="Not sure which loan suits you best?"
        subtext="Our advisors will match you with the right product and the right bank — for free."
      />
    </div>
  );
}
