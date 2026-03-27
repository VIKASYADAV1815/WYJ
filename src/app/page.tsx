import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Wrench, Hammer, Phone, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { GridPattern, DotPattern } from "@/components/Patterns";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Home Remodeling"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-zinc-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="font-sans uppercase text-xs tracking-[0.3em] font-light text-white">Premium Services in Atlanta</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white mb-8 leading-[1.1]">
                Elevating Homes Through <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  Master Craftsmanship
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Trust-focused remodeling, renovation, and structural repairs. We build your vision with uncompromising quality and local expertise.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-zinc-900 bg-amber-500 overflow-hidden transition-all hover:bg-amber-400 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a
                href="tel:4043889408"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto backdrop-blur-sm"
              >
                <Phone className="mr-2 w-5 h-5 text-amber-500 group-hover:animate-bounce" />
                Call Now
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <GridPattern />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn className="max-w-2xl">
              <h2 className="font-sans uppercase text-xs tracking-[0.3em] font-light text-amber-600 mb-4">Our Expertise</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-medium uppercase tracking-widest text-zinc-900 leading-tight">Comprehensive Solutions</h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/services" className="inline-flex items-center text-zinc-900 font-bold hover:text-amber-600 transition-colors group">
                View All Services <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Home Remodeling", icon: <Hammer className="w-8 h-8" />, desc: "Complete interior and exterior transformations.", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" },
              { title: "Renovation", icon: <Wrench className="w-8 h-8" />, desc: "Modern updates for kitchens, baths, and living areas.", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80" },
              { title: "Structural Work", icon: <Shield className="w-8 h-8" />, desc: "Foundation, framing, and structural integrity repairs.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" },
              { title: "Repairs", icon: <CheckCircle2 className="w-8 h-8" />, desc: "Reliable maintenance and structural repairs.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" },
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} className="group relative bg-white rounded-none overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.img} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-zinc-900/40 group-hover:bg-zinc-900/20 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-amber-500 text-zinc-900 flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-amber-600 transition-colors font-serif">{service.title}</h4>
                  <p className="text-zinc-600 leading-relaxed flex-grow">{service.desc}</p>
                </div>
                <div className="h-1 w-full bg-zinc-100 group-hover:bg-amber-500 transition-colors duration-500" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview & Why Choose Us */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Construction Professional" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover shadow-2xl"
                />
                {/* Decorative Elements */}
                <div className="absolute -inset-4 border-2 border-amber-500 -z-10 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-6" />
                <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-8 bg-zinc-900 p-6 sm:p-8 shadow-xl max-w-[240px] sm:max-w-xs z-20">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="text-amber-500 font-black text-4xl sm:text-5xl">10+</div>
                    <div>
                      <p className="text-xs sm:text-sm text-zinc-400 font-bold uppercase tracking-widest">Years of</p>
                      <p className="font-bold text-white text-lg sm:text-xl">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="lg:pl-10 mt-16 lg:mt-0">
              <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight font-serif">Built on Trust, <br />Driven by Quality.</h3>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed font-light">
                Led by Wiley Jones, WYJ Logistics LLC brings years of trusted expertise to Atlanta's residential remodeling scene. We believe in doing the job right the first time, focusing on quality workmanship, clear communication, and lasting results.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { title: "Local Atlanta Expertise", desc: "Deep understanding of local architecture and codes." },
                  { title: "Reliable & Transparent", desc: "Honest pricing and clear timelines for every project." },
                  { title: "Uncompromising Quality", desc: "Premium materials and master craftsmanship." },
                ].map((point, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 group-hover:text-zinc-900 transition-colors" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-zinc-900">{point.title}</h4>
                      <p className="text-zinc-600">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-zinc-900 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all group">
                Discover Our Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-32 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <DotPattern />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/10 blur-3xl rounded-full transform translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight font-serif">Ready to Transform <br/>Your Home?</h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
              Contact us today for a free estimate. Let's discuss how our master craftsmanship can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-zinc-900 bg-amber-500 hover:bg-amber-400 transition-colors w-full sm:w-auto"
              >
                Start Your Project
              </Link>
              <a
                href="tel:4043889408"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border border-zinc-700 hover:border-amber-500 hover:text-amber-500 transition-colors w-full sm:w-auto"
              >
                <Phone className="mr-3 w-5 h-5" />
                404-388-9408
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}