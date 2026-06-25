import { Check, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { whatsappHref, CONTACT } from "@/lib/contact"
import { cn } from "@/lib/utils"

const OFFER = [
  "Excelentes comisiones.",
  "Capacitación.",
  "Posibilidad de crecimiento.",
  "Ideal para personas con experiencia en ventas, planes, seguros o puerta a puerta.",
]

const LOOKING = [
  "Buena presencia.",
  "Actitud comercial.",
  "Ganas de generar ingresos.",
  "Disponibilidad para trabajo en terreno.",
]

export function JoinTeam() {
  return (
    <section id="unete" className="bg-brand-cream py-20">
      <div className="mx-auto max-w-6xl px-4">
        <span className="inline-block rounded-full bg-brand-orange px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
          Oportunidad laboral
        </span>
        <h2 className="mt-5 text-3xl font-bold text-black md:text-4xl">
          ¡Sumate a <br className="hidden sm:block" />
          <span className="text-brand-orange">nuestro equipo!</span>
        </h2>
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-black/70">
          Tranquilidad 24 busca vendedores/as para incorporar socios en {CONTACT.location}.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold text-white">Te ofrecemos</h3>
            <ul className="mt-4 space-y-3">
              {OFFER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold text-white">Buscamos personas con</h3>
            <ul className="mt-4 space-y-3">
              {LOOKING.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-brand-maroon-deep p-8 text-center text-black">
          <p className="font-semibold">
            Enviar WhatsApp al{" "}
            <span className="text-brand-orange">{CONTACT.whatsappDisplay}</span>
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-4 h-11 px-6 text-base bg-brand-whatsapp text-white hover:bg-brand-whatsapp/90",
            )}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Escribir por WhatsApp
          </a>
          <p className="mt-4 text-sm text-black/60">Consultora integral · División Tranquilidad 24</p>
        </div>
      </div>
    </section>
  )
}
