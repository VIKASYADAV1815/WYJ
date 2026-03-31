import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Wrench, Hammer, Phone, ArrowUpRight, Star, Quote, MapPin, Mail, Clock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { GridPattern, DotPattern } from "@/components/Patterns";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden">
      {/* Premium Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Home Remodeling"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          <GridPattern className="opacity-20 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full mb-6 border border-white/10 shadow-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="font-sans uppercase text-[10px] tracking-[0.25em] font-semibold text-zinc-300">Premium Services in Atlanta</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
                Elevating Homes Through <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-500">
                  Master Craftsmanship
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Trust-focused remodeling, renovation, and structural repairs. We build your vision with uncompromising quality and local expertise.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-zinc-900 bg-amber-500 rounded-lg overflow-hidden transition-all hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)]"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a
                href="tel:4043889408"
                className="group inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all w-full sm:w-auto backdrop-blur-sm"
              >
                <Phone className="mr-2 w-4 h-4 text-amber-500 group-hover:animate-pulse" />
                Call Now
              </a>
            </FadeIn>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50 hidden md:flex">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-zinc-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <GridPattern />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn className="max-w-2xl">
              <h2 className="font-sans uppercase text-xs tracking-[0.3em] font-bold text-amber-600 mb-4 flex items-center">
                <span className="w-8 h-px bg-amber-600 mr-4" />
                Our Expertise
              </h2>
              <h3 className="font-sans text-3xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight">Comprehensive Solutions</h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/contact" className="inline-flex items-center text-sm text-zinc-900 font-bold hover:text-amber-600 transition-colors group">
                Discuss Your Project <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Home Remodeling", icon: <Hammer className="w-5 h-5" />, desc: "Complete interior and exterior transformations tailored to your lifestyle.", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80", href: "/services" },
              { title: "Renovation", icon: <Wrench className="w-5 h-5" />, desc: "Modern updates for kitchens, baths, and living areas with premium finishes.", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80", href: "/services" },
              { title: "Structural Work", icon: <Shield className="w-5 h-5" />, desc: "Foundation, framing, and structural integrity repairs you can trust.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80", href: "/services" },
              { title: "Repairs", icon: <CheckCircle2 className="w-5 h-5" />, desc: "Reliable maintenance and structural repairs to protect your investment.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80", href: "/services" },
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-zinc-200/60 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.img} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-80" />
                  <div className="absolute bottom-5 left-5 right-5 text-white flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-md shrink-0">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-bold tracking-tight leading-tight">{service.title}</h4>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-zinc-500 leading-relaxed flex-grow text-sm">{service.desc}</p>
                  <Link href={service.href} className="mt-6 flex items-center text-amber-600 text-xs font-bold uppercase tracking-widest group-hover:text-amber-500 transition-colors">
                    Learn more <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="relative order-2 lg:order-1 mt-12 lg:mt-0">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Construction Professional" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-8 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-[240px] z-20">
                <div className="flex items-center space-x-4">
                  <div className="text-amber-500 font-black text-4xl tracking-tighter">10+</div>
                  <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5">Years of</p>
                    <p className="font-black text-zinc-900 text-base leading-none">Experience</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="lg:pl-10 order-1 lg:order-2">
              <h2 className="font-sans uppercase text-xs tracking-[0.3em] font-bold text-amber-600 mb-4 flex items-center">
                <span className="w-8 h-px bg-amber-600 mr-4" />
                About Us
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight leading-[1.15]">
                Built on Trust, <br />Driven by Quality.
              </h3>
              <p className="text-base text-zinc-500 mb-10 leading-relaxed font-light">
                Led by Wiley Jones, WYJ Logistics LLC brings years of trusted expertise to Atlanta&apos;s residential remodeling scene. We believe in doing the job right the first time, focusing on quality workmanship, clear communication, and lasting results.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { title: "Local Atlanta Expertise", desc: "Deep understanding of local architecture, permitting, and building codes." },
                  { title: "Reliable & Transparent", desc: "Honest pricing, clear timelines, and consistent communication for every project." },
                  { title: "Uncompromising Quality", desc: "Premium materials and master craftsmanship that stands the test of time." },
                ].map((point, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-lg bg-amber-100/50 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-bold text-zinc-900 mb-1">{point.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <DotPattern />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="font-sans uppercase text-xs tracking-[0.3em] font-bold text-amber-500 mb-4 justify-center flex items-center">
                <span className="w-6 h-px bg-amber-500 mr-4" />
                Client Stories
                <span className="w-6 h-px bg-amber-500 ml-4" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">What Our Clients Say</h3>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", location: "Buckhead, Atlanta", quote: "WYJ Logistics completely transformed our kitchen. Wiley and his team were professional, on time, and the craftsmanship is simply unmatched. Highly recommend!" },
              { name: "James T.", location: "Midtown, Atlanta", quote: "We had major structural repairs needed before selling our home. They handled everything with complete transparency and incredible attention to detail. True professionals." },
              { name: "Emily & David R.", location: "Decatur, GA", quote: "From the initial estimate to the final walkthrough, the communication was stellar. Our master bathroom renovation exceeded our wildest expectations." },
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/60 p-6 md:p-8 rounded-2xl relative group hover:border-amber-500/30 transition-all shadow-xl hover:shadow-amber-500/5 flex flex-col h-full">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800 group-hover:text-amber-500/20 transition-colors" />
                <div className="flex space-x-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-8 relative z-10 text-sm md:text-base flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center pt-5 border-t border-zinc-800/50 mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-zinc-950 font-bold text-sm shadow-inner shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-zinc-100 font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-zinc-500 text-xs mt-0.5">{testimonial.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn direction="right" className="flex flex-col justify-center">
              <h2 className="font-sans uppercase text-xs tracking-[0.3em] font-bold text-amber-600 mb-4 flex items-center">
                <span className="w-8 h-px bg-amber-600 mr-4" />
                Get In Touch
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">Let&apos;s Build Your <br/>Vision Together</h3>
              <p className="text-base text-zinc-500 mb-10 leading-relaxed font-light max-w-lg">
                Ready to transform your home? Contact us today for a comprehensive consultation and free estimate. We&apos;re here to answer any questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 border border-amber-100">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-1">Call Us</h4>
                    <a href="tel:4043889408" className="text-lg font-medium text-zinc-600 hover:text-amber-600 transition-colors">404-388-9408</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 border border-amber-100">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-1">Email Us</h4>
                    <a href="mailto:wiljent9@aol.com" className="text-lg font-medium text-zinc-600 hover:text-amber-600 transition-colors">wiljent9@aol.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 border border-amber-100">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-1">Location</h4>
                    <p className="text-base font-medium text-zinc-600">1205 Shoreham Dr<br/>Atlanta, GA 30349</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 border border-amber-100">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-1">Hours</h4>
                    <p className="text-base font-medium text-zinc-600">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: By Appointment</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-xl relative overflow-hidden">
              {/* Decorative top line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
              
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-6">Request a Free Estimate</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">First Name</label>
                    <input type="text" id="firstName" className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Email Address</label>
                  <input type="email" id="email" className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Service Needed</label>
                  <select id="service" className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-zinc-700">
                    <option value="">Select a service...</option>
                    <option value="remodeling">Home Remodeling</option>
                    <option value="renovation">Renovation</option>
                    <option value="structural">Structural Work</option>
                    <option value="repairs">Repairs & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Project Details</label>
                  <textarea id="message" rows={3} className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full py-3 mt-2 bg-zinc-900 text-white text-sm font-bold rounded-lg hover:bg-amber-500 transition-colors shadow-lg">
                  Submit Request
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-zinc-950 overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 opacity-20">
          <DotPattern />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-amber-500/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Ready to Elevate Your Home?</h2>
            <p className="text-zinc-400 text-base mb-8 font-light">
              Join the hundreds of satisfied homeowners in Atlanta who trusted WYJ Logistics LLC.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-zinc-900 bg-amber-500 rounded-lg hover:bg-amber-400 transition-colors shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)]"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}