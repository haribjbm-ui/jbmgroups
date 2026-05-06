import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Banking Partners", href: "/banking-partners" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Loan Process", href: "/loan-process" },
];

const serviceLinks = [
  { name: "Personal Loans", href: "/services" },
  { name: "Home Loans", href: "/services" },
  { name: "Business Loans", href: "/services" },
  { name: "Loan Against Property", href: "/services" },
  { name: "Credit Cards", href: "/services" },
  { name: "Insurance", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white pt-20 pb-8 border-t-[3px] border-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-2 border border-white/15">
                <img src="/jbm-logo.png" alt="JBM Groups Logo" className="h-12 w-auto" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-bold text-white text-2xl tracking-tight">
                  JBM GROUPS
                </span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mt-1.5">
                  Prosperity & Strength
                </span>
              </div>
            </div>
            <p className="text-white/75 text-sm leading-relaxed">
              JBM Groups is Bengaluru's trusted multi-bank loan advisory firm. We connect individuals, families, and businesses with India's top banks for transparent, hassle-free loan and credit card solutions.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:+917204539666" className="inline-flex items-center gap-3 group">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent border border-accent/20">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="font-serif text-lg font-bold text-white group-hover:text-accent transition-colors">+91 72045 39666</span>
              </a>
              <a
                href="https://wa.me/917204539666?text=Hello%20JBM%20Groups%2C%20I%20would%20like%20to%20enquire%20about%20your%20loan%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/20 text-green-400 border border-green-500/30">
                  <FaWhatsapp className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-white/90 group-hover:text-green-400 transition-colors">Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-base mb-5 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-accent" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-accent text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base mb-5 text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-accent" />
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-accent text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base mb-5 text-white relative inline-block">
              Reach Us
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-accent" />
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">No. 15, SR Complex, 3rd Floor, 1st Main Road, Moodalpalya Tent Road, Bengaluru — 560072</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="mailto:info@jbmgroups.in" className="hover:text-accent transition-colors">info@jbmgroups.in</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Mon – Sat · 9:30 AM – 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/55">
            &copy; {new Date().getFullYear()} JBM Groups. All Rights Reserved.
          </p>
          <p className="text-xs font-serif italic text-white/55 tracking-wider">
            Prosperity & Strength
          </p>
          <p className="text-xs text-white/45">
            JBM Groups acts as a loan advisory firm and does not lend directly. Loans are subject to bank approval.
          </p>
        </div>
      </div>
    </footer>
  );
}
