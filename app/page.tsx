import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="brand-page min-h-screen">
      <SiteHeader />

      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-end">
            <div>
              <p className="brand-accent-text mb-5 text-xs font-semibold uppercase tracking-[0.25em]">
                Güvenli • Huzurlu • Kaliteli
              </p>
              <h1 className="text-4xl leading-tight md:text-6xl">
                Projelerinizi sağlam temeller ve güçlü işçilikle hayata geçiriyoruz.
              </h1>
              <p className="brand-muted mt-6 max-w-xl text-base leading-8 md:text-lg">
                Çakır İnşaat, konut ve taahhüt projelerinde keşiften teslimata kadar tüm süreci tek merkezden yönetir.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/hizmetler"
                  className="brand-button rounded-md px-5 py-3 text-sm font-semibold transition"
                >
                  Hizmetler
                </Link>
                <Link
                  href="/projeler"
                  className="brand-button-ghost rounded-md px-5 py-3 text-sm font-semibold transition"
                >
                  Projeler
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <article className="brand-card rounded-2xl p-5">
                <p className="text-3xl font-semibold">7/24</p>
                <p className="brand-muted mt-2 text-sm">Bilgilendirme ve süreç takibi</p>
              </article>
              <article className="brand-card rounded-2xl p-5">
                <p className="text-3xl font-semibold">%100</p>
                <p className="brand-muted mt-2 text-sm">Şeffaf iş planı</p>
              </article>
              <article className="brand-card rounded-2xl p-5">
                <p className="text-3xl font-semibold">3+</p>
                <p className="brand-muted mt-2 text-sm">Uzman hizmet alanı</p>
              </article>
              <article className="brand-card rounded-2xl p-5">
                <p className="text-3xl font-semibold">1</p>
                <p className="brand-muted mt-2 text-sm">Tek muhatap, net yönetim</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="brand-accent-text text-xs font-semibold uppercase tracking-[0.2em]">Hakkımızda</p>
              <h2 className="mt-2 text-3xl md:text-4xl">Projeyi baştan sona aynı kaliteyle yönetiyoruz</h2>
            </div>
          </div>
          <p className="brand-muted max-w-4xl text-base leading-8">
            Çakır İnşaat; konut ve ticari projelerde uçtan uca çözüm üretir. Keşiften teslimata kadar planlama,
            metraj, tedarik, uygulama ve kalite kontrol süreçlerini kendi içinde yönetir. Hedefimiz bütçeyi
            korurken güvenlikten ve işçilik kalitesinden ödün vermemektir.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Link href="/hizmetler" className="brand-card rounded-xl p-5 hover:border-white/30 transition">
              <p className="brand-muted text-sm">Sayfa</p>
              <h3 className="mt-2 text-xl font-semibold">Hizmetler</h3>
            </Link>
            <Link href="/projeler" className="brand-card rounded-xl p-5 hover:border-white/30 transition">
              <p className="brand-muted text-sm">Sayfa</p>
              <h3 className="mt-2 text-xl font-semibold">Projeler</h3>
            </Link>
            <Link href="/iletisim" className="brand-card rounded-xl p-5 hover:border-white/30 transition">
              <p className="brand-muted text-sm">Sayfa</p>
              <h3 className="mt-2 text-xl font-semibold">İletişim</h3>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
