import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">İletişim</p>
        <h1 className="mt-2 text-4xl">Projenizi birlikte planlayalım</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
          Keşif, fiyatlandırma ve proje kapsamı için aşağıdaki bilgilerden bize ulaşabilirsiniz.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border bg-card p-6 text-card-foreground md:col-span-1">
            <h2 className="text-lg font-semibold">Telefon</h2>
            <a href="tel:+905367993622" className="mt-3 block text-foreground/80 hover:text-foreground">
              0536 799 36 22
            </a>
          </article>

          <article className="rounded-2xl border bg-card p-6 text-card-foreground md:col-span-1">
            <h2 className="text-lg font-semibold">E-posta</h2>
            <p className="mt-3 text-muted-foreground">Kurumsal e-posta yakında eklenecek</p>
          </article>

          <article className="rounded-2xl border bg-card p-6 text-card-foreground md:col-span-1">
            <h2 className="text-lg font-semibold">Adres</h2>
            <p className="mt-3 text-muted-foreground">Demirkapı Mahallesi Osmanoğlu Caddesi No:52 D:2 İstanbul/Bağcılar</p>
          </article>
        </div>

        <div className="mt-10 rounded-2xl border bg-card p-6 text-card-foreground md:p-8">
          <h2 className="text-2xl font-semibold">Hızlı iletişim</h2>
          <p className="mt-3 text-muted-foreground">Telefon üzerinden hemen ulaşmak için butonu kullanabilirsin.</p>
          <Button asChild className="mt-6">
            <a href="tel:+905367993622">
              Hemen Ara
            </a>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
