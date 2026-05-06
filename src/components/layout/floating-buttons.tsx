import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/917204539666?text=Hello%20JBM%20Groups%2C%20I%20would%20like%20to%20enquire%20about%20your%20loan%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JBM Groups on WhatsApp"
        className="group relative"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-60 animate-ping" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 transition-all duration-300 hover:scale-110 hover:bg-green-600">
          <FaWhatsapp className="h-7 w-7" />
        </span>
        <span className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </a>

      <a
        href="tel:+917204539666"
        aria-label="Call JBM Groups"
        className="group relative"
      >
        <span className="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping" style={{ animationDelay: "0.5s" }} />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-all duration-300 hover:scale-110 hover:bg-secondary">
          <Phone className="h-6 w-6" />
        </span>
        <span className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          Call +91 72045 39666
        </span>
      </a>
    </div>
  );
}
