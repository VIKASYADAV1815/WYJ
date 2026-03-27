import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { GridPattern } from "./Patterns";

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <GridPattern />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-3xl font-black tracking-tighter text-white mb-6 block">
              WYJ<span className="text-amber-500">.</span>
            </span>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 pr-4">
              Premium residential remodeling and structural services in Atlanta. We build trust through uncompromising quality and craftsmanship.
            </p>
            <Link href="#contact" className="inline-flex items-center text-amber-500 font-semibold hover:text-amber-400 transition-colors group text-sm uppercase tracking-wider">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors flex items-center group">
                  <span className="w-2 h-px bg-amber-500 mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors flex items-center group">
                  <span className="w-2 h-px bg-amber-500 mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors flex items-center group">
                  <span className="w-2 h-px bg-amber-500 mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors flex items-center group">
                  <span className="w-2 h-px bg-amber-500 mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
              Expertise
            </h3>
            <ul className="space-y-4">
              <li className="text-zinc-400 text-sm hover:text-white transition-colors cursor-default">Home Remodeling</li>
              <li className="text-zinc-400 text-sm hover:text-white transition-colors cursor-default">Renovation & Updates</li>
              <li className="text-zinc-400 text-sm hover:text-white transition-colors cursor-default">Structural Improvements</li>
              <li className="text-zinc-400 text-sm hover:text-white transition-colors cursor-default">Repairs & Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
              Contact Info
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-zinc-400">
                  1205 Shoreham Dr<br />
                  Atlanta, GA 30349
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-amber-500 shrink-0 mr-3 group-hover:scale-110 transition-transform" />
                <a href="tel:4043889408" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors font-medium">
                  404-388-9408
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-amber-500 shrink-0 mr-3 group-hover:scale-110 transition-transform" />
                <a href="mailto:wiljent9@aol.com" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors">
                  wiljent9@aol.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} WYJ Logistics LLC. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Owned & Operated by <span className="text-white font-medium">Wiley Jones</span>
          </p>
        </div>
      </div>
    </footer>
  );
}