import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-secondary py-20 text-secondary-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="flex items-center">
          <Image
            src="/images/projects/proje-01.svg" // Gerçek bir görselle değiştirin
            alt="Mimari Tasarım"
            width={800}
            height={900}
            className="h-auto w-full rounded-lg object-cover shadow-2xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">
            Hakkımızda
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Güven ve Kalitenin Buluştuğu Yapılar
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Çakır İnşaat olarak, her projede mükemmelliği hedefleriz. Yılların
            deneyimi ve uzman ekibimizle, sadece binalar değil, aynı zamanda
            kalıcı yaşam alanları ve değerli yatırımlar inşa ediyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
