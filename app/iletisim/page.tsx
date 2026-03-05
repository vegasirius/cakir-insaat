import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">İletişim</p>
        <h1 className="mt-2 text-4xl font-semibold">Projenizi birlikte planlayalım</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
          Keşif, fiyatlandırma ve proje kapsamı için aşağıdaki bilgilerden bize ulaşabilirsiniz.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-zinc-900 p-6 md:col-span-1">
            <h2 className="text-lg font-semibold">Telefon</h2>
            <a href="tel:+905367993622" className="mt-3 block text-zinc-200 hover:text-white">
              0536 799 36 22
            </a>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zinc-900 p-6 md:col-span-1">
            <h2 className="text-lg font-semibold">E-posta</h2>
            <p className="mt-3 text-zinc-200">Kurumsal e-posta yakında eklenecek</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zinc-900 p-6 md:col-span-1">
            <h2 className="text-lg font-semibold">Adres</h2>
            <p className="mt-3 text-zinc-200">Demirkapı Mahallesi Osmanoğlu Caddesi No:52 D:2 İstanbul/Bağcılar</p>
          </article>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Hızlı iletişim</h2>
          <p className="mt-3 text-zinc-300">Telefon üzerinden hemen ulaşmak için butonu kullanabilirsin.</p>
          <a
            href="tel:+905367993622"
            className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            Hemen Ara
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
