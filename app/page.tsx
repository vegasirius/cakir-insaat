export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <a href="#anasayfa" className="text-xl font-semibold tracking-wide">Çakır İnşaat</a>
          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            <a href="#hizmetler" className="hover:text-white">Hizmetler</a>
            <a href="#hakkimizda" className="hover:text-white">Hakkımızda</a>
            <a href="#surec" className="hover:text-white">Süreç</a>
            <a href="#iletisim" className="hover:text-white">İletişim</a>
          </nav>
          <a
            href="#iletisim"
            className="rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            Teklif Al
          </a>
        </div>
      </header>

      <main id="anasayfa">
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
                <a
                  href="#hizmetler"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                >
                  Hizmetleri İncele
                </a>
                <a
                  href="#iletisim"
                  className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  İletişime Geç
                </a>
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

        <section id="hizmetler" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Hizmetler</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Uçtan uca inşaat çözümleri</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-300">
              Her projede güvenlik, süre ve maliyet dengesini koruyan uygulama modeliyle ilerliyoruz.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="group rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-white/30">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">01</p>
              <h3 className="mt-3 text-xl font-semibold">Konut Projeleri</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Anahtar teslim daire ve villa projelerinde kaliteli işçilik, planlı uygulama ve zamanında teslim.
              </p>
            </article>

            <article className="group rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-white/30">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">02</p>
              <h3 className="mt-3 text-xl font-semibold">Anahtar Teslim Taahhüt</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Planlama, metraj, tedarik, saha uygulaması ve teslim aşamalarını tek merkezde yönetiyoruz.
              </p>
            </article>

            <article className="group rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-white/30">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">03</p>
              <h3 className="mt-3 text-xl font-semibold">Tadilat ve Güçlendirme</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Mevcut yapılarda yenileme, bakım ve yapısal güçlendirme ile güvenli kullanım ömrünü artırıyoruz.
              </p>
            </article>
          </div>
        </section>

        <section id="hakkimizda" className="border-y border-white/10 bg-zinc-900/40">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Hakkımızda</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Projeyi baştan sona aynı kaliteyle yönetiyoruz</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
                Çakır İnşaat; konut ve ticari projelerde uçtan uca çözüm üretir. Keşiften teslimata kadar planlama,
                metraj, tedarik, uygulama ve kalite kontrol süreçlerini kendi içinde yönetir. Hedefimiz bütçeyi
                korurken güvenlikten ve işçilik kalitesinden ödün vermemektir.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-sm text-zinc-400">Yaklaşımımız</p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-200">
                <li>• Net keşif ve doğru metraj</li>
                <li>• Programlı saha uygulaması</li>
                <li>• Düzenli kalite ve güvenlik kontrolü</li>
                <li>• Zamanında teslim hedefi</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="surec" className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Süreç</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">4 adımda proje yönetimi</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <article className="rounded-xl border border-white/10 bg-zinc-900 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Adım 1</p>
              <h3 className="mt-2 text-base font-semibold">Keşif</h3>
              <p className="mt-2 text-sm text-zinc-300">Saha analizi, ihtiyaç ve kapsam belirleme.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-zinc-900 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Adım 2</p>
              <h3 className="mt-2 text-base font-semibold">Planlama</h3>
              <p className="mt-2 text-sm text-zinc-300">Metraj, iş programı ve maliyetlendirme.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-zinc-900 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Adım 3</p>
              <h3 className="mt-2 text-base font-semibold">Uygulama</h3>
              <p className="mt-2 text-sm text-zinc-300">Saha operasyonu ve kalite kontrol takibi.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-zinc-900 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Adım 4</p>
              <h3 className="mt-2 text-base font-semibold">Teslim</h3>
              <p className="mt-2 text-sm text-zinc-300">Kontrol, onay ve anahtar teslim kapanış.</p>
            </article>
          </div>
        </section>

        <section id="iletisim" className="border-t border-white/10 bg-zinc-900/40">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">İletişim</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Projenizi birlikte planlayalım</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
                Projenizin kapsamını netleştirmek, keşif planlamak ve teklif almak için bizimle iletişime geçin.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-zinc-950 p-6">
              <div className="space-y-4 text-sm text-zinc-200">
                <p>
                  Telefon: <a href="tel:+905367993622" className="font-semibold hover:text-white">0536 799 36 22</a>
                </p>
                <p>
                  E-posta: <span className="font-semibold">(Kurumsal e-posta eklenecek)</span>
                </p>
                <p>
                  Adres: <span className="font-semibold">Demirkapı Mahallesi Osmanoğlu Caddesi No:52 D:2 İstanbul/Bağcılar</span>
                </p>
              </div>
              <a
                href="tel:+905367993622"
                className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Çakır İnşaat. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
