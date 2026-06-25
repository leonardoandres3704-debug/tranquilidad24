import { MessageCircle, Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { whatsappHref, telHref, CONTACT } from "@/lib/contact"
import { cn } from "@/lib/utils"

export function FinalCta() {
  return (
    <section id="contacto" className="border-y border-border bg-brand-red py-20 text-black">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-balance text-3xl font-bold md:text-4xl">
          Protegé tu hogar o comercio hoy
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-black/80">
          Atención local en {CONTACT.location}. Red de profesionales verificados. $25.000 por
          mes con una emergencia incluida.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 px-6 text-base bg-brand-orange text-white hover:bg-brand-orange/90",
            )}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Escribir por WhatsApp
          </a>
          <a
            href={telHref}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-11 px-6 text-base border-border bg-transparent text-black hover:bg-black/5 hover:text-black",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
