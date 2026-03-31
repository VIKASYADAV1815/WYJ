import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { Hammer, Wrench, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { GridPattern } from "@/components/Patterns";

export const metadata: Metadata = {
  title: "Our Services | WYJ Logistics LLC",
  description: "Comprehensive residential remodeling, renovation, structural improvements, and repairs in Atlanta.",
};

const services = [
  {
    id: "remodeling",
    title: "Home Remodeling",
    icon: <Hammer className="w-8 h-8" />,
    description: "Transform your current living space into your dream home. We handle complete interior and exterior remodeling projects from concept to completion with master craftsmanship.",
    features: ["Kitchen & Bath Remodels", "Basement Finishing", "Room Additions", "Exterior Upgrades"],
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "renovation",
    title: "Renovation & Updates",
    icon: <Wrench className="w-8 h-8" />,
    description: "Breathe new life into aging structures. We update older homes to meet modern standards of comfort, aesthetics, and energy efficiency while preserving character.",
    features: ["Modernizing Layouts", "Flooring & Drywall", "Fixture Updates", "Custom Millwork"],
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "structural",
    title: "Structural Improvements",
    icon: <Shield className="w-8 h-8" />,
    description: "Ensure your home is safe and sound. We specialize in modifying and reinforcing existing residential structures, tackling complex load-bearing and foundation challenges.",
    features: ["Load-bearing Wall Removal", "Foundation Reinforcement", "Framing Repairs", "Structural Integrity Checks"],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "repairs",
    title: "Repairs & Maintenance",
    icon: <CheckCircle2 className="w-8 h-8" />,
    description: "Keep your home in pristine condition with our reliable repair services. No job is too small when it comes to protecting your most valuable investment.",
    features: ["Drywall Repair", "Trim & Molding", "Deck & Patio Fixes", "General Maintenance"],
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PageHeader 
        title="Our Expertise" 
        description="Master remodeling and renovation services for residential structures. Quality craftsmanship you can trust."
        bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <GridPattern />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-32">
            {services.map((service, index) => (
              <FadeIn 
                key={service.id} 
                direction={index % 2 === 0 ? "right" : "left"}
                className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center group"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-zinc-900 text-amber-500 flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-black text-zinc-900 mb-6 tracking-tight font-serif">{service.title}</h2>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-8 font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-zinc-800 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 mr-4 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center text-zinc-900 font-bold uppercase tracking-wider text-sm hover:text-amber-600 transition-colors group/link"
                  >
                    Request a Quote 
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
                
                <div className={`relative aspect-[4/3] w-full overflow-hidden shadow-2xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 border-2 border-zinc-900/10 z-10 pointer-events-none" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-amber-500 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-amber-400/50 skew-x-12 transform origin-top" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-medium uppercase tracking-widest text-zinc-900 mb-8 leading-tight">Have a Project in Mind?</h2>
            <p className="text-xl md:text-2xl text-zinc-800 mb-12 font-light">
              Let&apos;s discuss how we can improve your residential space. Reach out today for a free, no-obligation estimate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-2xl hover:shadow-xl hover:-translate-y-1"
            >
              Contact Us Today
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}