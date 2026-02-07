import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <Image
        src="/images/benjamin-logo.png"
        alt="Benjamin logo"
        width={80}
        height={80}
        className="h-20 w-20 rounded-2xl"
      />
      <h1 className="font-heading text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
        {"Benjamin."}
      </h1>

      <div className="h-px w-full bg-border" role="separator" />

      <p className="text-lg font-medium text-balance text-foreground sm:text-xl">
        Complete simple tasks and start earning
      </p>

      <Button
        asChild
        size="lg"
        className="w-full rounded-lg bg-primary py-6 text-base font-bold uppercase tracking-widest text-primary-foreground shadow-md transition-transform hover:bg-primary/90 active:scale-[0.98]"
      >
        <a href="#download">Download Benjamin</a>
      </Button>

      <div className="h-px w-full bg-border" role="separator" />
    </section>
  )
}
