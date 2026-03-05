import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-zinc-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
        <p>© {new Date().getFullYear()} Çakır İnşaat. Tüm hakları saklıdır.</p>
        <div className="flex items-center gap-4">
          <Link href="/hizmetler" className="hover:text-zinc-200 transition">
            Hizmetler
          </Link>
          <Link href="/projeler" className="hover:text-zinc-200 transition">
            Projeler
          </Link>
          <Link href="/iletisim" className="hover:text-zinc-200 transition">
            İletişim
          </Link>
        </div>
      </div>
    </footer>
  );
}
