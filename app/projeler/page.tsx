import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

export default function ProjelerPage() {
  return (
    <div className="brand-page min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="brand-accent-text text-xs font-semibold uppercase tracking-[0.2em]">Projeler</p>
        <h1 className="mt-2 text-4xl">Uyguladığımız proje örnekleri</h1>
        <p className="brand-muted mt-5 max-w-3xl text-base leading-8">
          Bu alana senin paylaşacağın görseller ve logo ile gerçek proje kartlarını ekleyeceğim.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="brand-card overflow-hidden rounded-2xl">
              <div className="relative h-52 w-full bg-zinc-800/80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
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
            </article>
          ))}
        </div>

        <div className="brand-card mt-12 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Görsel ve logo bekleniyor</h2>
          <p className="brand-muted mt-3">
            Görselleri eklediğimizde bu sayfayı doğrudan referans portföyüne dönüştüreceğiz.
          </p>
          <Link
            href="/iletisim"
            className="brand-button mt-6 inline-flex rounded-md px-5 py-3 text-sm font-semibold transition"
          >
            Teklif İletişimi
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
