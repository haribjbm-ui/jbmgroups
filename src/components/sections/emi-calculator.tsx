import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Sparkles, TrendingUp, Wallet, PiggyBank, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const PRESETS = [
  { label: "Personal", amount: 500000, rate: 11.5, tenure: 36 },
  { label: "Home", amount: 5000000, rate: 8.5, tenure: 240 },
  { label: "Business", amount: 1500000, rate: 12.0, tenure: 60 },
  { label: "Auto", amount: 800000, rate: 9.0, tenure: 60 },
];

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

function formatINRCompact(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)} K`;
  return `₹${Math.round(n)}`;
}

export default function EmiCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(11.5);
  const [tenure, setTenure] = useState(36); // months
  const [activePreset, setActivePreset] = useState("Personal");

  const { emi, totalInterest, totalPayment, principalShare } = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const n = tenure;
    const emiVal =
      monthlyRate === 0
        ? amount / n
        : (amount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
          (Math.pow(1 + monthlyRate, n) - 1);
    const total = emiVal * n;
    const interest = total - amount;
    const principalShareVal = (amount / total) * 100;
    return {
      emi: emiVal,
      totalInterest: interest,
      totalPayment: total,
      principalShare: principalShareVal,
    };
  }, [amount, rate, tenure]);

  const interestShare = 100 - principalShare;

  const applyPreset = (p: (typeof PRESETS)[number]) => {
    setActivePreset(p.label);
    setAmount(p.amount);
    setRate(p.rate);
    setTenure(p.tenure);
  };

  const waMessage = encodeURIComponent(
    `Hi JBM Groups,\n\nI used your EMI calculator and would like to apply.\n\n• Loan amount: ${formatINR(amount)}\n• Interest rate: ${rate}% p.a.\n• Tenure: ${tenure} months\n• Estimated EMI: ${formatINR(emi)}\n\nPlease share the best offers across your partner banks.`
  );

  return (
    <section
      id="emi-calculator"
      aria-label="EMI Calculator"
      className="py-20 md:py-24 bg-gradient-to-b from-white via-muted/20 to-white"
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
            <Calculator className="h-3 w-3" />
            EMI Calculator
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
          >
            Plan your EMI in <span className="italic text-primary">seconds.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-muted-foreground"
          >
            Estimate your monthly instalment, total interest, and overall cost across loan amounts, interest rates, and tenure — instantly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="absolute inset-0 -m-4 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 blur-2xl" />
          <div className="relative grid lg:grid-cols-12 overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl">
            {/* Inputs */}
            <div className="lg:col-span-7 p-7 md:p-9 lg:p-10">
              <div className="flex flex-wrap items-center gap-2 mb-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground mr-1">Quick start:</span>
                {PRESETS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => applyPreset(p)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      activePreset === p.label
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="space-y-7">
                {/* Loan amount */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-secondary">Loan Amount</label>
                    <div className="rounded-lg bg-primary/5 px-3 py-1.5 font-serif text-base font-bold text-primary">
                      {formatINRCompact(amount)}
                    </div>
                  </div>
                  <Slider
                    value={[amount]}
                    min={50000}
                    max={20000000}
                    step={50000}
                    onValueChange={(v) => { setAmount(v[0]); setActivePreset(""); }}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground mt-2">
                    <span>₹50 K</span>
                    <span>₹2 Cr</span>
                  </div>
                </div>

                {/* Interest rate */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-secondary">Interest Rate (p.a.)</label>
                    <div className="rounded-lg bg-primary/5 px-3 py-1.5 font-serif text-base font-bold text-primary">
                      {rate.toFixed(2)}%
                    </div>
                  </div>
                  <Slider
                    value={[rate]}
                    min={6}
                    max={24}
                    step={0.05}
                    onValueChange={(v) => { setRate(v[0]); setActivePreset(""); }}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground mt-2">
                    <span>6%</span>
                    <span>24%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-secondary">Tenure</label>
                    <div className="rounded-lg bg-primary/5 px-3 py-1.5 font-serif text-base font-bold text-primary">
                      {tenure < 12
                        ? `${tenure} mo`
                        : tenure % 12 === 0
                        ? `${tenure / 12} yr`
                        : `${(tenure / 12).toFixed(1)} yr`}
                    </div>
                  </div>
                  <Slider
                    value={[tenure]}
                    min={6}
                    max={360}
                    step={6}
                    onValueChange={(v) => { setTenure(v[0]); setActivePreset(""); }}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground mt-2">
                    <span>6 mo</span>
                    <span>30 yrs</span>
                  </div>
                </div>
              </div>

              {/* Breakdown bar */}
              <div className="mt-9 pt-7 border-t border-primary/10">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-secondary">Cost composition</span>
                  <span className="text-muted-foreground">{principalShare.toFixed(1)}% principal · {interestShare.toFixed(1)}% interest</span>
                </div>
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                    style={{ width: `${principalShare}%` }}
                  />
                  <div
                    className="h-full bg-gradient-to-r from-accent to-amber-600 transition-all duration-500"
                    style={{ width: `${interestShare}%` }}
                  />
                </div>
                <div className="mt-3 flex items-center gap-5 text-[11px]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-primary" />
                    <span className="text-muted-foreground">Principal</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-accent" />
                    <span className="text-muted-foreground">Interest</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-5 relative bg-navy-gradient text-white p-7 md:p-9 lg:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-25" />
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-bold tracking-[0.18em] uppercase text-accent">
                  <Sparkles className="h-3 w-3" />
                  Your Estimate
                </div>

                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Monthly EMI</div>
                  <div className="mt-1 font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-none text-white">
                    {formatINR(emi)}
                  </div>
                  <div className="mt-2 text-xs text-white/60">
                    Across {tenure} EMI{tenure > 1 ? "s" : ""} · {rate.toFixed(2)}% p.a.
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/65">
                      <Wallet className="h-3.5 w-3.5 text-accent" />
                      Principal
                    </div>
                    <div className="mt-2 font-serif text-lg font-bold text-white">
                      {formatINRCompact(amount)}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/65">
                      <TrendingUp className="h-3.5 w-3.5 text-accent" />
                      Interest
                    </div>
                    <div className="mt-2 font-serif text-lg font-bold text-accent">
                      {formatINRCompact(totalInterest)}
                    </div>
                  </div>
                  <div className="col-span-2 rounded-xl border border-accent/30 bg-accent/10 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-accent">
                      <PiggyBank className="h-3.5 w-3.5" />
                      Total Payable
                    </div>
                    <div className="mt-1.5 font-serif text-2xl font-bold text-white">
                      {formatINR(totalPayment)}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2.5">
                  <a
                    href={`https://wa.me/917204539666?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-accent hover:bg-accent/90 text-secondary font-bold gap-2 py-5 shadow-lg shadow-black/20">
                      <FaWhatsapp className="h-4 w-4" />
                      Get this loan on WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+917204539666" className="block">
                    <Button variant="outline" className="w-full border-white/30 bg-white/5 hover:bg-white/15 text-white font-semibold gap-2 backdrop-blur">
                      <Phone className="h-4 w-4" />
                      Call +91 72045 39666
                    </Button>
                  </a>
                </div>

                <p className="mt-5 text-[10px] text-white/50 leading-relaxed">
                  *Estimate is indicative. Final EMI depends on bank approval, processing fees, GST, insurance and your credit profile.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
