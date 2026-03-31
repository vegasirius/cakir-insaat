"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

export default function ProjelerPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  // Klavye navigasyonu: Esc, Arrow Left/Right
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft" && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      } else if (e.key === "ArrowRight" && selectedIndex < projects.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < projects.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

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

      {selectedProject && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="brand-card relative w-full max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Kapat butonu ve sayaç */}
            <div className="absolute right-4 top-4 z-10 flex items-center gap-3">
              <span className="rounded-md border border-white/20 bg-black/40 px-3 py-1 text-xs text-white">
                {selectedIndex + 1} / {projects.length}
              </span>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="rounded-md border border-white/20 bg-black/40 px-3 py-1 text-sm text-white hover:bg-black/60"
              >
                Kapat
              </button>
            </div>

            <div className="relative h-72 w-full bg-zinc-800/80 md:h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />

              {/* Sol ok tuşu */}
              {selectedIndex > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white hover:bg-black/80"
                  aria-label="Önceki proje"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Sağ ok tuşu */}
              {selectedIndex < projects.length - 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white hover:bg-black/80"
                  aria-label="Sonraki proje"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
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

              {/* Navigasyon ipucu */}
              <p className="brand-muted mt-6 text-xs">
                <kbd className="rounded border border-white/20 px-2 py-1">◀</kbd>
                {" "}<kbd className="rounded border border-white/20 px-2 py-1">▶</kbd>
                {" "}tuşları ile gezinebilir,{" "}
                <kbd className="rounded border border-white/20 px-2 py-1">Esc</kbd>
                {" "}ile kapatabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
