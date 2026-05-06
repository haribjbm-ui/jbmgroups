import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageBanner from "@/components/layout/page-banner";
import { useSEO } from "@/hooks/use-seo";

export default function Contact() {
  useSEO({
    title: "Contact JBM Groups | Loan Advisory in Moodalpalya, Bengaluru",
    description: "Visit JBM Groups at No. 15, SR Complex, 3rd Floor, 1st Main Road, Moodalpalya Tent Road, Bengaluru 560072. Call +91 72045 39666 or WhatsApp us anytime.",
    keywords: "JBM Groups contact, loan advisor Moodalpalya, Bengaluru loan office, JBM Groups address, +91 72045 39666",
    path: "/contact",
  });

  return (
    <div className="page-enter">
      <PageBanner
        eyebrow="Get In Touch"
        breadcrumb="Contact"
        title="Visit, call, or just say"
        highlight="namaste."
        subtitle="Our doors are open six days a week. Walk in for a free consultation, or reach out via phone or WhatsApp anytime — we typically respond within minutes during business hours."
      />

      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/30">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold text-secondary">Our Office</div>
                    <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                      No. 15, SR Complex, 3rd Floor, <br />
                      1st Main Road, Moodalpalya Tent Road, <br />
                      Near Moodalpalya Circle, <br />
                      Bengaluru, Karnataka — 560072
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Moodalpalya+Circle+Bengaluru+Karnataka+560072"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="tel:+917204539666"
                className="group rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/30 transition-transform group-hover:scale-110">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold text-secondary">Call Us</div>
                    <p className="mt-1 text-sm text-muted-foreground">Direct line to our advisors</p>
                    <p className="mt-2 font-serif text-2xl font-bold text-primary">+91 72045 39666</p>
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/917204539666?text=Hello%20JBM%20Groups%2C%20I%20would%20like%20to%20enquire%20about%20your%20loan%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-green-500/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500 text-white shadow-md shadow-green-500/30 transition-transform group-hover:scale-110">
                    <FaWhatsapp className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold text-secondary">WhatsApp Us</div>
                    <p className="mt-1 text-sm text-muted-foreground">Quick chat for instant support</p>
                    <p className="mt-2 font-serif text-2xl font-bold text-green-600">+91 72045 39666</p>
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="mt-3 font-serif text-sm font-bold text-secondary">Email</div>
                  <a href="mailto:info@jbmgroups.in" className="text-xs text-muted-foreground hover:text-primary break-all">
                    info@jbmgroups.in
                  </a>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="mt-3 font-serif text-sm font-bold text-secondary">Hours</div>
                  <div className="text-xs text-muted-foreground">
                    Mon – Sat <br />
                    9:30 AM – 6:30 PM
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="h-full overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-lg">
                <div className="border-b border-primary/10 bg-gradient-to-r from-secondary to-primary px-6 py-4 text-white">
                  <div className="flex items-center gap-3">
                    <Navigation className="h-5 w-5 text-accent" />
                    <div>
                      <div className="font-serif text-base font-bold">Find Us On The Map</div>
                      <div className="text-xs text-white/80">Moodalpalya Circle, Bengaluru — 560072</div>
                    </div>
                  </div>
                </div>
                <iframe
                  title="JBM Groups office location on Google Maps"
                  src="https://www.google.com/maps?q=Moodalpalya+Circle+Bengaluru+Karnataka+560072&output=embed"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
