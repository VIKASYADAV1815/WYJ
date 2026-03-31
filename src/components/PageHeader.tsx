import { ReactNode } from "react";
import { FadeIn } from "./FadeIn";
import { DotPattern } from "./Patterns";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  bgImage?: string;
}

export function PageHeader({ title, description, children, bgImage }: PageHeaderProps) {
  return (
    <section className="relative pt-48 pb-32 bg-zinc-950 overflow-hidden">
      {bgImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40 grayscale-[30%]"
            priority
          />
          <div className="absolute inset-0 bg-zinc-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 opacity-20 z-0">
            <DotPattern />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950 z-0" />
        </>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center w-full">
        <div className="max-w-4xl mx-auto text-center w-full">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-serif">{title}</h1>
          </FadeIn>
          {description && (
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed font-light">
                {description}
              </p>
            </FadeIn>
          )}
          {children && (
            <FadeIn delay={0.2} className="mt-8">
              {children}
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}