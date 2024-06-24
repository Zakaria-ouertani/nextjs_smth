import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function HomePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <section className="bg-[url('/images/bgr-img.png')] text-black w-full h-48 flex items-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
          <p className="text-lg">Here you can describe the services you offer.</p>
        </div>
      </section>
      <section>
        <div>
          <h3 className="rounded-xl border-2 p-2 mt-5 w-max">Subscription Services</h3>
          <div className="flex flex-row mt-5 justify-between">
              <Card className="mx-5 h-32 w-full p-2">
                Bou3
              </Card>
              <Card className="mx-5 h-32 w-full p-2">
                Bou3
              </Card>
              <Card className="mx-5 h-32 w-full p-2">
                Bou3
              </Card>
          </div>
      </div>
      <div>
          <h3 className="rounded-xl border-2 p-2 mt-5 w-max">All Services</h3>
          <div className="flex flex-row mt-5 justify-between">
              <Card className="mx-5 h-32 w-full p-2">
                Bou3
              </Card>
              <Card className="mx-5 h-32 w-full p-2">
                Bou3
              </Card>
              <Card className="mx-5 h-32 w-full p-2">
                Bou3
              </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
