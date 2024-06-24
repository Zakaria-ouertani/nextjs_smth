import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon } from '@radix-ui/react-icons'

export default function PaymentPlans() {
  return (
    <div className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Our Pricing Plans</h1>
            <p className="text-muted-foreground">Choose the plan that fits your needs.</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="p-6 border rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Perfect for individuals and small teams.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Up to 5 users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  5GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Basic analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Email support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="p-6 border rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Ideal for growing teams and businesses.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Up to 20 users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  50GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Advanced analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Priority email support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="p-6 border rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Tailored for large teams and organizations.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Unlimited users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  1TB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Custom analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Dedicated account manager
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg">Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
