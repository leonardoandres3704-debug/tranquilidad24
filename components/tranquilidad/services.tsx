import { Droplets, Zap, Flame, Hammer, Home, MapPin, Users } from "lucide-react"
import { CONTACT } from "@/lib/contact"

const SERVICES = [
  {
    icon: Droplets,
    title: "Plomería",
    desc: "Fugas y cañerías, destapaciones, bachas tapadas.",
  },
  {
    icon: Zap,
    title: "Electricidad",
    desc: "Cortocircuitos, tableros de circuitos, instalaciones.",
  },
  {
    icon: Flame,
    title: "Gasista",
    desc: "Instalaciones, pérdidas de gas, artefactos, conexiones y calefones.",
  },
  {
    icon: Hammer,
    title: "Herrería",
    desc: "Rejas y puertas, cierres y bisagras, estructuras, persianas.",
  },
  {
    icon: Home,
    title: "Techista",
    desc: "Filtraciones, goteras, tejas y chapas, membranas.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Cobertura completa
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Te brindamos asistencia en
          </h2>
          <p className="mt-3 text-white/70">
            Profesionales verificados para cada tipo de problema en tu hogar o comercio.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-brand-orange">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-brand-maroon-deep p-5 text-black">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-brand-orange">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold">Atención local</p>
              <p className="text-sm text-black/70">{CONTACT.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-brand-maroon-deep p-5 text-black">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-brand-orange">
              <Users className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold">Red de profesionales</p>
              <p className="text-sm text-black/70">Verificados y de confianza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
