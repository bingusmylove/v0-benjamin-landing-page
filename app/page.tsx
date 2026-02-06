import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { CtaSection } from "@/components/cta-section"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-between bg-card px-6 py-10 shadow-sm sm:my-8 sm:min-h-0 sm:rounded-2xl sm:py-12">
      <div className="flex flex-col gap-8">
        <HeroSection />
        <HowItWorks />
        <CtaSection />
      </div>

      <footer className="mt-10 text-center text-xs text-muted-foreground">
        <p>{"© 2026 Benjamin. All rights reserved."}</p>
      </footer>
    </main>
  )
}
