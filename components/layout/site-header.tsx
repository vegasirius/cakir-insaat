import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export function SiteHeader({ isTransparent = false }: { isTransparent?: boolean }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        isTransparent
          ? "absolute w-full bg-transparent text-white"
          : "border-b border-white/10 bg-zinc-950/90 text-zinc-300 backdrop-blur"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/10.png"
            alt="Çakır İnşaat Logo"
            width={140}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition hover:text-white",
                isTransparent ? "text-zinc-200" : "text-zinc-300"
              )}
            >
              {item.label}
            </Link>
          ))}
//... existing code ...
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/iletisim"
            className="hidden rounded-md border border-white/50 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:block"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </header>
  );
}
