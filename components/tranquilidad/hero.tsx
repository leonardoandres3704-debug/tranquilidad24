import Image from "next/image"
import { Phone, UserPlus } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { telHref, CONTACT } from "@/lib/contact"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="inicio" className="bg-brand-maroon text-black">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Consultora integral · {CONTACT.location}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-6xl">
            ¿Un problema <br />
            en <span className="text-brand-orange">tu casa?</span>
          </h1>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-black/70">
            Asociate hoy. Cuando lo necesites, ya tenés a quién llamar. Asistencia para
            emergencias y tareas de mantenimiento en tu hogar o comercio.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#precio"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-6 text-base bg-brand-orange text-white hover:bg-brand-orange/90",
              )}
            >
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              Asociate ahora
            </a>
            <a
              href={telHref}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 px-6 text-base border-border bg-black/5 text-black hover:bg-black/10 hover:text-black",
              )}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src="/images/hero-profesional.png"
              alt="Profesional de mantenimiento del hogar llegando a una vivienda"
              width={640}
              height={560}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
