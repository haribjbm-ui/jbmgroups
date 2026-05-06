import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, ShieldCheck, Award, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="JBM Groups Hero"
      className="relative isolate overflow-hidden bg-navy-gradient text-white pt-16 md:pt-24 pb-24 md:pb-32"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[26rem] w-[26rem] rounded-full bg-primary/30 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-accent"
            >
              <Sparkles className="h-3 w-3" />
              Bengaluru's Trusted Loan Advisory
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 font-serif text-[2.5rem] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.02] text-white"
            >
              Loans made <span className="italic text-accent">simple,</span> <br className="hidden md:block" />
              futures made <span className="italic text-accent">stronger.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-7 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed"
            >
              From Personal Loans to Home Loans, Business Funding to Credit Cards — JBM Groups partners you with India's leading banks for transparent, doorstep, and fully-managed financial solutions tailored to your life. We bridge banks and customers so you always get the right loan at the right rate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <a href="tel:+917204539666">
                <Button
                  size="lg"
                  className="group bg-accent hover:bg-accent/90 text-secondary font-bold text-base px-7 py-6 shadow-xl shadow-accent/30 gap-2 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  Call +91 72045 39666
                </Button>
              </a>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/5 hover:bg-white/15 text-white font-semibold text-base px-7 py-6 backdrop-blur gap-2 w-full sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-5 max-w-xl border-t border-white/10 pt-7"
            >
              <Trust icon={<TrendingUp className="w-5 h-5" />} value="₹500 Cr+" label="Loans Disbursed" />
              <Trust icon={<ShieldCheck className="w-5 h-5" />} value="12+" label="Banking Partners" />
              <Trust icon={<Award className="w-5 h-5" />} value="10K+" label="Happy Customers" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-primary/20 blur-2xl" />

              <div className="relative rounded-[1.75rem] bg-white/[0.07] backdrop-blur-xl border border-white/15 p-7 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-secondary">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-serif text-sm font-bold text-white">Loan Snapshot</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/55">Indicative · Across partner banks</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Personal Loan", rate: "9.90%", tenure: "Up to 7 yrs" },
                    { name: "Home Loan", rate: "7.15%", tenure: "Up to 30 yrs" },
                    { name: "Business Loan", rate: "10.25%", tenure: "Up to 7 yrs" },
                    { name: "Loan Against Property", rate: "8.50%", tenure: "Up to 20 yrs" },
                    { name: "Auto Loan", rate: "8.25%", tenure: "Up to 7 yrs" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3 hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <div className="text-sm font-semibold text-white">{row.name}</div>
                        <div className="text-[10px] uppercase tracking-wider text-white/50">{row.tenure}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-serif text-lg font-bold text-accent">{row.rate}*</div>
                        <div className="text-[9px] uppercase tracking-wider text-white/50">starting p.a.</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <p className="text-[10px] text-white/50 leading-relaxed">
                    *Indicative rates. Final rates depend on profile, bank policy & credit score.
                  </p>
                  <a
                    href="https://wa.me/917204539666?text=Hi%20JBM%20Groups%2C%20please%20share%20best%20rates."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-green-500/15 border border-green-400/30 px-3 py-1.5 text-[11px] font-semibold text-green-400 hover:bg-green-500/25 transition-colors"
                  >
                    <FaWhatsapp className="h-3.5 w-3.5" />
                    Get my rate
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Trust({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent border border-accent/20">
        {icon}
      </div>
      <div>
        <div className="font-serif text-xl font-bold text-white leading-none">{value}</div>
        <div className="text-[10px] uppercase tracking-wider text-white/65 mt-1.5">{label}</div>
      </div>
    </div>
  );
}
