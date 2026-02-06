import { FeatureStep } from "@/components/feature-step"

const steps = [
  {
    title: "Download the Benjamin app",
    description: "Free to install",
  },
  {
    title: "Browse & complete tasks",
    description: "Easy tasks anyone can do",
  },
  {
    title: "Cash out your earnings",
    description: "Get paid for each task. The more tasks you complete, the more you can earn!",
  },
]

export function HowItWorks() {
  return (
    <section className="flex flex-col gap-6 rounded-2xl bg-[#29596D] p-6">
      <h2 className="text-xl font-bold text-white">
        {"How Benjamin Works \u2192"}
      </h2>

      <div className="flex flex-col gap-5">
        {steps.map((step) => (
          <FeatureStep
            key={step.title}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  )
}
