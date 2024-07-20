"use client"

import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { Button } from "@/components/ui/button"
import { PricingCardProps } from "@/types"

export function PricingCard({ title, description, price, features}: PricingCardProps) {
  const router = useRouter(); // Get the router object

  function handlePaymentClick() {
    router.push('/payment/?plan=' + title.toLowerCase()); // Redirect to /payment route
  };
  return (
    <Card className="w-full max-w-md bg-card p-6 grid gap-6">
      <div className="grid gap-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-muted-foreground">/mo</span>
      </div>
      <div className="grid gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Button  onClick={handlePaymentClick} className="w-full">Get started</Button>
    </Card>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
