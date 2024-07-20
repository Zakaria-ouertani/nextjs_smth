import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { fetchSpecificPlan } from "@/actions/PaymentPlans.actions"


export async function Checkout({ plan }: { plan: string }) {
  const planInfo = await fetchSpecificPlan(plan) 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="max-w-md w-full bg-card p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium mb-2">Payment Method</h2>
            <div className="grid grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="flex flex-col items-center justify-center p-4 rounded-md hover:bg-accent hover:text-accent-foreground"
              >
                <div className="w-8 h-8 mb-2" />
                <span>Credit Card</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center justify-center p-4 rounded-md hover:bg-accent hover:text-accent-foreground"
              >
                <div className="w-8 h-8 mb-2" />
                <span>PayPal</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center justify-center p-4 rounded-md hover:bg-accent hover:text-accent-foreground"
              >
                <div className="w-8 h-8 mb-2" />
                <span>Apple Pay</span>
              </Button>
            </div>
          </div>
          <Separator />
          <div>
            <h2 className="text-lg font-medium mb-2">Payment Details</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" type="text" placeholder="4111 1111 1111 1111" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiration-date">Expiration Date</Label>
                  <Input id="expiration-date" type="text" placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" type="text" placeholder="123" />
                </div>
              </div>
            </form>
          </div>
          <Separator />
          <div>
            <h2 className="text-lg font-medium mb-2">Order Summary</h2>
            <div className="space-y-2">
    
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{planInfo.price}</span>
              </div>
            </div>
          </div>
          <Button className="w-full">Place Order</Button>
        </div>
      </div>
    </div>
  )
}
