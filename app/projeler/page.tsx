"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

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

// ... existing code
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Projeler</p>
        <h1 className="mt-2 text-4xl">Uyguladığımız proje örnekleri</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
          Referans projelerimizi detaylı incelemek için kartlara tıklayabilirsin.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-2xl border bg-card text-left text-card-foreground transition hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.18em] text-white">
                  Projeyi İncele
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                    {project.status}
                  </span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{project.location}</p>
                <p className="mt-4 text-sm text-muted-foreground">{project.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border bg-card p-6 text-card-foreground md:p-8">
          <h2 className="text-2xl font-semibold">Projeni burada sergileyelim</h2>
          <p className="mt-3 text-muted-foreground">
            Yeni görselleri ekledikçe bu alan otomatik olarak daha güçlü bir portföy sayfasına dönüşecek.
          </p>
          <Button asChild className="mt-6">
            <Link href="/iletisim">
              Teklif İletişimi
            </Link>
          </Button>
        </div>
      </main>

      {selectedProject && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border bg-card text-card-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Kapat butonu ve sayaç */}
            <div className="absolute right-4 top-4 z-10 flex items-center gap-3">
              <span className="rounded-md border bg-background/50 px-3 py-1 text-xs">
                {selectedIndex + 1} / {projects.length}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedIndex(null)}
                className="h-8 w-8 rounded-full border bg-background/50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="sr-only">Kapat</span>
              </Button>
            </div>

            <div className="relative h-72 w-full bg-secondary md:h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />

              {/* Sol ok tuşu */}
              {selectedIndex > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border bg-background/50"
                  aria-label="Önceki proje"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
              )}

              {/* Sağ ok tuşu */}
              {selectedIndex < projects.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border bg-background/50"
                  aria-label="Sonraki proje"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  {selectedProject.status}
                </span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {selectedProject.location}
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">{selectedProject.description}</p>

              {/* Navigasyon ipucu */}
              <p className="mt-6 text-xs text-muted-foreground">
                <kbd className="rounded border px-2 py-1 font-sans">◀</kbd>
                {" "}<kbd className="rounded border px-2 py-1 font-sans">▶</kbd>
                {" "}tuşları ile gezinebilir,{" "}
                <kbd className="rounded border px-2 py-1 font-sans">Esc</kbd>
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
