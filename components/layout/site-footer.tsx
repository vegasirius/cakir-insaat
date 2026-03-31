import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-center text-sm text-zinc-400">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p>© {new Date().getFullYear()} Çakır İnşaat. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="/hizmetler" className="hover:text-zinc-100 transition">
              Hizmetler
            </Link>
            <Link href="/projeler" className="hover:text-zinc-100 transition">
              Projeler
            </Link>
            <Link href="/iletisim" className="hover:text-zinc-100 transition">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
