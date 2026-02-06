import { Check } from "lucide-react"

interface FeatureStepProps {
  title: string
  description: string
}

export function FeatureStep({ title, description }: FeatureStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
        <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
      </div>
      <div>
        <p className="text-base font-bold text-white">{title}</p>
        <p className="mt-0.5 text-sm italic text-white/70">
          {description}
        </p>
      </div>
    </div>
  )
}
