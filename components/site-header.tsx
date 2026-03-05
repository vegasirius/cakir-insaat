import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src="/images/logo/10.png"
            alt="Çakır İnşaat Logo"
            width={140}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="hidden text-sm tracking-[0.12em] text-zinc-300 lg:inline">ÇAKIR İNŞAAT</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white transition">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/iletisim"
          className="brand-button rounded-md px-4 py-2 text-sm font-semibold transition"
        >
          Teklif Al
        </Link>
      </div>
    </header>
  );
}
