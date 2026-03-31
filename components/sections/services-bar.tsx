import React from "react";
import { Building, KeyRound, Wrench } from "lucide-react";

const services = [
  {
    icon: <Building className="h-8 w-8 text-zinc-300" />,
    name: "Konut Projeleri",
  },
  {
    icon: <KeyRound className="h-8 w-8 text-zinc-300" />,
    name: "Anahtar Teslim",
  },
  {
    icon: <Wrench className="h-8 w-8 text-zinc-300" />,
    name: "Tadilat & Güçlendirme",
  },
];

export function ServicesBar() {
  return (
    <div className="bg-secondary py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-6">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-center">
              {React.cloneElement(service.icon, { className: "h-8 w-8 text-secondary-foreground/80" })}
              <p className="mt-4 text-lg font-semibold text-secondary-foreground">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
