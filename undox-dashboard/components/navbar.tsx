"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
      <div className="w-full max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-foreground text-xl font-semibold">
            Cypher
          </Link>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link href="#features-section" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#" className="text-foreground/80 hover:text-foreground transition-colors">
            Solutions
          </Link>
          <Link href="#" className="text-foreground/80 hover:text-foreground transition-colors">
            Documentation
          </Link>
          <Link href="#pricing-section" className="text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </Link>
        </div>

        {/* Sign Up Button */}
        <div className="hidden md:flex items-center">
          <Link 
            href="https://vercel.com/home" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-full font-medium text-sm transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-foreground/80">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
