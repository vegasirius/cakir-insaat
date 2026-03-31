import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

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

// ... existing code
export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Hizmetler</p>
        <h1 className="mt-2 text-4xl">Uçtan uca inşaat çözümleri</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
          Projenizin ölçeğine ve ihtiyacına uygun şekilde teknik planlama, uygulama ve teslim süreçlerini yönetiyoruz.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-2xl border bg-card p-6 text-card-foreground">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-xl font-semibold">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border bg-card p-6 text-card-foreground md:p-8">
          <h2 className="text-2xl font-semibold">Projeniz için teklif alın</h2>
          <p className="mt-3 text-muted-foreground">Saha keşfi ve teknik değerlendirme için bizimle iletişime geçebilirsiniz.</p>
          <Button asChild className="mt-6">
            <Link href="/iletisim">
              İletişim Sayfasına Git
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
