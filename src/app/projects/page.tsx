import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | WYJ Logistics LLC",
  description: "View our portfolio of premium residential remodeling and renovation projects in Atlanta, GA.",
};

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Remodeling",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Master Bathroom Upgrade",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Structural Beam Installation",
    category: "Structural Work",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Full Basement Finishing",
    category: "Remodeling",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Exterior Deck Restoration",
    category: "Repairs",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Open Concept Living Area",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 overflow-x-hidden">
      <PageHeader 
        title="Our Portfolio" 
        description="A curated showcase of our recent residential remodeling and structural improvement work across Atlanta."
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">Our Work in Action</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                We take pride in every project we undertake. Below is a selection of our work, showcasing the quality, craftsmanship, and attention to detail we bring to every home. From complete remodels to structural repairs, our portfolio is a testament to our commitment to excellence.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.05} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/10 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-xs font-bold text-amber-400 mb-1 uppercase tracking-widest">{project.category}</p>
                    <h3 className="text-xl font-bold text-white leading-tight font-serif filter drop-shadow-sm">{project.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}