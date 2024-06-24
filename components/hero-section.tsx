import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#FFF5E5] to-[#FFEBF0]">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#333333]">
            Streamline Your SaaS Experience
          </h1>
          <p className="text-lg md:text-xl text-[#666666]">
            Unlock the power of our intuitive SaaS platform and watch your business soar.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#FF6B6B] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF4D4D] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
        <div className="w-full md:w-auto max-w-[400px] md:max-w-none">
          <Image
            src="/placeholder.svg"
            width="600"
            height="400"
            alt="Hero Illustration"
            className="mx-auto animate-float"
          />
        </div>
      </div>
    </section>
  )
}
