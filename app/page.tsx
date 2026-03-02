import { AppHeader } from "@/components/app-header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { CtaSection } from "@/components/cta-section"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-between bg-card shadow-sm sm:my-8 sm:min-h-0 sm:rounded-2xl">
      <div className="flex flex-col gap-8">
        <AppHeader />
        <div className="px-6">
          <HeroSection />
        </div>
        <div className="px-6">
          <HowItWorks />
        </div>
        <div className="px-6">
          <CtaSection />
        </div>
      </div>

      <footer className="mt-10 px-6 pb-8 text-center text-xs text-muted-foreground">
        <p>{"© 2026 Scrambly. All rights reserved."}</p>
      </footer>
    </main>
  )
}
