import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-card px-4 py-3 shadow-sm sm:rounded-t-2xl">
      <div className="flex items-center gap-3">
        <Image
          src="/images/benjamin-logo.png"
          alt="Scrambly logo"
          width={36}
          height={36}
          className="h-9 w-9 rounded-xl"
        />
        <span className="text-base font-bold tracking-tight text-foreground">
          {"Scrambly."}
        </span>
      </div>

      <Button
        asChild
        size="sm"
        className="rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <a href="#download">Get App</a>
      </Button>
    </header>
  )
}
