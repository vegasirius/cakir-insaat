"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

export default function ProjelerPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <div className="brand-page min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="brand-accent-text text-xs font-semibold uppercase tracking-[0.2em]">Projeler</p>
        <h1 className="mt-2 text-4xl">Uyguladığımız proje örnekleri</h1>
        <p className="brand-muted mt-5 max-w-3xl text-base leading-8">
          Referans projelerimizi detaylı incelemek için kartlara tıklayabilirsin.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="brand-card group overflow-hidden rounded-2xl text-left transition hover:-translate-y-1 hover:border-white/30"
            >
              <div className="relative h-64 w-full overflow-hidden bg-zinc-800/80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                <p className="brand-accent-text absolute bottom-4 left-4 text-xs uppercase tracking-[0.18em]">
                  Projeyi İncele
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200">
                    {project.status}
                  </span>
                </div>
                <p className="brand-accent-text mt-2 text-xs uppercase tracking-wide">{project.location}</p>
                <p className="brand-muted mt-4 text-sm">{project.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="brand-card mt-12 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Projeni burada sergileyelim</h2>
          <p className="brand-muted mt-3">
            Yeni görselleri ekledikçe bu alan otomatik olarak daha güçlü bir portföy sayfasına dönüşecek.
          </p>
          <Link
            href="/iletisim"
            className="brand-button mt-6 inline-flex rounded-md px-5 py-3 text-sm font-semibold transition"
          >
            Teklif İletişimi
          </Link>
        </div>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4">
          <div className="brand-card relative w-full max-w-3xl overflow-hidden rounded-2xl">
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-10 rounded-md border border-white/20 bg-black/40 px-3 py-1 text-sm text-white hover:bg-black/60"
            >
              Kapat
            </button>

            <div className="relative h-72 w-full bg-zinc-800/80 md:h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200">
                  {selectedProject.status}
                </span>
              </div>
              <p className="brand-accent-text mt-3 text-xs uppercase tracking-[0.18em]">
                {selectedProject.location}
              </p>
              <p className="brand-muted mt-4 leading-8">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
