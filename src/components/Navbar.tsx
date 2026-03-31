"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        (scrolled || isOpen || pathname !== '/')
          ? "bg-white/95 backdrop-blur-lg border-b border-zinc-200/50 shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group z-50">
            <span className={cn(
              "text-2xl font-black tracking-tighter transition-colors font-serif",
              (scrolled || isOpen || pathname !== '/') ? "text-zinc-900" : "text-white"
            )}>
              WYJ<span className="text-amber-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHomeTop = pathname === '/' && !scrolled;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-semibold tracking-wide uppercase transition-colors group",
                    isHomeTop 
                      ? "text-white/90 hover:text-white" 
                      : (isActive ? "text-amber-600" : "text-zinc-600 hover:text-zinc-900")
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform origin-left transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              );
            })}
          </nav>

          {/* Call to Action - Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:4043889408"
              className={cn(
                "inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold tracking-wide uppercase transition-all duration-300 border-2",
                scrolled || pathname !== '/'
                  ? "bg-zinc-900 text-white border-zinc-900 hover:bg-amber-500 hover:border-amber-500"
                  : "bg-white text-zinc-900 border-white hover:bg-amber-500 hover:text-white hover:border-amber-500"
              )}
            >
              <Phone className="w-4 h-4 mr-2" />
              404-388-9408
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "focus:outline-none p-2 transition-colors",
                (scrolled || isOpen || pathname !== '/') ? "text-zinc-900" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-zinc-100 shadow-2xl transition-all duration-300 overflow-y-auto origin-top",
        isOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="px-4 py-6 space-y-2 pb-24">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-bold uppercase tracking-wide transition-colors",
                pathname === link.href
                  ? "bg-amber-50 text-amber-600"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-zinc-100">
            <a
              href="tel:4043889408"
              className="flex items-center justify-center w-full px-4 py-3 text-base font-bold uppercase tracking-wide text-white bg-zinc-900 hover:bg-amber-500 transition-colors rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
