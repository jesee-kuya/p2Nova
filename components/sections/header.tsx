"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Docs", href: "#docs" },
    { label: "GitHub", href: "#github" },
    { label: "Join Team", href: "#team" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Image src="/images/design-mode/P2Nova%20logo1.png" alt="P2Nova Logo" width={50} height={50} />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-[#E65C2B] transition-colors font-manrope text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-[#E65C2B] hover:bg-[#d14a1a] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300">
            Get Started
          </Button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:text-[#E65C2B] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#E65C2B] transition-colors font-manrope text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-[#E65C2B] hover:bg-[#d14a1a] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
