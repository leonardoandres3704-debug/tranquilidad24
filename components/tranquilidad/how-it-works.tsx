import { MessageCircle, Headphones, Wrench, BadgeCheck } from "lucide-react"

const STEPS = [
  {
    icon: MessageCircle,
    title: "Contactanos",
    desc: "Llamá o escribinos por WhatsApp.",
  },
  {
    icon: Headphones,
    title: "Te atendemos",
    desc: "Te escuchamos y evaluamos tu necesidad.",
  },
  {
    icon: Wrench,
    title: "Asistencia rápida",
    desc: "Coordinamos al profesional más cercano.",
  },
  {
    icon: BadgeCheck,
    title: "Solución garantizada",
    desc: "Trabajos realizados con tarifas preferenciales.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-brand-cream py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Simple y rápido
          </p>
          <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
            ¿Cómo funciona?
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-brand-maroon-deep text-brand-orange">
                <step.icon className="h-7 w-7" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-semibold text-black">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-black/70">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
