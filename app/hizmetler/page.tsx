import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const services = [
  {
    title: "Konut Projeleri",
    text: "Anahtar teslim daire ve villa projelerinde kaliteli işçilik, planlı uygulama ve zamanında teslim.",
  },
  {
    title: "Anahtar Teslim Taahhüt",
    text: "Planlama, metraj, tedarik, saha uygulaması ve teslim aşamalarını tek merkezde yönetiyoruz.",
  },
  {
    title: "Tadilat ve Güçlendirme",
    text: "Mevcut yapılarda yenileme, bakım ve yapısal güçlendirme ile güvenli kullanım ömrünü artırıyoruz.",
  },
];

export default function HizmetlerPage() {
  return (
    <div className="brand-page min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="brand-accent-text text-xs font-semibold uppercase tracking-[0.2em]">Hizmetler</p>
        <h1 className="mt-2 text-4xl">Uçtan uca inşaat çözümleri</h1>
        <p className="brand-muted mt-5 max-w-3xl text-base leading-8">
          Projenizin ölçeğine ve ihtiyacına uygun şekilde teknik planlama, uygulama ve teslim süreçlerini yönetiyoruz.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="brand-card rounded-2xl p-6">
              <p className="brand-accent-text text-xs uppercase tracking-[0.18em]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-xl font-semibold">{service.title}</h2>
              <p className="brand-muted mt-4 text-sm leading-7">{service.text}</p>
            </article>
          ))}
        </div>

        <div className="brand-card mt-12 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Projeniz için teklif alın</h2>
          <p className="brand-muted mt-3">Saha keşfi ve teknik değerlendirme için bizimle iletişime geçebilirsiniz.</p>
          <Link
            href="/iletisim"
            className="brand-button mt-6 inline-flex rounded-md px-5 py-3 text-sm font-semibold transition"
          >
            İletişim Sayfasına Git
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
