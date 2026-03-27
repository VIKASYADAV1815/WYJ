import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { CheckCircle2, Target, Award, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | WYJ Logistics LLC",
  description: "Learn about WYJ Logistics LLC and Wiley Jones. We provide premium residential remodeling services in Atlanta.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <PageHeader 
        title="About WYJ Logistics" 
        description="Dedicated to transforming homes in Atlanta with uncompromising quality, integrity, and master craftsmanship."
        bgImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Introduction & Owner */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="font-sans uppercase text-xs tracking-[0.3em] font-light text-amber-600 mb-4">Our Founder</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-medium uppercase tracking-widest text-zinc-900 mb-8 leading-tight">Meet Wiley Jones</h3>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg font-light">
                <p>
                  WYJ Logistics LLC was founded by Wiley Jones with a simple yet powerful mission: to provide homeowners in Atlanta with remodeling services they can truly rely on.
                </p>
                <p>
                  With extensive experience in residential construction and remodeling, Wiley understands that your home is your most valuable asset. That's why every project, from minor repairs to comprehensive structural renovations, is handled with meticulous attention to detail and a commitment to excellence.
                </p>
                <p>
                  We believe that remodeling shouldn't be stressful. By maintaining open lines of communication, providing transparent pricing, and sticking to project timelines, we ensure a smooth and satisfying experience for every client.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="relative">
              <div className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Wiley Jones" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -inset-4 border-2 border-zinc-900 -z-10 translate-x-4 translate-y-4 sm:translate-x-8 sm:translate-y-8" />
                <div className="absolute bottom-4 -left-2 sm:bottom-8 sm:-left-8 bg-amber-500 p-4 sm:p-6 shadow-xl max-w-[200px] z-20">
                  <p className="text-zinc-900 font-bold text-base sm:text-lg leading-tight">"We build it right the first time."</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-sans uppercase text-xs tracking-[0.3em] font-light text-amber-500 mb-4">Our Standards</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium uppercase tracking-widest text-white leading-tight">Core Values</h3>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Trust & Integrity",
                desc: "We operate with complete transparency. No hidden fees, no cutting corners—just honest work you can count on."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Quality Craftsmanship",
                desc: "We take pride in our work. Using premium materials and proven techniques, we build structures designed to last."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Client-Centric",
                desc: "Your vision is our priority. We listen to your needs and tailor our services to match your specific goals and budget."
              }
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-zinc-800/50 p-10 border border-zinc-700 hover:border-amber-500 transition-colors group">
                <div className="w-16 h-16 bg-zinc-900 text-amber-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{value.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Local Positioning */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeIn>
            <h2 className="font-sans uppercase text-xs tracking-[0.3em] font-light text-amber-600 mb-4">Our Community</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium uppercase tracking-widest text-zinc-900 mb-8 leading-tight">Proudly Serving Atlanta, GA</h3>
            <p className="text-xl text-zinc-600 leading-relaxed mb-12 font-light">
              Based at 1205 Shoreham Dr, we are deeply rooted in the Atlanta community. We understand the local architecture, building codes, and unique needs of homeowners in our area.
            </p>
            <div className="inline-flex items-center justify-center px-8 py-4 bg-zinc-50 border border-zinc-200 text-zinc-900 font-bold uppercase tracking-wider text-sm shadow-sm">
              <CheckCircle2 className="w-5 h-5 mr-3 text-amber-500" />
              Licensed & Insured Local Business
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}