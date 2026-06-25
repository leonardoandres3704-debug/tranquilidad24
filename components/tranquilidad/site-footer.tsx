import { ShieldCheck } from "lucide-react"
import { CONTACT } from "@/lib/contact"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-maroon-deep py-6 text-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <ShieldCheck className="h-4 w-4 text-brand-orange" aria-hidden="true" />
          TRANQUILIDAD <span className="text-brand-orange">24</span>
          <span className="font-normal text-black/50">· Consultora integral</span>
        </div>
        <p className="text-xs text-black/60">
          {CONTACT.location} · Soluciones que te acompañan siempre.
        </p>
        <p className="text-xs font-medium text-black/80">{CONTACT.phoneDisplay}</p>
        <a href="/terminos" className="text-xs font-medium text-black/70 underline-offset-2 hover:text-black hover:underline">
          Términos y condiciones
        </a>
      </div>
    </footer>
  )
}
