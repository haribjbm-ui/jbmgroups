import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Search,
  CheckCircle2,
  Wallet,
  Sparkles,
  Clock,
  ArrowRight,
} from "lucide-react";
import PageBanner from "@/components/layout/page-banner";
import CTAStrip from "@/components/layout/cta-strip";
import { useSEO } from "@/hooks/use-seo";

const steps = [
  {
    icon: MessageSquare,
    accent: "from-blue-500 to-indigo-700",
    title: "Free Consultation",
    duration: "Day 1",
    avgTime: "20 mins",
    channel: "Call · WhatsApp · In-person",
    description:
      "Share your needs over a phone call, WhatsApp message, or in-person at our Moodalpalya office. Our advisor listens to your situation, understands your goals, and recommends the right loan product or credit card.",
    points: ["Profile assessment", "Loan recommendation", "Indicative rate quote"],
    deliverable: "Personalised loan plan",
  },
  {
    icon: FileText,
    accent: "from-emerald-500 to-teal-700",
    title: "Document Collection",
    duration: "Day 1–2",
    avgTime: "1–2 days",
    channel: "Doorstep pick-up included",
    description:
      "Our team helps you gather all the required documents through our doorstep service. We pre-verify everything before submission to avoid rejections and back-and-forth with the bank.",
    points: ["KYC + income proof", "Bank statements / ITR", "Pre-submission verification"],
    deliverable: "Verified document file",
  },
  {
    icon: Search,
    accent: "from-amber-500 to-orange-700",
    title: "Bank Matching",
    duration: "Day 2–3",
    avgTime: "1 day",
    channel: "Multi-bank comparison",
    description:
      "We match your profile with the most suitable banking partners offering the best terms, lowest interest rates, and highest sanction probability — and we present you the comparison transparently.",
    points: ["Multi-bank comparison", "Eligibility analysis", "Best-rate negotiation"],
    deliverable: "Best-rate offer card",
  },
  {
    icon: CheckCircle2,
    accent: "from-violet-500 to-purple-700",
    title: "Quick Approval",
    duration: "Day 3–7",
    avgTime: "3–5 days",
    channel: "Direct credit-team channel",
    description:
      "Our direct relationships with bank credit teams mean faster verification, quicker sanction letters, and proactive follow-ups so your application doesn't get stuck in queues.",
    points: ["Application submitted", "Credit & verification", "Sanction letter issued"],
    deliverable: "Sanction letter in hand",
  },
  {
    icon: Wallet,
    accent: "from-rose-500 to-pink-700",
    title: "Disbursal",
    duration: "Day 5–14",
    avgTime: "1–2 days",
    channel: "Direct bank transfer",
    description:
      "Funds credited directly to your bank account or seller. Our advisor walks you through the loan agreement, repayment schedule, and every charge — so you have full clarity before you sign anything.",
    points: ["Loan agreement signing", "Funds credited", "Onboarding complete"],
    deliverable: "Funds in your account",
  },
];

export default function LoanProcess() {
  useSEO({
    title: "Loan Process | 5 Simple Steps to Disbursal | JBM Groups",
    description: "How loans work with JBM Groups in Bengaluru: Free consultation, document collection, multi-bank matching, quick approval, and fast disbursal — all with doorstep service.",
    keywords: "loan process Bengaluru, how to get loan, loan disbursal time, loan steps JBM Groups, doorstep loan",
    path: "/loan-process",
  });

  return (
    <div className="page-enter">
      <PageBanner
        eyebrow="How It Works"
        breadcrumb="Loan Process"
        title="Five simple steps."
        highlight="Zero hassle."
        subtitle="From the first phone call to the moment funds hit your account, our process is designed to be transparent, structured, and entirely stress-free."
      />

      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          {/* Top journey bar */}
          <div className="hidden lg:block mb-16">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="relative grid grid-cols-5 gap-4">
                {steps.map((s, i) => (
                  <div key={s.title} className="flex flex-col items-center text-center">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${s.accent} text-white shadow-lg ring-4 ring-white`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Step 0{i + 1}</div>
                    <div className="mt-1 font-serif text-sm font-bold text-secondary">{s.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Vertical timeline line for desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block -translate-x-1/2" />

            <div className="space-y-14 lg:space-y-24">
              {steps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative grid lg:grid-cols-2 gap-10 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}
                  >
                    {/* Center connector node */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-accent text-secondary font-serif text-lg font-bold shadow-xl shadow-accent/40 z-10 ring-8 ring-white">
                      {i + 1}
                    </div>

                    {/* Text side */}
                    <div className={`${isEven ? "lg:pr-20 lg:text-right" : "lg:pl-20"}`}>
                      <div className={`inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] font-bold tracking-[0.18em] uppercase text-primary mb-4`}>
                        <Sparkles className="w-3 h-3" />
                        {step.duration}
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <ul className={`mt-5 flex flex-wrap gap-2 ${isEven ? "lg:justify-end" : ""}`}>
                        {step.points.map((p) => (
                          <li key={p} className="text-xs font-semibold text-primary bg-primary/5 border border-primary/15 rounded-full px-3 py-1">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual side — premium layered card */}
                    <div className={`${isEven ? "lg:pl-20" : "lg:pr-20"}`}>
                      <div className="relative">
                        {/* Decorative back layers */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.accent} opacity-25 blur-2xl`} />
                        <div className="absolute -top-3 -right-3 hidden md:block h-24 w-24 rounded-2xl bg-accent/30 blur-2xl" />

                        {/* Main card */}
                        <div className="relative overflow-hidden rounded-3xl bg-white border border-primary/10 shadow-2xl shadow-primary/10">
                          {/* Top color band */}
                          <div className={`relative h-32 bg-gradient-to-br ${step.accent} overflow-hidden`}>
                            <div className="absolute inset-0 bg-grid-pattern opacity-25" />
                            <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
                            <div className="absolute top-5 left-6 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                              <Clock className="w-3 h-3" />
                              {step.avgTime} typical
                            </div>
                            <div className="absolute top-5 right-6 font-serif text-7xl font-bold text-white/20 leading-none">
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            {/* Floating icon badge that breaks the band */}
                            <div className="absolute -bottom-9 left-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-primary/10">
                              <div className={`flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white`}>
                                <step.icon className="w-9 h-9" />
                              </div>
                            </div>
                          </div>

                          {/* Card body */}
                          <div className="px-7 pt-14 pb-7">
                            <div className="font-serif text-lg font-bold text-secondary">
                              {step.title}
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">{step.channel}</div>

                            {/* Checklist mini panel */}
                            <ul className="mt-5 space-y-2.5">
                              {step.points.map((p) => (
                                <li key={p} className="flex items-center gap-2.5 text-sm text-foreground/80">
                                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${step.accent} text-white shadow-sm`}>
                                    <CheckCircle2 className="w-3 h-3" />
                                  </span>
                                  {p}
                                </li>
                              ))}
                            </ul>

                            {/* Deliverable footer */}
                            <div className="mt-6 pt-5 border-t border-primary/10 flex items-center justify-between gap-3">
                              <div>
                                <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground">You receive</div>
                                <div className="mt-0.5 font-serif text-sm font-bold text-secondary">{step.deliverable}</div>
                              </div>
                              {i < steps.length - 1 && (
                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                                  <ArrowRight className="w-4 h-4" />
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Ready to start your loan journey?"
        subtext="Step 1 starts with a single phone call. No commitment, no fees — just expert advice."
      />
    </div>
  );
}
