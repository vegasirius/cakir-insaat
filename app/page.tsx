export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <p className="text-xl font-semibold">Çakır İnşaat</p>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#hizmetler" className="text-black/75 hover:text-black">Hizmetler</a>
            <a href="#hakkimizda" className="text-black/75 hover:text-black">Hakkımızda</a>
            <a href="#iletisim" className="text-black/75 hover:text-black">İletişim</a>
          </nav>
          <a
            href="#iletisim"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/85"
          >
            Teklif Al
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-black/10 bg-black/[0.02]">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-black/55">
                Güvenilir Yapı Çözümleri
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Çakır İnşaat ile projelerinizi sağlam temeller üzerine kuruyoruz.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
                Konut ve ticari yapılarda keşiften teslimata kadar tüm süreçleri planlı,
                şeffaf ve yüksek işçilik standardıyla yönetiyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#hizmetler"
                  className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/85"
                >
                  Hizmetleri İncele
                </a>
                <a
                  href="#iletisim"
                  className="rounded-md border border-black/15 px-5 py-3 text-sm font-semibold hover:bg-black/5"
                >
                  Ücretsiz Keşif Talep Et
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <article className="rounded-xl border border-black/10 bg-white p-5">
                <p className="text-3xl font-bold">7/24</p>
                <p className="mt-2 text-sm text-black/70">Süreç bilgilendirme desteği</p>
              </article>
              <article className="rounded-xl border border-black/10 bg-white p-5">
                <p className="text-3xl font-bold">%100</p>
                <p className="mt-2 text-sm text-black/70">Şeffaf proje yönetimi</p>
              </article>
              <article className="rounded-xl border border-black/10 bg-white p-5">
                <p className="text-3xl font-bold">3+</p>
                <p className="mt-2 text-sm text-black/70">Ana hizmet kategorisi</p>
              </article>
              <article className="rounded-xl border border-black/10 bg-white p-5">
                <p className="text-3xl font-bold">1</p>
                <p className="mt-2 text-sm text-black/70">Tek muhatap, net iletişim</p>
              </article>
            </div>
          </div>
        </section>

        <section id="hizmetler" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-black/55">Hizmetlerimiz</p>
            <h2 className="mt-2 text-3xl font-bold">İhtiyacınıza uygun inşaat ve taahhüt çözümleri</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-semibold">Konut Projeleri</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">
                Anahtar teslim daire ve villa projelerinde kaliteli işçilik, planlı uygulama ve zamanında teslim.
              </p>
            </article>
            <article className="rounded-xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-semibold">Anahtar Teslim Taahhüt</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">
                Planlama, metraj, tedarik, saha uygulaması ve teslim süreçlerini tek noktadan yönetiyoruz.
              </p>
            </article>
            <article className="rounded-xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-semibold">Tadilat ve Güçlendirme</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">
                Mevcut yapılarda yenileme, bakım ve yapısal güçlendirme ile kullanım ömrünü artırıyoruz.
              </p>
            </article>
          </div>
        </section>

        <section id="hakkimizda" className="border-y border-black/10 bg-black/[0.02]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-black/55">Hakkımızda</p>
            <h2 className="mt-2 text-3xl font-bold">Projeyi baştan sona aynı kaliteyle yönetiyoruz</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-black/75">
              Çakır İnşaat; konut ve ticari projelerde uçtan uca çözüm üretir. Keşiften teslimata kadar planlama,
              metraj, tedarik, uygulama ve kalite kontrol süreçlerini kendi içinde yönetir. Hedefimiz bütçeyi
              korurken güvenlikten ve işçilik kalitesinden ödün vermemektir.
            </p>
          </div>
        </section>

        <section id="iletisim" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 rounded-2xl border border-black/10 bg-white p-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-black/55">İletişim</p>
              <h2 className="mt-2 text-3xl font-bold">Projenizi birlikte planlayalım</h2>
              <p className="mt-4 text-black/70">
                Projenizin kapsamını konuşmak, keşif planlamak ve net teklif almak için bize ulaşın.
              </p>
            </div>
            <div className="space-y-3 rounded-xl border border-black/10 bg-black/[0.02] p-5 text-sm">
              <p>
                Telefon: <span className="font-semibold">0536 799 36 22</span>
              </p>
              <p>
                E-posta: <span className="font-semibold">(E-posta bilgisi eklenecek)</span>
              </p>
              <p>
                Adres: <span className="font-semibold">Demirkapı Mahallesi Osmanoğlu Caddesi No:52 D:2 İstanbul/Bağcılar</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-6 py-6 text-center text-sm text-black/60">
        © {new Date().getFullYear()} Çakır İnşaat. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
