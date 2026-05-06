import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Banking Partners", href: "/banking-partners" },
  { name: "Why Us", href: "/why-choose-us" },
  { name: "Process", href: "/loan-process" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      {/* Top utility strip */}
      <div className="hidden md:block bg-secondary text-white/85 text-xs">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-2">
          <span className="font-medium tracking-wide">
            <span className="text-accent">●</span> Bengaluru's Trusted Multi-Bank Loan Advisory · Mon–Sat · 9:30 AM – 6:30 PM
          </span>
          <div className="flex items-center gap-5">
            <a href="mailto:info@jbmgroups.in" className="hover:text-accent transition-colors">info@jbmgroups.in</a>
            <span className="text-white/30">|</span>
            <a href="tel:+917204539666" className="hover:text-accent transition-colors font-semibold">+91 72045 39666</a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
            : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 z-50 shrink-0">
            <img src="/jbm-logo.png" alt="JBM Groups Logo" className="h-11 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-secondary text-[1.35rem] tracking-tight">
                JBM GROUPS
              </span>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.18em] mt-1">
                Prosperity & Strength
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-7">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`link-underline text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                      isActive(link.href)
                        ? "text-primary is-active"
                        : "text-foreground/75 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden xl:block">
            <a href="tel:+917204539666">
              <Button className="bg-primary hover:bg-secondary text-white font-semibold gap-2 shadow-md shadow-primary/20 px-5">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>

          <button
            className="xl:hidden p-2 text-foreground z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="xl:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col pt-24 px-6 pb-8 h-[100dvh] overflow-y-auto">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 text-base font-serif font-semibold transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-secondary hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 space-y-3">
              <a href="tel:+917204539666" className="block">
                <Button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-6 text-lg gap-2">
                  <Phone className="w-5 h-5" />
                  +91 72045 39666
                </Button>
              </a>
              <p className="text-center text-xs text-muted-foreground">
                Mon–Sat · 9:30 AM – 6:30 PM
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
