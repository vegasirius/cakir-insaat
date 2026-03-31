import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  // Sadece ilk 3 projeyi al
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-[#0a0a0a] py-20 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-display text-sm uppercase tracking-widest text-zinc-400">
            Portfolyo
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Öne Çıkan Projeler
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Link
              href="/projeler"
              key={project.title}
              className="group relative block overflow-hidden rounded-lg"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm uppercase text-zinc-300">
                  {project.location}
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-black/50 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
