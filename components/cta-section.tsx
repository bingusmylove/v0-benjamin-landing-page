import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="pt-2">
      <Button
        asChild
        size="lg"
        className="w-full rounded-lg bg-primary py-6 text-base font-bold tracking-wide text-primary-foreground shadow-md transition-transform hover:bg-primary/90 active:scale-[0.98]"
      >
        <a href="#download">{"Start Earning Today \u2192"}</a>
      </Button>
    </section>
  )
}
