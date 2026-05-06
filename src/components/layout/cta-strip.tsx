import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface CTAStripProps {
  heading?: string;
  subtext?: string;
}

export default function CTAStrip({
  heading = "Ready to take the next step toward your financial goals?",
  subtext = "Talk to a JBM Groups advisor today — free consultation, multi-bank options, and complete transparency.",
}: CTAStripProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-secondary via-[hsl(220,70%,18%)] to-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {heading}
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
              {subtext}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <a href="tel:+917204539666">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-secondary font-bold text-base px-7 py-6 shadow-xl shadow-black/20 gap-2 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call +91 72045 39666
              </Button>
            </a>
            <a
              href="https://wa.me/917204539666?text=Hello%20JBM%20Groups%2C%20I%20would%20like%20to%20enquire%20about%20your%20loan%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 hover:bg-white/15 text-white font-semibold text-base px-7 py-6 backdrop-blur gap-2 w-full sm:w-auto"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
