import { Check, UserPlus } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const BENEFITS = [
  "Una emergencia simple por mes incluida",
  "Profesionales verificados y de confianza",
  "Trabajos auditados",
  "Cobertura hogar y comercio",
  "Trabajos presupuestados con tarifas preferenciales",
  "Programa de referidos — ¡Sumá beneficios!",
]

export function Pricing() {
  return (
    <section id="precio" className="border-y border-border bg-brand-maroon py-20 text-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Cuota mensual
          </p>
          <p className="mt-5 text-5xl font-bold text-brand-orange md:text-6xl">$25.000</p>
          <p className="mt-1 text-black/70">por mes</p>
          <p className="mt-5 max-w-sm text-pretty leading-relaxed text-black/80">
            La tranquilidad de tener a quién llamar. Una emergencia simple por mes incluida.*
          </p>
          <a
            href="#contacto"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-7 h-11 px-6 text-base bg-brand-orange text-white hover:bg-brand-orange/90",
            )}
          >
            <UserPlus className="h-4 w-4" aria-hidden="true" />
            Asociate ahora
          </a>
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-black/50">
            *A partir de la segunda emergencia del mes, se aplican valores preferenciales para
            socios. Consultá condiciones generales en el servicio.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-brand-maroon-deep p-7 md:p-8">
          <h3 className="text-lg font-semibold text-brand-orange">Beneficios de ser socio</h3>
          <ul className="mt-5 space-y-3.5">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-black/90">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
