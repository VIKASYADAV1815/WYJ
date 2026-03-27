"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileStickyCall() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 md:hidden transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      )}
    >
      <a
        href="tel:4043889408"
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        aria-label="Call WYJ Logistics"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}