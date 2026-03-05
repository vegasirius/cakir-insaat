import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Hizmetler</p>
        <h1 className="mt-2 text-4xl font-semibold">Uçtan uca inşaat çözümleri</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
          Projenizin ölçeğine ve ihtiyacına uygun şekilde teknik planlama, uygulama ve teslim süreçlerini yönetiyoruz.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-xl font-semibold">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{service.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-900 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Projeniz için teklif alın</h2>
          <p className="mt-3 text-zinc-300">Saha keşfi ve teknik değerlendirme için bizimle iletişime geçebilirsiniz.</p>
          <Link
            href="/iletisim"
            className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            İletişim Sayfasına Git
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
