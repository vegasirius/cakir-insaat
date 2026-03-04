export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-black/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <p className="text-xl font-semibold">Çakır İnşaat</p>
          <a
            href="#iletisim"
            className="rounded-md border border-black/15 px-4 py-2 text-sm font-medium hover:bg-black/5"
          >
            Teklif Al
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-black/60">
            Güvenilir Yapı Çözümleri
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Çakır İnşaat ile projelerinizi sağlam temeller üzerine kuruyoruz.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-black/70">
            Konut, ticari yapı ve taahhüt projelerinde planlama, uygulama ve teslim
            süreçlerini profesyonel şekilde yönetiyoruz.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#hizmetler"
              className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/85"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#iletisim"
              className="rounded-md border border-black/15 px-5 py-3 text-sm font-semibold hover:bg-black/5"
            >
              Bizimle İletişime Geçin
            </a>
          </div>
        </section>

        <section id="hakkimizda" className="mx-auto w-full max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold">Hakkımızda</h2>
          <p className="mt-3 max-w-4xl text-black/70">
            Çakır İnşaat; konut ve ticari projelerde uçtan uca çözüm üretir.
            Keşiften teslimata kadar planlama, metraj, tedarik, uygulama ve
            kalite kontrol süreçlerini kendi içinde yönetir. Hedefimiz bütçeyi
            korurken güvenlikten ve işçilik kalitesinden ödün vermemektir.
          </p>
        </section>

        <section id="hizmetler" className="border-y border-black/10 bg-black/[0.02]">
          <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 py-14 md:grid-cols-3">
            <article className="rounded-lg border border-black/10 bg-white p-5">
              <h2 className="text-lg font-semibold">Konut Projeleri</h2>
              <p className="mt-2 text-sm text-black/70">
                Anahtar teslim daire ve villa projelerinde kaliteli işçilik ve zamanında teslim.
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-5">
              <h2 className="text-lg font-semibold">Anahtar Teslim Taahhüt</h2>
              <p className="mt-2 text-sm text-black/70">
                Planlama, tedarik, uygulama ve teslim süreçlerini tek noktadan yönetiyoruz.
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-5">
              <h2 className="text-lg font-semibold">Tadilat ve Güçlendirme</h2>
              <p className="mt-2 text-sm text-black/70">
                Mevcut yapılarda yenileme, bakım ve yapısal güçlendirme hizmetleri.
              </p>
            </article>
          </div>
        </section>

        <section id="iletisim" className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">İletişim</h2>
          <p className="mt-3 max-w-2xl text-black/70">
            Projenizi konuşmak için bize ulaşın.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              Telefon: <span className="font-medium">0536 799 36 22</span>
            </p>
            <p>
              E-posta: <span className="font-medium">(E-posta bilgisi eklenecek)</span>
            </p>
            <p>
              Adres: <span className="font-medium">Demirkapı Mahallesi Osmanoğlu Caddesi No:52 D:2 İstanbul/Bağcılar</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-6 py-6 text-center text-sm text-black/60">
        © {new Date().getFullYear()} Çakır İnşaat. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
