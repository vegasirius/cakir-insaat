import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Arka Plan Videosu */}
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        src="/videos/hero-background.mp4" // Videoyu public/videos/ altına eklemelisiniz
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Siyah Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header (Transparan) */}
      <SiteHeader isTransparent />

      {/* İçerik */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-display text-5xl leading-tight md:text-7xl lg:text-8xl">
          Çakır İnşaat
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-300">
          Modern mimariyi, sağlam temeller ve estetik tasarımla buluşturuyoruz.
        </p>
        <Link
          href="/projeler"
          className="mt-8 rounded-md border border-white/80 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          Projelerimizi İnceleyin
        </Link>
      </div>
    </div>
  );
}
