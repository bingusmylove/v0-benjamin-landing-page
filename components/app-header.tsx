import { Button } from "@/components/ui/button"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between rounded-b-2xl bg-foreground px-4 py-3 shadow-lg sm:rounded-2xl">
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm"
          aria-hidden="true"
        >
          <span className="text-lg font-extrabold leading-none text-primary-foreground">
            B
          </span>
        </div>
        <span className="text-base font-bold tracking-tight text-card">
          Benjamin
        </span>
      </div>

      <Button
        asChild
        size="sm"
        className="rounded-full bg-card/15 px-5 text-sm font-semibold text-card backdrop-blur-sm transition-colors hover:bg-card/25"
      >
        <a href="#download">Get App</a>
      </Button>
    </header>
  )
}
