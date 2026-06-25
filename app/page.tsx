import { SiteHeader } from "@/components/tranquilidad/site-header"
import { Hero } from "@/components/tranquilidad/hero"
import { MarqueeBanner } from "@/components/tranquilidad/marquee-banner"
import { WhatIs } from "@/components/tranquilidad/what-is"
import { Services } from "@/components/tranquilidad/services"
import { HowItWorks } from "@/components/tranquilidad/how-it-works"
import { Pricing } from "@/components/tranquilidad/pricing"
import { Problems } from "@/components/tranquilidad/problems"
import { JoinTeam } from "@/components/tranquilidad/join-team"
import { FinalCta } from "@/components/tranquilidad/final-cta"
import { SiteFooter } from "@/components/tranquilidad/site-footer"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <MarqueeBanner />
      <WhatIs />
      <Services />
      <HowItWorks />
      <Pricing />
      <Problems />
      <JoinTeam />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
