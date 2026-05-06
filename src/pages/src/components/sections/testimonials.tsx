import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar Gowda",
    location: "Rajajinagar, Bengaluru",
    initials: "RG",
    gradient: "from-blue-500 to-indigo-700",
    rating: 5,
    review:
      "JBM Groups made my home loan journey absolutely seamless. They negotiated a fantastic interest rate from HDFC Bank for me and the entire process took just two weeks. Truly professional service.",
    service: "Housing Loan",
  },
  {
    name: "Priya Sharma",
    location: "Vijayanagar, Bengaluru",
    initials: "PS",
    gradient: "from-rose-500 to-pink-700",
    rating: 5,
    review:
      "I needed a personal loan for my daughter's wedding and was worried about the documentation. The JBM team came to my house, handled everything, and the loan was disbursed in 4 days. Very grateful.",
    service: "Personal Loan",
  },
  {
    name: "Mohammed Arif",
    location: "Yeshwanthpur, Bengaluru",
    initials: "MA",
    gradient: "from-emerald-500 to-teal-700",
    rating: 5,
    review:
      "As a small business owner, getting a business loan was always a struggle. JBM Groups understood my needs and connected me with ICICI Bank. Got ₹35 lakhs sanctioned within 10 days. Highly recommended.",
    service: "Business Loan",
  },
  {
    name: "Lakshmi Narayan",
    location: "Nagarbhavi, Bengaluru",
    initials: "LN",
    gradient: "from-amber-600 to-orange-700",
    rating: 5,
    review:
      "Took a Loan Against Property through JBM Groups for my son's higher studies abroad. Their advisor explained every clause patiently. Got 70% of property value sanctioned at a very competitive rate.",
    service: "Loan Against Property",
  },
  {
    name: "Suresh Babu Patil",
    location: "Magadi Road, Bengaluru",
    initials: "SP",
    gradient: "from-violet-500 to-purple-700",
    rating: 5,
    review:
      "Bought my first car through JBM Groups' auto loan service. They got me 100% on-road financing at the lowest interest rate I could find anywhere in Bengaluru. Smooth experience from start to finish.",
    service: "Auto Loan",
  },
  {
    name: "Anitha Reddy",
    location: "Basaveshwaranagar, Bengaluru",
    initials: "AR",
    gradient: "from-cyan-500 to-blue-700",
    rating: 5,
    review:
      "Got my premium credit card and a comprehensive health insurance plan through JBM Groups in the same week. The team is incredibly knowledgeable and never pressured me into anything I didn't need.",
    service: "Credit Card & Insurance",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Customer Testimonials"
      className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Customer Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
          >
            Real stories from <span className="text-primary">real customers</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-muted-foreground"
          >
            Don't take our word for it — hear what our clients across Bengaluru have to say about their experience with JBM Groups.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-primary/10" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{t.review}"</p>

              <div className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-5">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-serif text-base font-bold text-white shadow-md`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-serif text-sm font-bold text-secondary truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.location}</div>
                </div>
                <div className="shrink-0 rounded-full bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {t.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
