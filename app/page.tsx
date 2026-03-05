import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />

      <main>
        <section className="border-b border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Güvenli • Huzurlu • Kaliteli
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Projelerinizi sağlam temeller ve güçlü işçilikle hayata geçiriyoruz.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                Çakır İnşaat, konut ve taahhüt projelerinde keşiften teslimata kadar tüm süreci tek merkezden yönetir.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/hizmetler"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                >
                  Hizmetler
                </Link>
                <Link
                  href="/projeler"
                  className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Projeler
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <article className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-semibold">7/24</p>
                <p className="mt-2 text-sm text-zinc-300">Bilgilendirme ve süreç takibi</p>
              </article>
              <article className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-semibold">%100</p>
                <p className="mt-2 text-sm text-zinc-300">Şeffaf iş planı</p>
              </article>
              <article className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-semibold">3+</p>
                <p className="mt-2 text-sm text-zinc-300">Uzman hizmet alanı</p>
              </article>
              <article className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-semibold">1</p>
                <p className="mt-2 text-sm text-zinc-300">Tek muhatap, net yönetim</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Hakkımızda</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Projeyi baştan sona aynı kaliteyle yönetiyoruz</h2>
            </div>
          </div>
          <p className="max-w-4xl text-base leading-8 text-zinc-300">
            Çakır İnşaat; konut ve ticari projelerde uçtan uca çözüm üretir. Keşiften teslimata kadar planlama,
            metraj, tedarik, uygulama ve kalite kontrol süreçlerini kendi içinde yönetir. Hedefimiz bütçeyi
            korurken güvenlikten ve işçilik kalitesinden ödün vermemektir.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Link href="/hizmetler" className="rounded-xl border border-white/10 bg-zinc-900 p-5 hover:border-white/30 transition">
              <p className="text-sm text-zinc-400">Sayfa</p>
              <h3 className="mt-2 text-xl font-semibold">Hizmetler</h3>
            </Link>
            <Link href="/projeler" className="rounded-xl border border-white/10 bg-zinc-900 p-5 hover:border-white/30 transition">
              <p className="text-sm text-zinc-400">Sayfa</p>
              <h3 className="mt-2 text-xl font-semibold">Projeler</h3>
            </Link>
            <Link href="/iletisim" className="rounded-xl border border-white/10 bg-zinc-900 p-5 hover:border-white/30 transition">
              <p className="text-sm text-zinc-400">Sayfa</p>
              <h3 className="mt-2 text-xl font-semibold">İletişim</h3>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
