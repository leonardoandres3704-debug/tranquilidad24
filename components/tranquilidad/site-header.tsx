"use client"

import { useState } from "react"
import { Phone, ShieldCheck, Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { telHref, CONTACT } from "@/lib/contact"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Precio", href: "/#precio" },
  { label: "Únete", href: "/#unete" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-brand-maroon-deep/95 backdrop-blur supports-[backdrop-filter]:bg-brand-maroon-deep/80 text-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <ShieldCheck className="h-5 w-5 text-brand-orange" aria-hidden="true" />
          <span className="text-base">
            TRANQUILIDAD <span className="text-brand-orange">24</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-black/70 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className={cn(
              buttonVariants({ size: "default" }),
              "hidden h-9 bg-brand-orange px-4 text-white hover:bg-brand-orange/90 sm:inline-flex",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Contactar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-black md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-brand-maroon-deep px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-black/85 hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={telHref}
              className={cn(
                buttonVariants({ size: "default" }),
                "mt-2 h-10 bg-brand-orange text-white hover:bg-brand-orange/90",
              )}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
