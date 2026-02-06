import { Button } from "@/components/ui/button"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-card px-4 py-3 shadow-sm sm:rounded-t-2xl">
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm"
          aria-hidden="true"
        >
          <span className="text-lg font-extrabold leading-none text-primary-foreground">
            B
          </span>
        </div>
        <span className="text-base font-bold tracking-tight text-foreground">
          Benjamin
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
