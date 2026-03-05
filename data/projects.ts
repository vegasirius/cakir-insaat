export type ProjectItem = {
  title: string;
  status: "Tamamlanan" | "Devam Eden";
  location: string;
  description: string;
  image: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Örnek Proje 1",
    status: "Tamamlanan",
    location: "İstanbul",
    description: "Bu metni gerçek proje açıklamasıyla değiştireceğiz.",
    image: "/images/projects/proje-01.svg",
  },
  {
    title: "Örnek Proje 2",
    status: "Devam Eden",
    location: "İstanbul",
    description: "Bu metni gerçek proje açıklamasıyla değiştireceğiz.",
    image: "/images/projects/proje-02.svg",
  },
];
