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
    <div className="min-h-screen bg-zinc-50">
      <PageHeader 
        title="Our Portfolio" 
        description="A curated showcase of our recent residential remodeling and structural improvement work across Atlanta."
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200 mb-6 shadow-md">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-bold text-amber-500 mb-2 uppercase tracking-widest">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white leading-tight font-serif">{project.title}</h3>
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