import { PricingCard } from "@/components/pricing-card"
import { PricingCardProps } from "@/types"
import { fetchPlans } from "@/actions/PaymentPlans.actions"

export default async function PaymentPlans() {
  const PaymentPlanInfo = await fetchPlans()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Our Pricing Plans</h1>
            <p className="text-muted-foreground">Choose the plan that fits your needs.</p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start">
        {
          PaymentPlanInfo.map((info, index) => (
            <PricingCard
              title={info.title}
              description={info.description}
              price={info.price}
              features={info.features}
              key={index}
            />
          ))
        }
        </div>
      </div>
    </div>
  )
}
