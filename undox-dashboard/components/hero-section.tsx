import React from "react"
import { Button } from "./ui/button"
// import { Header } from "./header"
import Link from "next/link"
import Image from "next/image"
import site_background from "../images/site_background_3.png"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full h-[3800px] md:h-[500px] lg:h-[780px] md:px-0"
    >
      {/* SVG Background */}
      <div className="absolute inset-0 z-0">
        <Image
            src={site_background}
            alt="Dashboard preview"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
      </div>

      <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-16 md:mt-[120px] lg:mt-[160px] px-4">
        <h1 className="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
          Protect sensitive data before it goes Live
        </h1>
        <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto">
          Stream safer, faster, and more securely with Cypher.
        </p>
      </div>

      <Link href="https://vercel.com/home" target="_blank" rel="noopener noreferrer">
        <Button className="relative z-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10">
          Start Free Trial
        </Button>
      </Link>
    </section>
  )
}
